import React, { use, useState } from 'react';
import Primiumcard from '../Primiumcard/Primiumcard';
import Carts from '../Carts/Carts';

const Primiums = ({ dataPromise, carts, setCarts }) => {
  const primiums = use(dataPromise);

  const [selected, setSelected] = useState("products");

  return (
    <div>
      <div className='container mx-auto mt-20'>
        <div className='text-center'> 
          <h1 className='text-5xl font-bold mb-3'>
            Premium Digital Tools
          </h1>

          <p className='text-[#627382] mb-3'>
            Choose from our curated collection of premium digital products designed <br />
            to boost your productivity and creativity
          </p>

       
          <div className='my-4 flex justify-center gap-4'>
            <button
              onClick={() => setSelected("products")}
              className={`btn font-bold text-xl rounded-full p-6 ${
                selected === "products"
                  ? "bg-linear-to-r from-[#4F39F6] to-[#9514F1] text-white"
                  : "bg-white"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setSelected("cart")}
              className={`btn font-bold text-xl rounded-full p-6 ${
                selected === "cart"
                  ? "bg-linear-to-r from-[#4F39F6] to-[#9514F1] text-white"
                  : "bg-white"
              }`}
            >
              {`Cart (${carts.length})`}
            </button>
          </div>
        </div>
      </div>

  
      <div className="tabs tabs-border container mx-auto mt-10">

  
        <input
          type="radio"
          name="my_tabs"
          className="tab hidden"
          checked={selected === "products"}
          readOnly
        />
        <div className="tab-content p-5">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {primiums.map((primium) => (
              <Primiumcard
                key={primium.id}
                primium={primium}
                carts={carts}
                setCarts={setCarts}
              />
            ))}
          </div>
        </div>

    
        <input
          type="radio"
          name="my_tabs"
          className="tab hidden"
          checked={selected === "cart"}
          readOnly
        />
        <div className="tab-content p-5">
          <Carts carts={carts} setCarts={setCarts} />
        </div>

      </div>
    </div>
  );
};

export default Primiums;