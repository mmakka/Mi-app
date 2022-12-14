import "./NavBar.css"
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div className="container-fluid">
            <nav className="navbar-principal">
                <ul className="list-nav">
                    <li className="li"><Link to="/" >Home</Link></li>
                    <li className="li"><Link to="/Category/zapatillas">Zapatillas</Link></li>
                    <li className="li"><Link to="/Category/zapatos" >Zapatos</Link></li>
                    <li className="li"><Link to="/Category/sandalias" >Sandalias</Link></li>
                    <li className="li"><CartWidget/></li>
                </ul>
            </nav>
        </div>
    ); 
    
};

export default NavBar;
