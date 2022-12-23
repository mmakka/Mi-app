import React,{useState,createContext} from "react";
export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [productsAdded, setProductsAdded] = useState([]);}

  