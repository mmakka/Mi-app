import "./NavBar.css"
import CartWidget from "./CartWidget";
 
function NavBar() {
    return (
        <div className="container">
            <nav className="navbar-principal">
                <ul className="list-nav">
                    <li className="li"><a href="" >Inicio</a></li>
                    <li className="li"><a href="" >Productos</a></li>
                    <li className="li"><a href="" >Nosotros</a></li>
                    <li className="li"><a href="" >Contactanos</a></li>
                </ul>
                <CartWidget />
            </nav>
            <h1>Alma Mora</h1>
        </div>
    );
}

export default NavBar;
