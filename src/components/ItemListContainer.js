import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomFecth from "../utils/CustomFetch";
import ItemList from '../components/ItemList';
import '../assets/css/ItemListContainer.css';
const {data} = require("../utils/data");


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {idCategory} = useParams();
    useEffect(() => {
        if (idCategory === undefined) {
            setTimeout(() => {
                CustomFecth(data)
                    .then(result => setProductos(result))
            }, 2000)
        }
        else {
            setTimeout(() => {
                CustomFecth(data.filter(item => item.categoria === idCategory))
                    .then(result => setProductos(result))
                    .catch(error => console.log(error))
            }, 2000)
        }
    }, [idCategory])
    return (
        <section class="ItemListContainer">
            <h2>Catálogo</h2>
            <ItemList items={productos} />
        </section>
    )
}

export default ItemListContainer