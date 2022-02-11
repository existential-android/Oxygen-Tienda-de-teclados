import Item from "./Item"
import '../assets/css/ItemList.css';
import { useEffect, useState } from "react";

const data = [
    {
        id: "1",
        nombre: "Logitech G613",
        imagen: "https://m.media-amazon.com/images/I/71Ixu720H0S._AC_SX450_.jpg",
        precio: "300.00",
        stock: "20"
    },
    {
        id: "2",
        nombre: "SteelSeries Apex Pro",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_790469-MLA45315356498_032021-O.jpg",
        precio: "950.00",
        stock: "20"
    },
    {
        id: "3",
        nombre: "Logitech MX Keys",
        imagen: "https://resource.logitech.com/w_420,h_420,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/mx-keys/gallery/us-int-mx-keys-gallery-graphite-3-4-front-1.png?v=1",
        precio: "630.00",
        stock: "20"
    },
    {
        id: "4",
        nombre: "Corsair K95 RGB PLATINUM XT",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_752924-MPE44298921072_122020-O.jpg",
        precio: "850.00",
        stock: "20"
    },
    {
        id: "5",
        nombre: "EVGA Z15",
        imagen: "https://m.media-amazon.com/images/I/81JkTSy0uBL._AC_SX679_.jpg",
        precio: "530.00",
        stock: "20"
    },
    {
        id: "6",
        nombre: "Razer Pro Type",
        imagen: "https://m.media-amazon.com/images/I/71tGkC1lkLL._AC_SL1500_.jpg",
        precio: "700.00",
        stock: "20"
    },
    {
        id: "7",
        nombre: "Asus ROG Falchion",
        imagen: "https://www.vsgamers.es/thumbnails/product_gallery_large/uploads/products/asus-gaming/teclados/teclado-asus-rog-falchion/galeria/teclado-gaming-mecanico-asus-rog-falchion-cherry-mx-rgb-galeria-2.jpg",
        precio: "670.00",
        stock: "20"
    },
    {
        id: "8",
        nombre: "Keychron K3",
        imagen: "https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/pf-1b54e415--KeychronK3ultraslimwirelessmechanicalkeyboardmacwindowsiOSandroidKeychronOpticalGateronmechanicalswitchredbluebrown-Edited.jpg?v=1597133068",
        precio: "480.00",
        stock: "20"
    },
    {
        id: "9",
        nombre: "Logitech Craft",
        imagen: "https://resource.logitech.com/w_420,h_420,c_limit,q_auto,f_auto,dpr_1.0/content/dam/logitech/en/products/keyboards/craft/gallery/us-gallery-graphite-3-4.png",
        precio: "920.00",
        stock: "20"
    }
]
let is_ok = true;
const CustomFecth = (timeout) => {
    return new Promise ((resolve, reject) => {
        if (is_ok) {resolve(data)}
        else {reject("KO")}
    })
}
const ItemList = () => {
    const [productos, setProductos] = useState([]);
    function getProductos(){
        CustomFecth(2000).then(data => setProductos(data))
    }

    useEffect(() => {
        setTimeout(() => {
            getProductos()
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