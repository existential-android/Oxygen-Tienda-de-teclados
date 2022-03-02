import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [itemQty, setItemQty] = useState(0);
    const addToCart = (item, qty) => {
        if (cartList.every(cartItem => cartItem.key != item.item.id)){
            setCartList([
                ...cartList,
                {
                    key: item.item.id,
                    nombre: item.item.nombre,
                    imagen: item.item.imagen,
                    precio: item.item.precio,
                    qty: qty
                }
            ])
            setItemQty(itemQty+qty)
        }
    }
    const deleteProduct = (product) => {
        let result = cartList.filter(item => item.key != product.key)
        setItemQty(itemQty-product.qty)
        setCartList(result);
    }
    const removeList = () => {
        setCartList([])
        setItemQty(0)
    }
    return(
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteProduct, itemQty}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;