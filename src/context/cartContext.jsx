import { createContext, useReducer} from "react";

export const CartContext = createContext()

const initialState = []

const reducer = (state, action) => {
    const {actionType, payload} = action
    const {id} = payload
    switch(actionType){
        case 'ADD_TO_CART': {
            const productInCartIndex = state.findIndex((item) => item.id === id)

            if(productInCartIndex >= 0){
                const newCart = structuredClone(state)
                newCart[productInCartIndex].quantity += 1
                return newCart
            }

            return [
                    ...state,
                    {
                        ...payload,
                        quantity: 1
                    }
                ]
        }
        case 'REMOVE_FROM_CART': {
            const productInCartIndex = state.findIndex(item => item.id === id)

            if(productInCartIndex >= 0){
                const newCart = structuredClone(state)
                newCart.splice(productInCartIndex, 1)
                return [
                    ...newCart
                ]
            }
            break;
        }
        case 'CLEAR_CART': {
            return initialState
        }
        default: {
            return []
        }
    }
}

export function CartProvider({children}){

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (product) => {
        dispatch({actionType: 'ADD_TO_CART', payload: product })
    }

    const removeFromCart = (product) => {
        dispatch({actionType: 'REMOVE_FROM_CART', payload: product })
    }

    const clearCart = () => {
        dispatch({actionType: 'CLEAR_CART'})
    }

    return(
        <CartContext.Provider
            value={{
                cart: state,
                addToCart,
                removeFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}