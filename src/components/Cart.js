import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext, useState } from "react";
import '../assets/css/Cart.css';
import '../assets/css/clientData.css';
import { collection, serverTimestamp, setDoc, doc, updateDoc, increment } from "firebase/firestore";
import db from "../utils/firebaseConfig";


const Cart = () => {
    const test = useContext(CartContext);
    let subtotal = 0;
    let shippingCost = 0;
    let taxes = 0;
    let total = 0;
    test.cartList.forEach(item => {
        subtotal+= item.qty*item.precio;
        shippingCost += item.qty*10;
        taxes += (item.precio*3)/100;
        total += subtotal + shippingCost + taxes;
    });
    let [clientData, setClientData] = useState(false);
    let clientName = "";
    let clientEmail = "";
    let clientPhone = "";
    const clientDataName = (val) => {clientName = val.target.value;}
    const clientDataEmail = (val) => {clientEmail = val.target.value}
    const clientDataPhone = (val) => {clientPhone = val.target.value}
    const askClientData = () => {setClientData(true);}
    const createOrder = (a, b, c) => {
        console.log(a, b, c)
        let order = {
            buyer: {
                email: b,
                name: a,
                phone: c
            },
            date: serverTimestamp(),
            items: test.cartList.map(item => {return {id: item.key, name: item.nombre, price: item.precio, qty: item.qty}}),
            total: total
        }
        const createOrderInFirestore = async() => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order)
            return newOrderRef;
        }
        createOrderInFirestore()
            .then(result => {
                alert("Tu orden ha sido creada" + result.id);
                test.cartList.map(async (item) => {
                    const itemRef = doc(db, "data", item.key)
                    await updateDoc(itemRef, {
                        stock: increment(-item.qty)
                    })
                })
                test.removeList();
            })
            .catch(error => console.log(error))
        setClientData(false);
    }
    return(
        <div class="CartContainer">
            <h2>Cart</h2>
            {
                test.cartList.length === 0
                ? <div class="NoCartList">
                    <span>Actualmente no hay ningún pedido que mostar.</span>
                    <Link to="/">Volver al home</Link>
                </div>
                : <div class="Cart">
                    <ul>
                    {test.cartList.map(item =>{
                        return(
                            <li class="CartItem" key={item.key}>
                                <img src={item.imagen}></img>
                                <div>
                                    <h3>{item.nombre}</h3>
                                    <span>{item.qty} items</span>
                                    <span>S/. {item.precio} c/u</span>
                                    <span>S/. {item.precio*item.qty}</span>
                                    <button onClick={() => test.deleteProduct(item)}>Eliminar</button>
                                </div>
                            </li>
                        )}
                    )}
                    </ul>
                    <div class="CartSummary">
                        <h4>Resumen de pedido</h4>
                        <div>
                            <span>Subtotal</span>
                            <span>S/. {subtotal}</span>
                        </div>
                        <div>
                            <span>Costos de envío</span>
                            <span>S/. {shippingCost}</span>
                        </div>
                        <div>
                            <span>Impuestos</span>
                            <span>S/. {taxes}</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>S/. {total}</span>
                        </div>
                        <button onClick={askClientData}>Checkout</button>
                    </div>
                </div>
            }
            {   test.cartList.length != 0 &&
                <button onClick={test.removeList}>Quitar todo</button>
            }
            {
                clientData == true &&
                <div class="clientData__container">
                    <div class="clientData">
                        <div>
                            <div>Nombre y Apellido: </div>
                            <input type="text" onChange={clientDataName}></input>
                        </div>
                        <div>
                            <div>Email: </div>
                            <input type="text" onChange={clientDataEmail}></input>
                        </div>
                        <div>
                            <div>Teléfono</div>
                            <input type="text" onChange={clientDataPhone}></input>
                        </div>
                        <button onClick={() => {createOrder(clientName, clientEmail, clientPhone)}}>Finalizar pedido</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart