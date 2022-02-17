import Item from "./Item"
import '../assets/css/ItemList.css';

const ItemList = (props) => {
    return(
        <div class="ItemList">
            {
                props.items.map(item =>{
                    return(
                        <Item 
                            key = {item.id}
                            itemId = {item.id}
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