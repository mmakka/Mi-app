import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock,initial,onAdd}) => {
  const [count, setCount] = useState(parseInt(initial));
  const [newStock, setNewStock] = useState(stock -1);

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

return(
  <div className="count">
  <div className="counter">
   <h6 className="text-center">Stock disponible:{newStock}</h6>
   <div>
    <button onClick={increase}>+</button>
    <p>{count}</p>
    <button disabled= {count === 1} onClick={decrease}>-</button>
    </div>
    <div>
       <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
       <button><Link to ={`/Cart`}>Finalizar Compra</Link></button>
  </div>
  </div>
  </div>
)}


export default ItemCount;




/*   <button onClick={()=>onAdd(count)} ><Link to ={`/Cart`}>Agregar al carrito</Link></button>
    <button>Comprar</button>         */





