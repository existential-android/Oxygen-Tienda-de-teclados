import '../assets/css/Item.css';

const Item = (props) => {
    return(
        <div class="Item">
            <img src={props.imagen}></img>
            <h3>{props.nombre}</h3>
            <span>Precio: S/.{props.precio}</span>
            <span>Stock disponible: {props.stock}</span>
            <button>Ver detalles</button>
        </div>
    )
}

export default Item