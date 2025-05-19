import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa"; // Import both icons
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const wishlistData = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCart(cartData);
    setWishlist(wishlistData);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const updateWishlist = (newWishlist) => {
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  const addToCart = (item) => {
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      const updated = cart.map((c) =>
        c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
      );
      updateCart(updated);
    } else {
      updateCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (item) => {
    const existing = cart.find((c) => c.id === item.id);
    if (existing.quantity === 1) {
      updateCart(cart.filter((c) => c.id !== item.id));
    } else {
      const updated = cart.map((c) =>
        c.id === item.id ? { ...c, quantity: c.quantity - 1 } : c
      );
      updateCart(updated);
    }
  };

  const removeFromCart = (item) => {
    updateCart(cart.filter((c) => c.id !== item.id));
  };

  const toggleWishlist = (item) => {
    const exists = wishlist.find((w) => w.id === item.id);
    if (exists) {
      updateWishlist(wishlist.filter((w) => w.id !== item.id));
    } else {
      updateWishlist([...wishlist, item]);
    }
  };

  const isInCart = (id) => cart.find((item) => item.id === id);
  const isInWishlist = (id) => wishlist.find((item) => item.id === id);

  return (
    <div className="bg-white mx-8 p-4 h-104 my-8">
      <h1 className="my-4 font-bold text-xl">Special Products For You</h1>
      <h4 className="my-4 font-bold text-gray-500">Special Products For You</h4>

      <div className="flex overflow-x-auto space-x-4 p-4">
        {data.map((elem) => {
          const cartItem = isInCart(elem.id);
          const wishlistItem = isInWishlist(elem.id);

          return (
            <div
              key={elem.id}
              className="w-48 min-w-[12rem] border-2 border-gray-300 p-2 rounded-lg bg-white"
            >
              <div className="relative">
                <img
                  src={elem.image}
                  className="h-32 w-full object-cover rounded"
                  alt="Product"
                />
                <div
                  className="absolute top-2 right-2"
                  onClick={() => toggleWishlist(elem)}
                >
                  {wishlistItem ? (
                    <FaHeart className="text-red-500 h-6 w-6 cursor-pointer" />
                  ) : (
                    <FaRegHeart className="text-red-500 h-6 w-6 cursor-pointer" />
                  )}
                </div>
              </div>

              <h3 className="font-bold mt-2 text-sm">
                {elem.title.slice(0, 20)}
              </h3>
              <p className="text-blue-500 font-semibold my-1">
                from ${elem.price}
              </p>

              {cartItem ? (
                <div className="flex justify-between items-center mt-2">
                  <button
                    onClick={() => removeFromCart(elem)}
                    className="text-red-500 cursor-pointer text-sm"
                  >
                    Delete
                  </button>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => decreaseQuantity(elem)}
                      className="bg-gray-300 px-2 rounded"
                    >
                      -
                    </button>
                    <span>{cartItem.quantity}</span>
                    <button
                      onClick={() => addToCart(elem)}
                      className="bg-gray-300 cursor-pointer px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(elem)}
                  className="bg-orange-500 w-full p-2 mt-2 cursor-pointer text-white rounded hover:bg-orange-600 transition"
                >
                  Add To Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;


