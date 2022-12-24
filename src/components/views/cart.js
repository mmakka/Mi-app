import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import { Layout } from "../Layout";

const CartView = ()=>{
const {cart, totalPrice} = useCartContext();   
if(cart.leght ===0){
    return(
        <div>
            <p>Todavia no hay nada</p>
        </div>
    )
}
return (
    <Layout>
        <div className="d-flex justify-center">
    <div className=" col-6">
     {cart.map(product =><ItemCart key ={product.id} item ={product} />)}
     <p> Total :{totalPrice()}</p>
    </div>
    </div>
    </Layout>
)}

export default CartView;




