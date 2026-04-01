import React from 'react';
import img from "../../assets/user.png";
import imge from "../../assets/package.png";
import imges from "../../assets/rocket.png";


const Step = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className='container mx-auto my-10 '>
              <div className='text-center'>
                  <h2  className='text-5xl font-bold pt-20 '>Get Started in 3 Steps</h2>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-20 pb-20'>
                <div className='relative border border-gray-100 rounded-xl p-20 bg-[#FFFFFF]'>
                
                  <div className='text-center '>
                      <button className='absolute  top-3 right-3 w-8 h-8 text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514F1]'>O1</button>
                    <img src={img} alt="" className='w-15 bg-[#E1E7FF] p-2 rounded-full mx-auto'/>
                    <h1 className='text-2xl font-bold'>Create Account</h1>
                    <p className='text-[#627382]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                  </div>
               
                </div>
                <div className='relative border border-gray-100 rounded-xl p-20 bg-[#FFFFFF]'>
                
                  <div className='text-center'>
                      <button className='absolute top-3 right-3 w-8 h-8 text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514F1]'>O2</button>
                    <img src={imge} alt="" className='w-15 bg-[#E1E7FF] p-2 rounded-full mx-auto'/>
                    <h1 className='text-2xl font-bold'>Create Account</h1>
                    <p className='text-[#627382]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                  </div>
               
                </div>
                <div className='relative border border-gray-100 rounded-xl p-20 bg-[#FFFFFF]'>
                
                  <div className='text-center'>
                      <button className='absolute top-3 right-3 w-8 h-8 text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514F1]'>O3</button>
                    <img src={imges} alt="" className='bg-[#E1E7FF] p-2 w-15 rounded-full  mx-auto'/>
                    <h1 className='text-2xl font-bold'>Choose Products</h1>
                    <p className='text-[#627382]'>Browse our catalog and select the toolsthat fit your needs..</p>
                  </div>
               
                </div>
              
                
              </div>
            </div>
        </div>
    );
};

export default Step;