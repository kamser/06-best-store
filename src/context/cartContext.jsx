import { createContext, useReducer, useState } from "react";

export const CartContext = createContext()

const initialState = []

const reducer = (state, action) => {
    const {type, payload} = action
    const {id} = payload
    switch(type){
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
    const [cart, setCart] = useState([])

    const [state, dispatch] = useReducer(reducer)

    return(
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                removeFromCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}