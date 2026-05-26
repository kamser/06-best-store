
export function CartItem({thumbnail, description, name, price, quantity, addToCard}){
    return(
        <>
            <img src={thumbnail} alt={description} />
            <div>
                <strong>{name}</strong> - ${price}
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCard}>+</button>
            </footer>
        </>
    )
}