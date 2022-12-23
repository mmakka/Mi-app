import { Link } from "react-router-dom";
import "./button.css";

 export const Item = ({ products }) => {
    return (
      <div className="card col-3 m-2 p-5">
        <img src={products.img} className="img-fluid p-4" alt="Producto" />
        <h3 className="text-center m-2">{products.nombre}</h3>
        <p className="text-center m-2">${products.precio}</p>
        <p> Stock Disponile :{products.stock}</p>
       <button className="button mt-2 "> <Link to ={`/item/${products.id}`}>Ver detalle</Link></button>
      </div>
    );
  };
  
