import { createContext, useState } from "react";

export const CartContext = createContext()

const initialState = []

const reducer = (state, action) => {
    const {type, payload} = action
    switch(type){
        case 'ADD_TO_CART': {
            const {id} = payload
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
        case 'REMOVE_FROM_CART': {}
        case 'CLEAR_CART': {}
    }
}

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    // const addToCart = (product) => {
    //     const productInCartIndex = cart.findIndex((item) => item.id === product.id)

    //     if(productInCartIndex >= 0){
    //         const updatedCart = structuredClone(cart)
    //         updatedCart[productInCartIndex].quantity += 1
    //         return setCart(updatedCart)
    //     }

    //     setCart(prevState => (
    //         [
    //             ...prevState,
    //             {
    //                 ...product,
    //                 quantity: 1
    //             }
    //         ]
    //     ))
    // }

    const removeFromCart = (product) => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if(productInCartIndex >= 0){
            const updatedCart = structuredClone(cart)
            updatedCart.splice(productInCartIndex, 1)
            setCart([
                ...updatedCart
            ])
        }
    }

    const clearCart = () => {
        setCart([])
    }

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