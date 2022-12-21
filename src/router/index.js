import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Category from "../components/views/category";
import ItemView from "../components/views/producto";
import Cart from "../components/views/cart";

export const router = createBrowserRouter([
    { 
        path: "/",
        element: <App/>,
    },
    {
        path: "/category/:category",
        element: <Category/>,
    },
    {
        path: "/item/:id",
        element: <ItemView/>
    },
    {
        path: "/cart",
        element: <Cart/>
    },
    
]);