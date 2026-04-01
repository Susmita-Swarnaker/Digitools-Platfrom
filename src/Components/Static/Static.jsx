import React from 'react';

const Static = () => {
    return (
        <div>
          <div className='bg-linear-to-r from-[#4F39F7F6] to-[#9514F1]'>
          <div className='container mx-auto grid grid-cols-3 p-5 text-center py-15'>
            <div>
           <h1 className='text-6xl font-bold text-white'>50K+</h1>
           <p className='text-2xl font-medium text-white'>Active users</p>
           
          </div>
            <div>
           <h1 className='text-6xl font-bold text-white'>200+</h1>
           <p className='text-2xl font-medium text-white'>Premium Tools  </p>
           
          </div>
            <div>
           <h1 className='text-6xl font-bold text-white'>4.9</h1>
           <p className='text-2xl font-medium text-white'>Rating</p>
           
          </div>
          </div>
          </div>
        </div>
        
            );
};

export default Static;