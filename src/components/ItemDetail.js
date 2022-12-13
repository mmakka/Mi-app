import ItemCount from "./ItemCount";
import { useState } from "react";
import { useNavigate} from "react-router-dom";


const ItemDetail = ({item}) =>{
  const navigate = useNavigate();
  const [count,setCount] = useState(1);
  const [stockNow, setStockNow] = useState(item.stock);
  const MaximoStock = stockNow;

  function sumarRestar(type){
    if (type === "plus" && count < MaximoStock) setCount(count + 1);
    if(type === "minus" && count > 1 ) setCount(count -1);
  }

  function Add (){
    if( stockNow < count)alert ("No hay suficiente Stock");
    else setStockNow (stockNow - count);
  }

function checkout (){
  navigate("/cart");
}























  return(
    <div className="d-flex col-10 justify-content-center">
      <div className="card d-flex col-3 justify-center p-5">
          <h2>{item.nombre}</h2>
          <img src={item.img} className="img-fluid" alt="Producto"/>
          <p>{item.descripcion}</p>
          <p>Stock :5 u</p>
          <p>{item.precio}</p>
          <ItemCount stock={5}/>
          <button>Comprar</button>
          </div>
          </div>
  );

};

export default ItemDetail;















 