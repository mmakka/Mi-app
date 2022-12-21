import React,{useState,createContext} from "react";

export const cartContext = createContext([]);

const cartProvider = ({children})=>{

const AddProduct = (item,newQuantity) =>{
const [cart,setCart]= useState([]);

    const newCart = cart.filter(prod => prod.id !== item.id)
    newCart.push({...item ,quantity : newQuantity});
    setCart(newCart)
}

    return(
        <cartContext.Provider value = {{AddProduct}}>
            {children}
        </cartContext.Provider>
    )
}
