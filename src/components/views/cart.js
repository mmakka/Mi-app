import { useCartContext } from "../../context/cartContext";

const CartView = ()=>{
const {cart, totalPrice} = useCartContext();
    
if(cart.leght ===0){
    return(
        <div>
            <p>No hay nada</p>
        </div>
    )
}
return(
    <div>
    {cart.map(product => <itemCart key = {product.id} product = {product} />)}
    </div>
)
} 

export default CartView;




