import React from 'react';
import img from  "../../../assets/banner.png";
import icons from "../../../assets/play.png"



const Banner = () => {
    return (
        <div>
            <div className='container mx-auto grid  grid-cols-2 gap-60 my-20 justify-center items-center'>
                <div className='space-y-4   '>
                    <p className='btn p-4 rounded-full bg-[#E1E7FF] text-[#4F39F6]'> <img src="" alt=""/> New:AI-powered Tools Available</p>
                    <h1 className='text-7 font-bold'>Supercharge Your Digital Workflow</h1>
                       <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />

                        Explore Products</p>
                        <div className='flex gap-3'>
                            <button className='btn bg-linear-to-r from-[#4F39F6] to-[#9514F1] rounded-full p-4 text-white'>Explore Products</button>
                            <div>
                                <button className='flex gap-2 btn rounded-full border-[#4F39F6] text-[#4F39F6]'> <img src={icons} alt="" /> Watch Demo</button>
                            </div>
                        </div>

                     

                </div>
                <div className=''>
                    <img src={img} alt="" />

                </div>
 </div>
           
        </div>
    );
};

export default Banner;