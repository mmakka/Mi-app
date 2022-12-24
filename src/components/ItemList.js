import { Item } from "./Item";


export const ItemList = ({ products }) => {
return (
    <ul className="cardProductContainer ">
    {products.map((product) => (
        <Item key={product.id} product={product} />
    ))}
    </ul>
);
};