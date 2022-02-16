import { useEffect, useState } from "react";
import CustomFecth from "../utils/CustomFetch";
import ItemCount from '../components/ItemCount';
import '../assets/css/ItemDetail.css';
const {data} = require("../utils/data");

const ItemDetail = () => {
    const [producto, setProducto] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            CustomFecth(data[1])
                .then(result => setProducto(result))
                .catch(error => console.log(error))
        }, 2000)
    }, [])

    return (
        <section class="ItemDetail">
            <div class="ItemDetail__ImageContainer">
                <img src={producto.imagen}></img>
            </div>
            <div class="ItemDetail__InfoContainer">
                <h2>{producto.nombre}</h2>
                <div>{producto.descripcion}</div>
                <span>S/.{producto.precio}</span>
                <span>{producto.stock} unidades disponibles</span>
                <ItemCount stock={producto.stock} />
            </div>
        </section>
    )
}

export default ItemDetail