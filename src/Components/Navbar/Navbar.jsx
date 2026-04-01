
import React from 'react';
import imge from "../../assets/products/shopping-cart.png";

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto my-5 px-4">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">

      
          <h1 className="text-3xl font-bold bg-linear-to-r from-[#4F39F7F6] to-[#9514F1] bg-clip-text text-transparent">
            DigiTools
          </h1>

         
          <ul className="flex flex-col md:flex-row gap-4 text-center">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>

          <div className="flex items-center gap-4">
            <img src={imge} alt="" className="w-8" />
            <p>Login</p>
            <button className="px-5 py-2 rounded-full bg-[#4F39F6] text-white">
              Get Started
            </button>
          </div>

        </div>
      </div>

      <hr className="text-gray-200" />
    </div>
  );
};

export default Navbar;