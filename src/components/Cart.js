import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext, useState } from "react";
import '../assets/css/Cart.css';


const Cart = () => {
    const test = useContext(CartContext);
    let subtotal = 0;
    let shippingCost = 0;
    let taxes = 0;
    let total = 0;
    test.cartList.forEach(item => {
        subtotal+= item.qty*item.precio;
        shippingCost += item.qty*10;
        taxes += (item.precio*3)/100;
        total += subtotal + shippingCost + taxes;
    });
    return(
        <div class="CartContainer">
            <h2>Cart</h2>
            {
                test.cartList.length === 0
                ? <div class="NoCartList">
                    <span>Actualmente no hay ningún pedido que mostar.</span>
                    <Link to="/">Volver al home</Link>
                </div>
                : <div class="Cart">
                    <ul>
                    {test.cartList.map(item =>{
                        return(
                            <li class="CartItem" key={item.key}>
                                <img src={item.imagen}></img>
                                <div>
                                    <h3>{item.nombre}</h3>
                                    <span>{item.qty} items</span>
                                    <span>S/. {item.precio} c/u</span>
                                    <span>S/. {item.precio*item.qty}</span>
                                    <button onClick={() => test.deleteProduct(item)}>Eliminar</button>
                                </div>
                            </li>
                        )}
                    )}
                    </ul>
                    <div class="CartSummary">
                        <h4>Resumen de pedido</h4>
                        <div>
                            <span>Subtotal</span>
                            <span>S/. {subtotal}</span>
                        </div>
                        <div>
                            <span>Costos de envío</span>
                            <span>S/. {shippingCost}</span>
                        </div>
                        <div>
                            <span>Impuestos</span>
                            <span>S/. {taxes}</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>S/. {total}</span>
                        </div>
                        <button>Checkout</button>
                    </div>
                </div>
            }
            {   test.cartList.length != 0 &&
                <button onClick={test.removeList}>Quitar todo</button>
            }
        </div>
    )
}

export default Cart