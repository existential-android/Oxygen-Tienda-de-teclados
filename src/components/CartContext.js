import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const addToCart = (item, qty) => {
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
    return(
        <CartContext.Provider value={{cartList, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;