import React, { use, useState } from 'react';

import Primiumcard from '../Primiumcard/Primiumcard';
import Carts from '../Carts/Carts';

const Primiums = ({dataPromise ,carts,setCarts}) => {

    const primiums = use(dataPromise);
    console.log(primiums);

    const [selceted,setSelceted] = useState("products");
    console.log(selceted);
    
    
    return (
        <div className=''>
            <div className='container mx-auto mt-20'>
           <div className='text-center'> 
                 <h1 className='text-5xl font-bold mb-3'>Premium Digital Tools</h1>
                <p className='text-[#627382] mb-3'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity</p>

                <div className=' my-4'>
                    <button onClick={()=> setSelceted("products")} className={`btn font-bold text-xl rounded-full p-6 ${selceted ==="products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514F1] text-white" : "bg-white"}`}>Products</button>
                    <button onClick={()=> setSelceted("cart")} className={`btn font-bold text-xl rounded-full p-6 ${selceted ==="cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514F1] text-white" : "bg-white"}`}>{Cart}</button>
                </div>
               

                
           </div>
          
            </div>
             {
                selceted === "products" &&    <div className=' container mx-auto  grid grid-cols-3 gap-4 mb-30'>
                {
                    primiums.map(primium => <Primiumcard primium ={primium} carts={carts} setCarts={setCarts}></Primiumcard>
                        
                        
                        
                        )}
                        
                    
                
              
            </div>
            }

            {selceted === "cart" && <Carts carts={carts} setCarts={setCarts}></Carts>} 

         
            
            
        </div>
      
    );
};

export default Primiums;