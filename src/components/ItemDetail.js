import ItemCount from '../components/ItemCount';
import '../assets/css/ItemDetail.css';

const ItemDetail = (props) => {
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
                <ItemCount stock={props.item.stock} />
            </div>
        </section>
    )
}

export default ItemDetail