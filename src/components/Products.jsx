import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import './products.css'
import { useCart } from "../hooks/useCart.jsx"

export function Products({products}){
    const {cart, addToCart} = useCart()

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
                                <img src={product.thumbnail} alt={product.description} />
                                <div>
                                    <p>{product.title}</p>
                                    <p>{product.price}</p>
                                </div>
                                <button 
                                    onClick={() => {
                                        addToCart(product)
                                        }}>
                                    {
                                        isProductInCart
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                    }
                                </button>
                            </li>
                            )
                        }
                    )
                }
            </ul>
        </main>
        
    )
}