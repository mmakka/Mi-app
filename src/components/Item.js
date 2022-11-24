const Item = ({ producto }) => {
    return (
      <div>
        <img src={producto.name} className="w-20 h-20" alt="Producto" />
        <li>{producto.name}</li>
      </div>
    );
  };
  
  export default Item;