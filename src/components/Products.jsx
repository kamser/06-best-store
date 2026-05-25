import { AddToCartIcon } from "./Icons"
import './products.css'
import { useCart } from "../hooks/useCart.jsx"

export function Products({products}){
    const {addToCart} = useCart()

    return(
        <main className="products">
            <ul>
                {
                    products.slice(0, 10).map((product) => 
                        (
                            <li key={product.id}>
                                <img src={product.thumbnail} alt={product.description} />
                                <div>
                                    <p>{product.title}</p>
                                    <p>{product.price}</p>
                                </div>
                                <button onClick={() => addToCart(product)}>
                                    <AddToCartIcon />
                                </button>
                            </li>
                        )
                    )
                }
            </ul>
        </main>
        
    )
}