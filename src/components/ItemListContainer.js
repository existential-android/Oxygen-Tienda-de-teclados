import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';
import '../assets/css/ItemListContainer.css';

const ItemListContainer = () => {
    return (
        <section class="ItemListContainer">
            <h2>Catálogo</h2>
            <ItemList />
            <ItemCount />
        </section>
    )
}

export default ItemListContainer