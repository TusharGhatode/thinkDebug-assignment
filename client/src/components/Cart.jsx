import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
    console.log(cartData);
  }, []);

  return (
    <div>
      <h1 className="flex flex-wrap justify-center items-center my-8 font-bold text-xl">
        Cart
      </h1>

      <div className="flex overflow-x-auto space-x-4 p-4">
        {cart.map((elem, index) => (
          <div
            key={index}
            className="w-48 min-w-[12rem] border-2 border-gray-300 p-2 rounded-lg bg-white"
          >
            <div className="relative">
              <img
                src={elem.image}
                className="h-32 w-full object-cover rounded"
                alt="Product"
              />
              <div className="absolute top-2 right-2">
                <FaRegHeart className="text-red-500 h-6 w-6 cursor-pointer" />
              </div>
            </div>
            <h3 className="font-bold mt-2 text-sm">{elem.title}</h3>
            <p className="text-blue-500 font-semibold my-1">
              from ${elem.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
