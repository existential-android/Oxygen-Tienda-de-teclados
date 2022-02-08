import ItemCount from '../components/ItemCount';
import '../assets/css/ItemListContainer.css';

const ItemListContainer = () => {
    return (
        <section class="ItemListContainer">
            <h2>Catálogo</h2>
            <ItemCount nombre="Teclado Logitech G613" imagen="https://m.media-amazon.com/images/I/71Ixu720H0S._AC_SX450_.jpg" stock="20" />
        </section>
    )
}

export default ItemListContainer