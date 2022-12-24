import ItemCount from "./ItemCount";
import "./itemDetail.css";
import {useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const ItemDetail =({item}) =>{
  const [goToCart,setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

 const onAdd= (quantity) => {
    setGoToCart(true);
    addProduct(item, quantity);
  }

return (
<div>
  <div className="detail">
  <div className="card col-6 m-2 p-5">
  <img src={`../images/${item.img}`} className="img-fluid p-4" alt="Producto" />
        <h3 className="text-center m-2">{item.nombre}</h3>
        <h4 className="text-center">${item.precio}</h4>
        <h5>{item.descripcion}</h5>

        {
          goToCart
          ? <Link to ={`/cart`}>Terminar Compra</Link>
          : <ItemCount initial = {1} stock= {item.stock} onAdd ={onAdd}/>
        }
  </div>
</div>
</div>
)
}

export default ItemDetail;








