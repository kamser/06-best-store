import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const productInCartIndex = cart.findIndex((item) => item.id === product.id)

        if(productInCartIndex >= 0){
            const updatedCart = structuredClone(cart)
            updatedCart[productInCartIndex].quantity += 1
            return setCart(updatedCart)
        }

        setCart(prevState => (
            [
                ...prevState,
                {
                    ...product,
                    quantity: 1
                }
            ]
        ))


    }

    const clearCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}