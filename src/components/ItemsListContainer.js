import { useState,useEffect } from "react";
import{Items} from "./mocks/Items.mocks"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

  const ItemsListContainer = () => {
  const {category} = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    new Promise((resolve) =>
    setTimeout(() => {
      resolve(Items);
    }, 2000)
    ).then((data) =>{
      if (category){
        const categorias =data.filter((producto ) => producto.categoria === category) ;
        setProductos(categorias)
      }else{
        setProductos(data)
      }
    });

  }, [category]);
    
    if (productos.length === 0) {
      return <p className="text-center">Loading...</p>;
    } 
    return (
      <div className="card">
        <ItemList productos={productos} />
      </div>
    );
  };


export default ItemsListContainer;

