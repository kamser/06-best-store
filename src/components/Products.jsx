import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import './products.css'
import { useCart } from "../hooks/useCart.jsx"
import { ProductItem } from "./ProductItem.jsx"

export function Products({products}){
    const {cart, addToCart, removeFromCart} = useCart()

    const checkProductInCart = (id) =>{
        return cart.find((item) => item.id === id)
               ? true
               : false 
    }

    return(
        <main className="products">
            <ul>
                {
                    products.slice(0, 10).map((product) => {
                        const isProductInCart = checkProductInCart(product.id)

                        return (
                            <li key={product.id}>
                                <ProductItem 
                                    product={product}
                                    isProductInCart={isProductInCart}
                                    addToCart={addToCart}
                                    removeFromCart={removeFromCart}
                                />
                            </li>
                            )
                        }
                    )
                }
            </ul>
        </main>
        
    )
}