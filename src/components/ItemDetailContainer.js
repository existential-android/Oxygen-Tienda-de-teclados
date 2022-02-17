import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomFecth from "../utils/CustomFetch";
import ItemDetail from '../components/ItemDetail';
const {data} = require("../utils/data");

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {idItem} = useParams();
    useEffect(() => {
        setTimeout(() => {
            CustomFecth(data.find(item => item.id == idItem))
                .then(result => setProducto(result))
                .catch(error => console.log(error))
        }, 2000)
    }, [])
    return (
        <section class="ItemDetailContainer">
            <ItemDetail item={producto} />
        </section>
    )
}

export default ItemDetailContainer