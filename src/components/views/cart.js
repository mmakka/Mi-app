import {getFirestore,addDoc,collection,} from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import { Layout } from "../Layout";


const CartView = ()=>{
const {cart, totalPrice} = useCartContext(); 

const order= {
buyer:{
    name: "Macarena",
    email :" macarenasotelo1@getDefaultNormalizer.com",
    phone : "11300000",
    adress : " asasas",
},
    Items:cart.map(product =>({id:product.id, name:product.nombre ,price: product.precio ,quantity:product.quiantity })),
    Total :totalPrice(),
};

const handleClick = () => {
    const db = getFirestore();
    const ordersCollection =collection(db, "order")
    addDoc = (ordersCollection, order).then(({id}) => console.log(id));
}


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
                <button onClick={handleClick}>Generar orden</button>
            </div>
        </div>
    </Layout>
)}

export default CartView;




