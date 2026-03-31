import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            <div className='container mx-auto grid grid-cols-5 gap-5 pt-30'>
                <div className='text-white'>
                    <h1>DigiTools</h1>
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
                             
                            
                            
                            </div>            


 
            </div>
        </div>
    );
};

export default Footer;