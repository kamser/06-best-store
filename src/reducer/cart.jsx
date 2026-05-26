import { ACTION_TYPE } from "./cartActionType.jsx"

export const initialState = []

export const reducer = (state, action) => {
    const {actionType, payload} = action
    const {id} = payload
    switch(actionType){
        case ACTION_TYPE.ADD_TO_CART: {
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
        case ACTION_TYPE.REMOVE_FROM_CART: {
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
        case ACTION_TYPE.CLEAR_CART: {
            return initialState
        }
        default: {
            return []
        }
    }
}