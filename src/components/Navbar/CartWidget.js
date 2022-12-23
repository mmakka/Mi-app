 import "./NavBar.css";
 import { Link } from "react-router-dom";
 import { useCartContext } from "../../context/CartContext";

 
 function CartWidget() {
    const {totalProducts} = useCartContext();
    return(
        <div className="container">
            <div className="active-icon">
            <button className="button-cart">
            <Link to ={`/cart`}> <ion-icon name="cart-outline"></ion-icon></Link>
            <span className="p-3">{totalProducts() || ""}</span>
            </button>
        </div>
        </div>
    ); 
}; 

export default CartWidget;




