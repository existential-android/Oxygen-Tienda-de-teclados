import { CartContext } from "./CartContext";
import { useContext } from "react";


const Cart = () => {
    const test = useContext(CartContext);
    console.log(test.cartList)
    return(
        <>
            <h2>Cart</h2>
            {test.cartList.map(item =>{
                return(
                    <div>
                        <img src={item.imagen}></img>
                        <div>
                            <h3>{item.nombre}</h3>
                            <button>Eliminar</button>
                        </div>
                        <div>
                            <span>{item.qty}</span>
                            <span>{item.precio}</span>
                        </div>
                    </div>
                )}
            )}
        </>
    )
}

export default Cart