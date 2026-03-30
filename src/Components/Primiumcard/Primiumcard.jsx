
import React from 'react';




const Primiumcard = ({primium}) => {
    console.log(primium);
    return (
        <div className='shadow-2xl p-4 border border-gray-200 rounded-xl'>
            
            <div >
                
                <div >
                <h1 className='text-2xl font-bold'>{primium.name}</h1>
            
                <p className='text-[#627382]'>{primium.description}</p>
                <p className='text-24 font-bold'>${primium.price}/Mo</p>
                <p> {primium.period}</p>

 
<p> {primium.period}</p>
                <p className='text-[#627382]'>{primium.tag}</p>
                <p className='text-[#627382]'>{primium.tagType}</p>
                
                <button className='btn'> Buy Now</button>
                </div>
                
                 
            
         </div>   
      </div>  
    )
}

export default Primiumcard;