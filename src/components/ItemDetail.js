import ItemCount from "./ItemCount";
import "./itemDetail.css";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

 const ItemDetail = ({item}) =>{
  const {AddProduct} = useContext(cartContext);
 
    const onAdd = (quantity,initial) =>{
    console.log (`compraste ${quantity}unidades`);
    AddProduct(item,quantity)};

  return(
    <div className="container col-10">
      <div className=" card col-4 detail">
      <img src={item.img} className="img-fluid" alt="Producto"/>
        <h1>{item.nombre}</h1>
        <h3>{item.descripcion}</h3>
        <h3>${item.precio}</h3>
        </div>
        <div className="count col-3">
        <ItemCount initial ={1} stock={item.stock} onAdd={onAdd}/>
       <div>
       <button onClick={()=>onAdd(count)} ><Link to ={`/Cart`}>Agregar al carrito</Link></button>
        <button>Finalizar compra</button>
       </div>
        </div>
      </div>
  )
}
export default ItemDetail;

/* <ItemCount initial ={1} stock={item.stock} onAdd={onAdd}/> */






















 