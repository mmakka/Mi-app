
import {ItemList}from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs , query,where} from "firebase/firestore";


export const ItemsListContainer = () => {
const [products, setProducts] = useState([]);

const {category } = useParams();

useEffect ( ()=> {
  const db = getFirestore();
  const itemCollection = collection (db , "productos");
  if (category) {
    const queryFilter = query(itemCollection, where("categoria", "==", category))
      getDocs(queryFilter)
        .then( res => setProducts(res.docs.map(items => ({ id: items.id, ...items.data() }))))
  } else {
    getDocs(itemCollection)
      .then(res => setProducts(res.docs.map(items => ({id: items.id, ...items.data() }))))
  }
}, [category])


if (products.lenght === 0) {
    return ( <div className="contenedorCarga">
    <div className="carga"></div>
    </div>);
}

return (
    <div className="cardProductContainer">
      <ItemList products={products} />
    </div>
);
};



