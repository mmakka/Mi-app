import { Item } from "./Item";

export const ItemList = ({ products }) => {
return (
    <ul className="flex gap-4 row p-5 ">
        {products.map((product) => (
        <Item key={product.id} product={product} />
        ))}
    </ul>
)};