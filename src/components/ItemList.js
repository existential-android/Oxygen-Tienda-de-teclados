import { useEffect, useState } from "react";
import Item from "./Item"
import CustomFecth from "../utils/CustomFetch";
import '../assets/css/ItemList.css';
const {data} = require("../utils/data");

console.log(data)
const ItemList = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            CustomFecth(data).then(result => setProductos(result))
        }, 2000)
    }, [])

    return(
        <div class="ItemList">
            {
                productos.map(item =>{
                    return(
                        <Item 
                            key = {item.id}
                            nombre = {item.nombre} 
                            imagen = {item.imagen}
                            precio = {item.precio}
                            stock = {item.stock}
                        />
                    )
                })
            }
        </div>
    )
}

export default ItemList