import React from 'react';
import { toast } from 'react-toastify';

const Carts = ({carts ,setCarts}) => {

     const totalPrice = carts.reduce ((sum,item)=> sum + Number(item.price), 0 );
     console.log(totalPrice);
    console.log(carts);

    const handleTotal = ()=>{
        setCarts([])
        toast.success("Peyment successfully")
    }

    const handleClicked =(cart)=>{
        const filtered = carts.filter(c => c.id !== cart.id)
        console.log(filtered);
        setCarts(filtered)
        toast.success("Delete")

    }
    return (
        <div>

            <div className='container mx-auto'>
                <div className='text-center'>
                    <h1 className='text-5xl font-extrabold'>Premium Digital Tools </h1>
                    <p className='text-[#627382] mb-10'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

                </div>

                <h1 className=''>Your card</h1>

                {
                    carts.length === 0 ?<p className='fon-bold text-2xl text-center '>Cart is Empty 🛒 </p>   : <>
                                    <div className='space-y-4'>
                    {
                        carts.map(cart => <div key={cart.id}>
                            <div className='border bg-[#6273820c] rounded-xl border-none space-y-4 flex justify-between items-center p-4'>

                                <div className='flex gap-3 '>
                                    <img className=' w-10 h-10 text-xl p-2 bg-[#F2F2F2] font-bold object-contain rounded-full' src={cart.icon} alt="" />


                                    <div>
                                        <h2 className='text-xl font-semibold'>{cart.name}</h2>
                                        <p>{cart.price} </p>
                                    </div>
                                </div>

                                <div>
                                    <p onClick={()=>handleClicked(cart)} className='text-red-700 md:hover:cursor-pointer '>remove</p>
                                </div>

                            </div>
                        </div>)
                    }
                </div>

                <div className='flex justify-between mt-4'>
                <div>Total:</div>
                <div>${totalPrice}</div>
            </div>
            <button onClick={handleTotal} className='btn bg-linear-to-r from-[#4F39F7F6] to-[#9514F1] text-white w-full rounded-full mt-4'>Procced To Checkout</button>
                    </>
                }

              




            </div>


            
        </div>
    );
};

export default Carts;