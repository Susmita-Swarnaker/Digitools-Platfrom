
import React, { useState } from 'react';
import { HiCheck } from "react-icons/hi";
import Carts from '../Carts/Carts';




const Primiumcard = ({primium ,carts,setCarts}) => {
    console.log(primium);

    const [buynNow,setBuyNow] = useState(false)


    const handleEvents =()=> {
        setBuyNow(true)
        setCarts([...carts, primium])
    }
    return (
        <div className='p-4 border border-gray-200 rounded-xl'>
            
            <div >
                
                <div className='relative p-4'>

                { primium.tag === "popular" && <button className='btn rounded-full absolute top-0 right-4 bg-[#FEF3C6]  text-[#FEF3C6]'>{primium.tag}</button>}
                { primium.tag === "best sellar" && <button className='btn rounded-full absolute top-0 right-4 bg-[#E1E7FF]'>{primium.tag}</button>}
                { primium.tag === "new" && <button className='btn rounded-full absolute top-0 right-4 bg-red-200'>{primium.tag}</button>}
                { primium.tag === "popular" && <button className='btn rounded-full absolute top-0 right-4 bg-yellow-200 text-yellow-700'>{primium.tag}</button>}
                { primium.tag === "best seller" && <button className='btn rounded-full absolute top-0 right-4 bg-red-200'>{primium.tag}</button>}
                { primium.tag === "new" && <button className='btn rounded-full absolute top-0 right-4 bg-green-200 text-green-800'>{primium.tag}</button>}
                <img src={primium.icon} alt="" className='w-10 border border-gray-200 rounded-full bg-gray-200 ' />
                <h1 className='text-xl font-bold mb-2'>  {primium.name}</h1>
            
                <p className='text-[#627382] mb-2 '>{primium.description}</p>
                <p className='text-24 font-bold'>${primium.price}/Mo</p>
                <p> {primium.period}</p>
               

 

                <div className='flex gap-2'>
                    <HiCheck className="text-green-500 text-xl" />
                    <p className='text-[#627382] '> {primium.tag}</p>
                </div>
                <div className='flex gap-2'>
                    <HiCheck className="text-green-500 text-xl" /> 
                    <p className='text-[#627382] '>{primium.tagType}</p>
                </div>
               <div className='flex'>
                <HiCheck className="text-green-500 text-xl" />
                 <p >{primium.features}</p>
               </div>
                
                <button onClick={handleEvents} className={'btn bg-linear-to-r from-[#4F39F7F6] to-[#9514F1] w-full rounded-full text-white mt-5'}>{buynNow ?"Added to cart " : "Buy Now"} </button>
                </div>
                
                 
            
         </div>   
      </div>  
    )
}

export default Primiumcard;