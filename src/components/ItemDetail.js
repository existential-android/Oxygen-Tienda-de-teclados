import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCount from '../components/ItemCount';
import Checkout from "./Checkout";
import '../assets/css/ItemDetail.css';

const ItemDetail = (props) => {
    const test = useContext(CartContext);
    const [itemCount, setItemCount] = useState(0)
    const onAdd = (qty) => {
        setItemCount(qty);
        test.addToCart(props, qty)
    }
    console.log(test);
    return (
        <section class="ItemDetail">
            <div class="ItemDetail__ImageContainer">
                <img src={props.item.imagen}></img>
            </div>
            <div class="ItemDetail__InfoContainer">
                <h2>{props.item.nombre}</h2>
                <div>{props.item.descripcion}</div>
                <span>S/.{props.item.precio}</span>
                <span>{props.item.stock} unidades disponibles</span>
                {
                    itemCount === 0
                    ? <ItemCount stock={props.item.stock} onAdd={onAdd}/>
                    : <Link to="/cart"><Checkout /></Link>
                }
            </div>
        </section>
    )
}

export default ItemDetail