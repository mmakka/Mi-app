import "./NavBar.css"
import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <div className="container-fluid">
            <nav className="navbar-principal">
                <ul className="list-nav">
                    <li className="li"><a href="" >Inicio</a></li>
                    <li className="li"><a href="" >Productos</a></li>
                    <li className="li"><a href="" >Nosotros</a></li>
                    <li className="li"><a href="" >Contactanos</a></li>
                    <li className="li"><CartWidget /></li>
                </ul>
                <h1 className="titulo-principal text-center">Alma Store</h1>
            </nav>
        </div>
    ); 
    
};

export default NavBar;
