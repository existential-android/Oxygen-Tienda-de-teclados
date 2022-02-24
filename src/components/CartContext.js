import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
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
        }
    }
    const deleteProduct = (id) => {
        let result = cartList.filter(item => item.key != id)
        setCartList(result);
    }
    const removeList = () => {
        setCartList([])
    }
    return(
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;