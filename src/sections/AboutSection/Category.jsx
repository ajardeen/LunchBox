import React from 'react';
import { GultenSVG, JuiceSVg, KetoSVG } from '../../assets/Svg';
import { VeganSvg } from '../../assets/Svg';
import { DairySVG } from '../../assets/Svg';
import Galary from './Galary';

const FoodCategory = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Category Section */}
      <section className="py-16 text-center">
        <button className="bg-white font-runde shadow text-green-600 uppercase text-sm font-medium px-4 py-2 rounded-3xl border-green-500  hover:bg-green-50 ">Category Us

        </button>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Quench Your Thirst, Satisfy <br /> Your Hunger
        </h2>

        <div className="flex flex-wrap justify-center mt-12 gap-8">
          {/* Keto */}
          <div className="flex flex-col items-center w-32">
            <div className="bg-gray-100 rounded-full p-4 mb-3">
              {/* Placeholder for Keto Icon */}
              {KetoSVG()}
            </div>
            <p className="font-semibold text-gray-800">KETO</p>
            <p className="text-sm text-gray-600 mt-1 text-center">Start Your Meal with Protein</p>
          </div>

          {/* Vegan */}
          <div className="flex flex-col items-center w-32">
            <div className="bg-gray-100 rounded-full p-4 mb-3">
              {/* Placeholder for Vegan Icon */}
              {VeganSvg()}
            </div>
            <p className="font-semibold text-gray-800">VEGAN</p>
            <p className="text-sm text-gray-600 mt-1 text-center">Plant-Powered Plates</p>
          </div>

          {/* Dairy Free */}
          <div className="flex flex-col items-center w-32">
            <div className="bg-gray-100 rounded-full p-4 mb-3">
              {/* Placeholder for Dairy Free Icon */}
              {DairySVG()}
            </div>
            <p className="font-semibold text-gray-800">DAIRY FREE</p>
            <p className="text-sm text-gray-600 mt-1 text-center">Lactose Intolerant Friendly</p>
          </div>

          {/* Gluten Free */}
          <div className="flex flex-col items-center w-32">
            <div className="bg-gray-100 rounded-full p-4 mb-3">
              {/* Placeholder for Gluten Free Icon */}
              {GultenSVG()}
            </div>
            <p className="font-semibold text-gray-800">GLUTEN FREE</p>
            <p className="text-sm text-gray-600 mt-1 text-center">Tasty But Suit Your Diet</p>
          </div>

          {/* Juice */}
          <div className="flex flex-col items-center w-32">
            <div className="bg-gray-100 rounded-full p-4 mb-3">
              {/* Placeholder for Juice Icon */}
              {JuiceSVg()}
            </div>
            <p className="font-semibold text-gray-800">JUICE</p>
            <p className="text-sm text-gray-600 mt-1 text-center">Fresh Juice Add On</p>
          </div>
        </div>
      </section>

      {/* From Our Kitchen Section */}
      <Galary/>
    </div>
  );
};

export default FoodCategory;