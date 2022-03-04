import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from '../components/ItemList';
import '../assets/css/ItemListContainer.css';
import { collection, getDocs } from "firebase/firestore";
import db from "../utils/firebaseConfig";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {idCategory} = useParams();
    useEffect(() => {
        const firestoreFetch = async () => {
            const querySnapshot = await getDocs(collection(db, "data"));
            return querySnapshot.docs.map( document => ({
                id: document.id,
                ...document.data()
            }));
        }
        firestoreFetch()
            .then(result => setProductos(result))
            .catch(error => console.log(error))
    }, [idCategory])
    return (
        <section class="ItemListContainer">
            <h2>Catálogo</h2>
            <ItemList items={productos} />
        </section>
    )
}

export default ItemListContainer