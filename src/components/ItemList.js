import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <ul className="flex items-center justify-center">
      {productos.map((producto) => (
        <Item key={producto}/>
      ))}
    </ul>
  );
};

export default ItemList;