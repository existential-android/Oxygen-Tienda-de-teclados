import ShoppingCart from '../assets/images/shopping-cart.png';
import '../assets/css/CartWidget.css';

const CartWidget = () => {
    return (
        <div class="CartWidget">
            <img src={ShoppingCart}></img>
            <span>1</span>
        </div> 
    )
}

export default CartWidget