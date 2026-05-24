import { AddToCartIcon } from "./Icons"
import './products.css'
export function Products({products}){
    return(
        <main className="products">
            <ul>
                {
                    products.map((product) => 
                        (
                            <li key={product.id}>
                                <img src={product.thumbnail} alt={product.description} />
                                <div>
                                    <p>{product.title}</p>
                                    <p>{product.price}</p>
                                </div>
                                <AddToCartIcon/>
                            </li>
                        )
                    )
                }
            </ul>
        </main>
        
    )
}