import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#101727] text-white'>


      <div className='container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
        <div>
          <h1 className='text-3xl md:text-4xl font-bold mb-3'>DigiTools</h1>
          <p className="text-[14px] ">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div className='space-y-2'>
          <h1 className='text-xl font-medium'>Product</h1>
          <p>Features</p>
          <p>Pricing</p>
          <p>Templates</p>
          <p>Integrations</p>
        </div>

        <div className='space-y-2'>
          <h1 className='text-xl font-medium'>Company</h1>
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Press</p>
        </div>

        <div className='space-y-2'>
          <h1 className='text-xl font-medium'>Resources</h1>
          <p>Documentation</p>
          <p>Help Center</p>
          <p>Community</p>
          <p>Contact</p>
        </div>

        <div className='space-y-2'>
          <h1 className='text-xl font-medium'>Social Links</h1>
          <div className='flex gap-3 mt-2 text-2xl'>
            <FaInstagram />
            <FaFacebook />
            <FaXTwitter />
          </div>
        </div>
      </div>

     
      <hr className="border-gray-800 my-6" />

      
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 pb-10 text-sm">
        <p>© 2026 DigiTools. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
          <a href="">Cookies</a>
        </div>
      </div>

    </div>
  );
};

export default Footer;