import React, { use } from 'react';

import Primiumcard from '../Primiumcard/Primiumcard';

const Primiums = ({dataPromise}) => {

    const primiums = use(dataPromise);
    console.log(primiums);
    
    
    return (
        <div className=''>
            <div className='container mx-auto mt-20'>
           <div className='text-center'> 
                 <h1 className='text-[40px] font-bold'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity</p>
           </div>
          
            </div>

            <div className=' container mx-auto  grid grid-cols-3 gap-4'>
                {
                    primiums.map(primium => <Primiumcard primium ={primium }></Primiumcard>
                        
                        
                        
                        )}
                        
                    
                
              
            </div>
            
        </div>
    );
};

export default Primiums;