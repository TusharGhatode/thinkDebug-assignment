import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Cart from './components/Cart.jsx'
import Wishlist from './components/Wishlist.jsx'
import Nav from "./components/Nav.jsx";


const App = () => {
  return (
    <BrowserRouter>
     <Nav/> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />



    </Routes>
    </BrowserRouter>
  );
};

export default App;
