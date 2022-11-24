import { useState } from "react";
import ItemList from "./ItemList";

const productos = [
    {
      id: "1",
      nombre: "zapatillas",
      descripcion: "zapatillas marrones",
      stock: 5,
    },

    {
      id: "2",
      nombre: "Zapatos",
      descripcion: "Zapatos de vestir",
      stock: 5,
    },
  ];
  
  const ItemsListContainer = () => {
    const [productos, setProductos] = useState([]);
  
    const productosList = new Promise((resolve) =>
      setTimeout(() => {
        resolve(productos);
      }, 3000)
    );
  
    productosList.then((data) => setProductos(data));
  
    if (productos.length === 0) {
      return <p>Loading...</p>;
    }
  
    return (
      <div className="card">
        <ItemList productos={productos} />
      </div>
    );
  };


export default ItemsListContainer;

