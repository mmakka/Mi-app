import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <ul className="d-flex justify-content-around flex-wrap m-2">
      {productos.map((producto) => (
        <Item key= {producto.id}producto={producto}/>
      ))}
    </ul>
  );
};

export default ItemList;