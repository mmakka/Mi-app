import "./NavBar.css"
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div className="container-fluid">
            <nav className="navbar-principal">
                <ul className="list-nav">
                    <li className="li"><Link to="/" >Inicio</Link></li>
                    <li className="li"><Link to="/Category/zapatillas">zapatillas</Link></li>
                    <li className="li"><Link to="/Category/zapatos" >zapatos</Link></li>
                    <li className="li"><Link to="/Category/sandalias" >Sandalias</Link></li>
                    <li className="li"><CartWidget/></li>
                </ul>
                <h1 className="titulo-principal text-center">Alma Store</h1>
            </nav>
        </div>
    ); 
    
};

export default NavBar;
