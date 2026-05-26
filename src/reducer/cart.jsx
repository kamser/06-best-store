import { ACTION_TYPE } from "./cartActionType.jsx"

export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const reducer = (state, action) => {
    const {actionType, payload} = action
    
    switch(actionType){
        case ACTION_TYPE.ADD_TO_CART: {
            const {id} = payload
            const productInCartIndex = state.findIndex((item) => item.id === id)

            if(productInCartIndex >= 0){
                const newCart = structuredClone(state)
                newCart[productInCartIndex].quantity += 1
                updateLocalStorage(newCart)
                return newCart
            }

            const newCart = [
                                ...state,
                                {
                                    ...payload,
                                    quantity: 1
                                }
                            ]
            updateLocalStorage(newCart)
            return newCart
        }
        case ACTION_TYPE.REMOVE_FROM_CART: {
            const {id} = payload
            const productInCartIndex = state.findIndex(item => item.id === id)

            if(productInCartIndex >= 0){
                const newCart = structuredClone(state)
                newCart.splice(productInCartIndex, 1)
                updateLocalStorage(newCart)
                return [
                    ...newCart
                ]
            }
            break;
        }
        case ACTION_TYPE.CLEAR_CART: {
            updateLocalStorage(initialState)
            return []
        }
        default: {
            return []
        }
    }
}