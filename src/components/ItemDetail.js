import ItemCount from "./ItemCount";
import "./itemDetail.css";
import { useContext,useState,useEffect } from "react";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom";



 const ItemDetail = ({item}) =>{
  const {AddProduct} = useContext(cartContext);
  const [count, setCount] = useState(parseInt(initial));
  const [newStock, setNewStock] = useState(stock -1);

    const onAdd = (quantity,initial) =>{
    console.log (`compraste ${quantity}unidades`);
    AddProduct(item,quantity)

   const decrease =() => {
     setCount (count - 1);
     setNewStock(newStock + 1)
   }
 
    const increase =()=>{
     if(count < stock){
       setCount(count + 1);
       setNewStock(newStock -1)
     } else if(count > stock){
       alert("no hay suficiente ")
     }
   }
     useEffect(()=>{
       setCount(parseInt(initial))
     }, [initial]);
  }


  return(
    <div className="container col-10">
      <div className=" card col-4 detail">
      <img src={item.img} className="img-fluid" alt="Producto"/>
        <h1>{item.nombre}</h1>
        <h3>{item.descripcion}</h3>
        <h3>${item.precio}</h3>
        </div>
        <div className="count col-3">
       <ItemCount initial= {1} count ={count} onAdd={onAdd} stock={item.stock} increase={increase} decrease={decrease}/>
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






















 