import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-white border-t-2 border mt-28 border-gray-400 flex-wrap justify-between px-12 py-12 ">
      <div class="first ">
        <img src="/public/Image/logo.png" className="h-16 mb-2 w-60" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
          vero!
        </p>
      </div>
      <div class="second">
        <h1 className="font-bold my-2">Help</h1>
        <p>Faq</p>
        <p>about</p>
        <p>contact</p>
      </div>

      <div class="third">
        <h1 className="font-bold my-2">Quick Links</h1>
        <p>Supplier</p>
        <p>Track Order</p>
        <p>Custom Support</p>
      </div>
      <div class="fourth">
        <h1 className="font-bold my-2">Buy On Ecommerse</h1>
        <p>Terms & Condition</p>
        <p>Privacy</p>
        
      </div>
      <div class="fifth">
        <h1 className="font-bold my-2">Help</h1>
      </div>
    </div>
  );
};

export default Footer;
