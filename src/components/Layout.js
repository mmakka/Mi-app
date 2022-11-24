import { children } from "react";

export const Layout = () =>{
    return(
        <header>
            <NavBar/>
            {children}
     </header>
    );
};