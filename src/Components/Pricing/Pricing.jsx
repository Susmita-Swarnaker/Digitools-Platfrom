import React from 'react';
import { HiCheck } from "react-icons/hi";

const Pricing = () => {
    return (
        <div>
        
            <div className='max-w-7xl mx-auto mt-20'>
                <h1 className='text-5xl font-bold text-center'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382] text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>    
            </div>
            <div className='grid grid-cols-3 gap-7 container mx-auto mt-10 mb-30'>
                <div className='border border-gray-100 bg-[#F9FAFC] rounded-2xl p-10'>
                    <h1 className='text-2xl font-bold'>Starter</h1>
                    <p className='text-[#627382] mb-6'>Perfect for getting started</p>
                    <h2 className='text-[#627382] mt-3'> <span className='text-3xl font-bold text-black'>$0</span>/Month</h2>
                    <div className='mt-5'>
                        <div className='flex gap-2'>
                             <HiCheck className="text-green-500 text-xl" />
                        <p className='text-[#627382]'>Access to 10 free tools</p>
                    </div>
                    <div className='flex gap-2'>
                        <HiCheck className="text-green-500 text-xl" />
                        <p className='text-[#627382]'>Basic templates</p>
                    </div>
                    <div className='flex gap-2'>
                        <HiCheck className="text-green-500 text-xl" />
                        <p className='text-[#627382]'>Community support</p>
                    </div>
                    <div className='flex gap-2'>
                        <HiCheck className="text-green-500 text-xl" />

                        <p className='text-[#627382]'>1 project per month</p>
                    </div>
                    </div>
                    <button className='w-full btn bg-linear-to-r from-[#4F39F6] to-[#9514F1] rounded-full mt-15 text-white'>Get Started Free</button>
                </div>
                <div className='border border-gray-100 bg-[#F9FAFC] rounded-2xl p-10 bg-linear-to-r from-[#4F39F6] to-[#9514F1] text-white relative'> 
                    <button className='btn text-[#BB4D00] bg-[#FEF3C6] rounded-full absolute -top-4 left-45'>Most Popular</button>
                    <h1 className='text-2xl font-bold'>Pro</h1>
                    <p className='mb-6 text-white'>Best for professionals</p>
                    <h2 className='text-white mt-3'> <span className='text-3xl font-bold text-white'>$29</span>/Month</h2>
                    <div className='mt-5'>
                        <div className='flex gap-2'>
                             <HiCheck className="text-white text-xl" />
                        <p className='text-white'>Access to all premium tools</p>
                    </div>
                    <div className='flex gap-2'>
                        <HiCheck className="text-white text-xl" />
                        <p className='text-white'>Unlimited templates</p>
                    </div>
                    <div className='flex gap-2'>
                        <HiCheck className="text-white text-xl" />
                        <p className='text-white'>Priority support</p>
                    </div>
                    <div className='flex gap-2'>
                        <HiCheck className="text-white text-xl" />

                        <p className='text-white'>Unlimited projects</p>
                    </div>
                    <div className='flex gap-2'>
                        <HiCheck className="text-white text-xl" />

                        <p className='text-white'>Cloud sync</p>
                    </div>
                    <div className='flex gap-2'>
                        <HiCheck className="text-white text-xl" />

                        <p className='text-white'>Advanced analytics</p>
                    </div>
                    </div>
                    <button className=' btn w-full rounded-full mt-5 bg-white'> <span className='bg-linear-to-r from-[#4F39F6] to-[#9514F1] bg-clip-text text-transparent'>Start Pro Trial</span></button>
 
   
                </div>
                <div className='border border-gray-100 bg-[#F9FAFC] rounded-2xl p-10'>
                    <h1 className='text-2xl font-bold'>Enterprise</h1>
                    <p className='text-[#627382] mb-6'>For teams and businesses</p>
                    <h2 className='text-[#627382] mt-3'> <span className='text-3xl font-bold text-black'>$99</span>/Month</h2>
                    <div className='mt-5'>
                        <div className='flex gap-2'>
                             <HiCheck className="text-green-500 text-xl" />
                        <p className='text-[#627382]'>Everything in Pro</p>
                    </div>
                    <div className='flex gap-2'>
                        <HiCheck className="text-green-500 text-xl" />
                        <p className='text-[#627382]'>Team collaboration</p>
                    </div>
                    <div className='flex gap-2'>
                        <HiCheck className="text-green-500 text-xl" />
                        <p className='text-[#627382]'>Custom integrations</p>
                    </div>
                    <div className='flex gap-2'>
                        <HiCheck className="text-green-500 text-xl" />

                        <p className='text-[#627382]'>Dedicated support</p>
                    </div>
                    <div className='flex gap-2'>
                        <HiCheck className="text-green-500 text-xl" />

                        <p className='text-[#627382]'>SLA guarantee</p>
                    </div>
                    <div className='flex gap-2'>
                        <HiCheck className="text-green-500 text-xl" />

                        <p className='text-[#627382]'>Custom branding</p>
                    </div>
                    </div>
                    <button className='w-full btn bg-linear-to-r from-[#4F39F6] to-[#9514F1]  rounded-full mt-5 text-white'>Contact Sales</button>
                </div>
               
                
            </div>
        </div>
    );
};

export default Pricing;