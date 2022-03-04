import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../components/ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import db from "../utils/firebaseConfig";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {idItem} = useParams();
    useEffect(() => {
        const firestoreFetch = async () => {
            const docRef = doc(db, "data", idItem);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return {
                    id: document.id,
                    ...docSnap.data()
                }
            } else {
              // doc.data() will be undefined in this case
              console.log("Producto no encontrado.");
            }
        }
        firestoreFetch()
            .then(result => setProducto(result))
            .catch(error => console.log(error))
    }, [])
    return (
        <section class="ItemDetailContainer">
            <ItemDetail item={producto} />
        </section>
    )
}

export default ItemDetailContainer