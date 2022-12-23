import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import {RouterProvider} from "react-router-dom";
import {CartContextProvider } from './context/CartContext';
import{router} from "./router";
import { initializeApp } from "firebase/app";

 

const firebaseConfig = {
  apiKey: "AIzaSyBJjUaCM1WKoNVDX0ql9Z4u01b4O6EpHHU",
  authDomain: "prueba-dd60d.firebaseapp.com",
  projectId: "prueba-dd60d",
  storageBucket: "prueba-dd60d.appspot.com",
  messagingSenderId: "749208665193",
  appId: "1:749208665193:web:fa6a1b13b99c698f9276f8"
};

// Initialize Firebase
 initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvider>
  <RouterProvider router = {router} />
 </CartContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
