import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";

const CartView = ()=>{
const {cart, totalPrice} = useCartContext();   
if(cart.leght ===0){
    
    return(
        <div>
            <p>No hay nada</p>
        </div>
    )
}
 (
    <div>
     {cart.map(product =><ItemCart key ={product.id} item ={product} />)}
    </div>
)}

export default CartView;




