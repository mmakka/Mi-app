import ItemCount from "./ItemCount";
import "./itemDetail.css";
import {useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";



const ItemDetail =({item}) =>{
  const [goToCart,setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

 const onAdd= (quantity) => {
    setGoToCart(true);
    addProduct(item, quantity);
  }

return (
<div className="container">
  <div className="detail">
  <div className="card col-3 m-2 p-5">
        <img src={item.img} className="img-fluid p-4" alt="Producto" />
        <h3 className="text-center m-2">{item.nombre}</h3>
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








