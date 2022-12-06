import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import{Items} from "./mocks/Items.mocks";
import { useParams } from "react-router-dom";
import ItemCounts from "./ItemCount";

const ItemDetailConteiner = () => {
    const [item, setItem]= useState(null);
    const {id} = useParams();

    useEffect(() => {
        new Promise((resolve) =>

        setTimeout(() =>{
        const itemFilter= Items.find((item)=>item.id == id);
         resolve(itemFilter);
        },1000))
        
        .then((data) => setItem(data));
      }, [id]);

      if (!item) {
        return<p>Loading..</p>;
      }
      return <ItemDetail item= {item}/>
      };

      export default ItemDetailConteiner;