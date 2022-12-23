import ItemCount from "./ItemCount";
import "./itemDetail.css";
import {useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail =({item}) =>{
  const [goToCart,setGoToCart] = useState(false);

 const onAdd= (quantity) => {
    setGoToCart(true);
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
          : <ItemCount initial = {3} stock= {item.stock} onAdd ={onAdd}/>
        }
  </div>
</div>
</div>
)
}



export default ItemDetail;








