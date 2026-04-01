


import React from 'react';

const Static = () => {
  return (
    <div>
      <div className="bg-linear-to-r from-[#4F39F7F6] to-[#9514F1]">

        <div className="container mx-auto px-4 py-10 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">

          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              50K+
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-white">
              Active users
            </p>
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              200+
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-white">
              Premium Tools
            </p>
          </div>

          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
              4.9
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-white">
              Rating
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Static;