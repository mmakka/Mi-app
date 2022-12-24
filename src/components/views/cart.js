import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import { Layout } from "../Layout";

const CartView = ()=>{
const {cart, totalPrice} = useCartContext();  

    if (cart.lenght === 0){
    return(
        <>
            <p>El carrito esta vacio</p>
        </>
    );
}

return (
    <Layout>
        <div className="d-flex justify-center">
            <div className=" col-6">
                {cart.map(product =><ItemCart key ={product.id} item ={product} />)}
                <h5 className="text-center">Total :${totalPrice()}</h5>
            </div>
        </div>
    </Layout>
)}

export default CartView;




