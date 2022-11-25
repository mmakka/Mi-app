
import NavBar from "./Navbar/NavBar";

export const Layout = ({children}) =>{
    return(
        <main>
            <NavBar/>
            {children}
     </main>
    );
};