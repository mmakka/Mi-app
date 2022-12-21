
import { Link } from "react-router-dom";
const ItemCount = ({count,newStock,stock,increase,decrease}) => {



return(
  <div className="count">
  <div className="counter">
   <h6 className="text-center">Stock disponible:{newStock}</h6>
   <div>
    <button disabled={count >= stock} onClick={()=> increase}>+</button>
    <p>{count}</p>
    <button disabled= {count === 1} onClick={decrease} >-</button>
    </div>
  </div>
  </div>
)
}

export default ItemCount;




/*   <button onClick={()=>onAdd(count)} ><Link to ={`/Cart`}>Agregar al carrito</Link></button>
    <button>Comprar</button>         */





