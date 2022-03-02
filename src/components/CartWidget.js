import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import ShoppingCart from '../assets/images/shopping-cart.png';
import '../assets/css/CartWidget.css';

const CartWidget = () => {
    const test = useContext(CartContext);
    return (
        <div class="CartWidget">
            <Link to="/cart"><img src={ShoppingCart}></img></Link>
            {
                test.itemQty != 0 &&
                <span>{test.itemQty}</span>
            }
        </div> 
    )
}

export default CartWidget