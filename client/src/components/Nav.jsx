import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
    console.log(cartData);
  }, []);

  useEffect(() => {
    const wish = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWish(wish);
    console.log(wish);
  }, []);

  return (
    <div className="px-8 py-4 bg-white  h-20 items-center flex flex-wrap justify-between p-2">
      <div>
        <img
          src="/public/Image/logo.png"
          className="h-12 cursor-pointer w-32"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="flex">
        <input
          type="text"
          className="border-2 p-2 w-80 border-gray-300 "
          placeholder="search for products, brands and more"
        />
        <div className="bg-yellow-500 w-12 flex flex-wrap justify-center items-center">
          <FaSearch className="text-white" />
        </div>
      </div>

      <div className="flex flex-wrap cursor-pointer ">
        <div className="h-6 px-2 border-r border-black flex gap-2 justify-center items-center">
          <FaUserAlt />
          <h1>tim</h1>
        </div>

        <div
          onClick={() => navigate("/wishlist")}
          className="h-6 cursor-pointer px-2 border-r border-black flex gap-2 justify-center items-center"
        >
          <FaHeart />
          <h1>wishlist</h1>
          <sup className="bg-red-500  rounded-full h-4 w-4 text-white flex flex-wrap justify-center items-center">
            {wish.length}
          </sup>
        </div>

        <div
          onClick={() => navigate("/cart")}
          className="h-6 cursor-pointer px-2 border-r border-black flex gap-2 justify-center items-center"
        >
          <FaCartArrowDown />
          <h1>cart</h1>
          <sup className="bg-red-500 h-4 w-4 rounded-full text-white flex flex-wrap justify-center items-center">
            {cart.length}
          </sup>
        </div>
      </div>
    </div>
  );
};

export default Nav;
