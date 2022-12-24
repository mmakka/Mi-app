import React from "react";
import { useCartContext } from "../context/CartContext";

const ItemCart = ({item}) => {
 const {removeProduct} = useCartContext();
    return (
                 <div className="card col-8 m-2 p-5 bg-light d-flex">
                    <div className="justify-center">
                        <p>Nombre :{item.nombre}</p>
                        <p>Cantidad : {item.quantity}</p>
                        <p>Precio : {item.precio}</p>
                        <p>Subtotal :{item.quantity * item.precio}</p>
                        <button onClick={()=> removeProduct(item.id)} >Eliminar</button>
                    </div>
                 </div>
        );
    } 
    export default ItemCart;
    


