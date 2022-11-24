
import { Layout } from "../Layout";
import{useParams} from "react-router-dom";
import {Items} from "../mocks/Items.mocks";
import Item from "../../components/Item";



const CategoryView = ()=>{
const {categoria} = useParams();
const categorias = Items.filter((producto ) => producto.categoria === categoria);

    return( <Layout>
        {categorias.map ((producto)=>(
            <Item producto = {producto} />
        ))}
            </Layout>
    );
}
export default CategoryView;

