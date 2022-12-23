import React from "react";
import { useCartContext } from "../context/CartContext";

const ItemCart = ({item}) => {
 const {removeProduct} = useCartContext();
    return (
                 <div>
                    <div>
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
    


