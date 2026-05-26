
export function CartItem({product, addToCard}){
    return(
        <>
            <img src={product.thumbnail} alt={product.description} />
            <div>
                <strong>{product.name}</strong> - ${product.price}
            </div>

            <footer>
                <small>
                    Qty: {product.quantity}
                </small>
                <button onClick={() => addToCard(product)}>+</button>
            </footer>
        </>
    )
}