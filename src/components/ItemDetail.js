import { ItemCount } from "./ItemCount";
import { useState } from "react";



const ItemDetail = ({item}) =>{
    const [count, setCount] = useState(1);
    const [DisponibleStock, setDisponibleStock] = useState(item.stock);
    const CantidadMax = DisponibleStock;

    function handleCount(type) {
        if (type === "sumar" && count < CantidadMax) setCount(count + 1);
        if (type === "restar" && count > 1) setCount(count - 1);
      }
    
      function handleAdd() {
        if (CantidadMax < count) alert("No hay suficiente stock de este producto");
        else setDisponibleStock(CantidadMax - count);
      }
    
    /*  function handleCheckout() {
        navigate("/cart");
      }*/
        return (
            <div >
                {CantidadMax > 0 && (
                  <p className="text-sm">In Stock: {CantidadMax}</p>
                )}
        
                <div className="flex flex-col flex-1 items-center">
                  {/* Count */}
                  {CantidadMax > 0 ? (
                    <ItemCount count={count} handleCount={handleCount} />
                  ) : (
                    <span className="text-red-500 mt-10">Sin stock</span>
                  )}

                  <div className="w-full flex flex-col items-center">
                    <button
                      onClick={handleAdd}
                      className="w-4/5 bg-gray-200 px-4 py-2 mt-2 rounded disabled:opacity-40"
                      disabled={CantidadMax === 0}
                    >
                      Agregar al carrito
                    </button>
                
                  </div>
                </div>
              </div>
          );
        };
        

export default ItemDetail;


/*  <div className="d-flex container justify-content-center">
        <div className="card col-4">
            <h2 className="text-center">{item.nombre}</h2>
            <img src={item.img} className="img-fluid p-3" alt="Producto"/>
            <h6 className="text-center mt-2">{item.descripcion}</h6>
            <p className="text-center">${item.precio}</p>
            <p className="mt-2 m-2">Stock :{item.stock}</p>
            <button className="button">Comprar</button>
        </div>
        </div>
        
         /* <button
                      onClick={handleCheckout}
                      className="w-4/5 bg-gray-800 text-white px-4 py-2 mt-2 rounded"
                    >
                      Finalizar Compra
                    </button>*/
        
        
        
        
        
        
        
        

    
           
            
          