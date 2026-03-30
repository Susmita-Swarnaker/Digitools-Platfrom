import React from 'react';
import imge from  "../../assets/products/shopping-cart.png";

const Navbar = () => {
    return (
        <div>
            <div className=' container mx-auto my-5 grid grid-cols-3 items-center'>
                <h1 className='text-3xl font-bold bg-linear-to-r from-[#4F39F7F6] to-[#9514F1] bg-clip-text text-transparent'>DigiTools</h1>
               <ul className='flex gap-4'>
                <li>Products</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials </li>
                <li>FAQ</li>
               </ul>

               <div className='flex justify-center items-center gap-5  '>
                <img src={imge} alt="" />
                <p>Login</p>
                <button className='btn p-5 rounded-full bg-[#4F39F6] text-white  '>Get Started</button>
                </div> 
                
            </div>
            <hr className='text-gray-200' />
            
        </div>
    );
};

export default Navbar;