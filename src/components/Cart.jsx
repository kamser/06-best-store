import { useId } from "react";


import './cart.css'
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";
import { CartItem } from "./CartItem";

export function Cart(){
    const cartCheckboxId = useId()
    const {cart, addToCart, clearCart} = useCart()
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon/>
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    { cart.map(item => (
                        <li>
                            <CartItem 
                                thumbnail={item.thumbnail}
                                description={item.description}
                                name={item.title}
                                price={item.price}
                                quantity={item.quantity}
                                addToCard={addToCart} 
                            />
                        </li>
                    ))
                    }
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}