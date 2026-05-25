import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import './products.css'
import { useCart } from "../hooks/useCart.jsx"

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
                                <img src={product.thumbnail} alt={product.description} />
                                <div>
                                    <p>{product.title}</p>
                                    <p>{product.price}</p>
                                </div>
                                <button 
                                    onClick={() => {
                                        isProductInCart
                                        ? removeFromCart(product)
                                        : addToCart(product)
                                        }}
                                    style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                                >
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