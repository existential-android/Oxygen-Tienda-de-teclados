import ItemList from '../components/ItemList';
import '../assets/css/ItemListContainer.css';

const ItemListContainer = () => {
    return (
        <section class="ItemListContainer">
            <h2>Catálogo</h2>
            <ItemList />
        </section>
    )
}

export default ItemListContainer