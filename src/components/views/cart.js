import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";

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
    <div className="row col-6">
     {cart.map(product =><ItemCart key ={product.id} item ={product} />)}
     <p> Total :{totalPrice()}</p>
    </div>
)}

export default CartView;




