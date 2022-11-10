 import "./NavBar.css";

function CartWidget() {
    return(
        <div className="container">
            <div className="active-icon">
            <button className="button-cart">
            <ion-icon name="cart-outline"></ion-icon>
            <p>4</p>
            </button>
        </div>
        </div>
    );
};

export default CartWidget;