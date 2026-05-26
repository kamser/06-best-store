import { RemoveFromCartIcon, AddToCartIcon } from "./Icons.jsx"

export function ProductItem({product, isProductInCart, removeFromCart, addToCart}){
    
    return (
        <>
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
        </>
    )
}