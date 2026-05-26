import { useReducer } from "react"

import { reducer, initialState } from "../reducer/cart.jsx"

import { ACTION_TYPE } from "../reducer/cartActionType.jsx"

export function useCartReducer(){
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const addToCart = (product) => {
        dispatch({actionType: ACTION_TYPE.ADD_TO_CART, payload: product })
    }

    const removeFromCart = (product) => {
        dispatch({actionType: ACTION_TYPE.REMOVE_FROM_CART, payload: product })
    }

    const clearCart = () => {
        dispatch({actionType: ACTION_TYPE.CLEAR_CART})
    }

    return {state, addToCart, removeFromCart, clearCart}
}