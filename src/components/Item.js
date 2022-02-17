import { Link } from 'react-router-dom';
import '../assets/css/Item.css';

const Item = (props) => {
    return(
        <div class="Item">
            <img src={props.imagen}></img>
            <h3>{props.nombre}</h3>
            <span>Precio: S/.{props.precio}</span>
            <span>Stock disponible: {props.stock}</span>
            <Link to={"/item/" + props.itemId}><button>Ver detalles</button></Link>
        </div>
    )
}

export default Item