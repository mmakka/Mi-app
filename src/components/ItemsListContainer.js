import { useState,useEffect } from "react";
import{Items} from "../mocks/Items.mocks"
import ItemList from "./ItemList";


  
  const ItemsListContainer = () => {

  const [productos, setProductos] = useState([]); 

  useEffect(() => {
    new Promise((resolve) =>
    setTimeout(() => {
      resolve(Items);
    }, 3000)
    ).then((data) => setProductos(data));
  }, []);
    
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

