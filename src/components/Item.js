import { Link } from "react-router-dom";
import "./button.css";




const Item = ({ producto }) => {
    return (
      <div className="card col-2 m-2 p-5">
        <img src={producto.img} className="img-fluid p-4" alt="Producto" />
        <h3 className="text-center m-2">{producto.nombre}</h3>
        <p className="text-center m-2">${producto.precio}</p>
       <button className="button mt-2 "> <Link to ={`/item/${producto.id}`}>Ver detalle</Link></button>
      </div>
    );
  };
  
  export default Item;