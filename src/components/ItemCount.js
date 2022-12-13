import { useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemCount = ({count, sumarRestar}) => {
  return(
    <div>
     <button onClick={()=> sumarRestar ("minus")}>-</button>
     <span id = "counter"> {count} </span>
     <button onClick={()=> sumarRestar ("plus")}>+</button>
    </div>
  )
}

export default ItemCount;










/* const ItemCounts = () => {
  const [count, setCount] = useState(0);
 ;

  const [classActive1, setClassActive1] = useState("active");
  const [classActive2, setClassActive2] = useState("");

  const add = () => {
    if (count == stockMax - 1) {
      setClassActive1("");

      setClassActive2("active");
      setCount(count + 1);
    } 
    else if (count >= stockMax) {
      alert("Sin Stock");
    } else {
      setCount(count + 1);
    }
  };

  const remove = () => {
    if (count == stockMax) {
      setClassActive1("active");
      setClassActive2("");
      setCount(count - 1);
    } else if (count <= 0) {
      alert("Carrito Vacio");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="cant-conteiner">
      <div className="cant-selector">
        <p className="cant-number">{count}</p>
        <div className="cant-button_contain">
          <button
            className="cant-button"
            onClick={() => {
              add();
            }}
          >
            <ion-icon name="caret-up-outline"></ion-icon>
          </button>
          <button
            className="cant-button"
            onClick={() => {
              remove();
            }}
          >
            <ion-icon name="caret-down-outline"></ion-icon>
          </button>
        </div>
        <button
          className={`button-add ${classActive1}`}
          onClick={() => {
            add();
          }}
        >
          <ion-icon name="cart-outline"></ion-icon>
        </button>
        <button
          className={`button-add-disabled ${classActive2}`}
          onClick={() => {
            add();
          }}
        >
          <ion-icon name="cart"></ion-icon>
        </button>
      </div>
    </div>
  );
}; */

