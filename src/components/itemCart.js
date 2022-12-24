import React from "react";
import { useCartContext } from "../context/CartContext";

const ItemCart = ({item}) => {
 const {removeProduct} = useCartContext();
    return (
            <div className=" m-2 p-5 bg-light d-flex ">
                <div className=" card justify-center col-6 p-4">
                    <p>Nombre :{item.nombre}</p>
                    <img src={`../images/${item.img}`} className="img-fluid p-4" alt="Producto" />
                    <p>Cantidad : {item.quantity}</p>
                    <p>Precio : {item.precio}</p>
                    <p>Subtotal :${item.quantity * item.precio}</p>
                    <button onClick={()=> removeProduct(item.id)} >Eliminar</button>
                </div>
            </div>
        );
    } 

    export default ItemCart;
    


