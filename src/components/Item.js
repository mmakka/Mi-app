import { Link } from "react-router-dom";
import "./button.css";

import { Link } from "react-router-dom";
import "./button.css";

 export const Item = ({ product }) => {
    return (
      <div className="card col-3 m-2 p-5">
        <img src={`../images/${product.img}`} className="img-fluid p-4" alt="Producto" />
        <h3 className="text-center m-2">{product.nombre}</h3>
        <p className="text-center m-2">${product.precio}</p>
        <p> Stock Disponile :{product.stock}</p>
       <button className="button mt-2 "> <Link to ={`/item/${product.id}`}>Ver detalle</Link></button>
      </div>
    );
  };