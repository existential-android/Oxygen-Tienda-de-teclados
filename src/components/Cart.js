import { CartContext } from "./CartContext";
import { useContext, useState } from "react";
import '../assets/css/Cart.css';


const Cart = () => {
    const test = useContext(CartContext);
    return(
        <div class="Cart">
            <h2>Cart</h2>
            <ul>
            {test.cartList.map(item =>{
                return(
                    <li class="CartItem" key={item.key}>
                        <img src={item.imagen}></img>
                        <div>
                            <h3>{item.nombre}</h3>
                            <span>{item.qty} items</span>
                            <span>S/. {item.precio}</span>
                            <button onClick={() => test.deleteProduct(item.key)}>Eliminar</button>
                        </div>
                    </li>
                )}
            )}
            </ul>
            <button onClick={test.removeList}>Quitar todo</button>
        </div>
    )
}

export default Cart