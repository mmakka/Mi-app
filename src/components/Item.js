const Item = ({ producto }) => {
    return (
      <div className="card col-3 m-2">
        <img src={producto.img} className="img-fluid" alt="Producto" />
        <li>{producto.nombre}</li>
        <button className="button">Ver detalle</button>
      </div>
    );
  };
  
  export default Item;