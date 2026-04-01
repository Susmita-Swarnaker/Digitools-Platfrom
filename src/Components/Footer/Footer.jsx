import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            <div className='container mx-auto grid grid-cols-5 gap-5 pt-30 '>
                <div className='text-white'>
                    <h1 className='text-4xl font-bold mb-5'>DigiTools</h1>
                    <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className='text-white space-y-5'>
                        <h1 className='text-xl font-medium'>Product</h1>
                        <p>Features</p>
                        <p>Pricing</p>
                        
                        <p>Templates</p>
                        <p>Integrations</p>



                        </div>              
                    <div className='text-white space-y-5'>
                        <h1 className='text-xl font-medium'>Company</h1>
                        <p>About</p>
                        <p>Blog</p>
                        
                        <p>Careers</p>
                        <p>Press </p>



                        </div>              
                    <div className='text-white space-y-5'>
                        <h1 className='text-xl font-medium'>Resources</h1>
                        <p>Documentation</p>
                        <p>Help Center</p>
                        
                        <p>Community</p>
                        <p>Contact </p>



                        </div>  

                        <div className='text-xl font-medium'> 
                            <h1 className='text-white'>Social Links</h1>
                            <div className='text-white flex gap-3 mt-5'>
                                <FaInstagram />
                                <FaFacebook />
                                <FaXTwitter />
                            </div>


 
                         
                             
                            
                            
                            </div>
                          
                              <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © 2026 Digitools. All rights reserved.
                    </p>

                    <div className="flex gap-8 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>       


 
            </div>
        </div>
    );
};

export default Footer;