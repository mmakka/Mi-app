import { useState } from "react";

export const ItemCount = ({initial,stock, onAdd}) => {
  const [count,setCount]= useState(initial);

  const increase =() =>{
    setCount(count +1);
  }

  const decrease = () =>{
    setCount(count -1);
  }

  return (
    <div className="flex mt-10 w-4/5 bg-gray-200 rounded d-flex ">
      <button disabled ={count <= 1}
        onClick={decrease}
        className="flex justify-center items-center p-2 w-2/5 h-full bg-gray-800 text-black"
      >
        -
      </button>
      <span
        className="flex flex-1 justify-center items-center mx-4 font-bold"
      >
        {count}
      </span>
      <button disabled = {count >= stock}
        onClick={increase}
        className="flex justify-center items-center p-2 w-2/5 h-full bg-gray-800 text-black"
      >
        +
      </button>
      <button disabled ={stock <=0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
     </div>
  );
};

export default ItemCount;





    





