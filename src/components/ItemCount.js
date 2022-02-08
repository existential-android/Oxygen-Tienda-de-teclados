import { useState } from "react"
import '../assets/css/ItemCount.css';

const ItemCount = (props) => {
    const [cantidad, setCantidad] = useState(0);
    const aumentar = () => {
        if (cantidad < props.stock){setCantidad(cantidad+1)}
    }
    const disminuir = () => {
        if (cantidad > 0){setCantidad(cantidad-1)}
    }
    return(
        <div class="ItemCount">
            <h3>{props.nombre}</h3>
            <img src={props.imagen}></img>
            <span>Stock: {props.stock}</span>
            <div class="ItemCount__contador">
                <button onClick={disminuir}>-</button>
                <span>{cantidad}</span>
                <button onClick={aumentar}>+</button>
            </div>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount