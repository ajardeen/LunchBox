import React from 'react';

const FoodCategory = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Category Section */}
      <section className="py-16 text-center">
        <button className="bg-white font-runde shadow text-green-600 uppercase text-sm font-medium px-4 py-2 rounded-3xl border-green-500  hover:bg-green-50 transition">Category Us

        </button>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Quench Your Thirst, Satisfy <br /> Your Hunger
        </h2>

        <div className="flex flex-wrap justify-center mt-12 gap-8">
          {/* Keto */}
          <div className="flex flex-col items-center w-32">
            <div className="bg-gray-100 rounded-full p-4 mb-3">
              {/* Placeholder for Keto Icon */}
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.275a1.912 1.912 0 010 2.694L16.293 17.5l-2.121 2.121a1 1 0 01-1.414 0l-2.121-2.121L5.657 12.879a1 1 0 010-1.414L7.07 10.05a1 1 0 011.414 0l4.243 4.243a1 1 0 001.414 0l1.414-1.414a1 1 0 011.414 0l.707.707z"></path></svg>
            </div>
            <p className="font-semibold text-gray-800">KETO</p>
            <p className="text-sm text-gray-600 mt-1 text-center">Start Your Meal with Protein</p>
          </div>

          {/* Vegan */}
          <div className="flex flex-col items-center w-32">
            <div className="bg-gray-100 rounded-full p-4 mb-3">
              {/* Placeholder for Vegan Icon */}
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3 .895-3 2 1.343 2 3 2m0-8c2.21 0 4 1.343 4 3s-1.79 3-4 3-4 1.343-4 3 1.79 3 4 3m0-12V5h.01M12 4v.01"></path></svg>
            </div>
            <p className="font-semibold text-gray-800">VEGAN</p>
            <p className="text-sm text-gray-600 mt-1 text-center">Plant-Powered Plates</p>
          </div>

          {/* Dairy Free */}
          <div className="flex flex-col items-center w-32">
            <div className="bg-gray-100 rounded-full p-4 mb-3">
              {/* Placeholder for Dairy Free Icon */}
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
            </div>
            <p className="font-semibold text-gray-800">DAIRY FREE</p>
            <p className="text-sm text-gray-600 mt-1 text-center">Lactose Intolerant Friendly</p>
          </div>

          {/* Gluten Free */}
          <div className="flex flex-col items-center w-32">
            <div className="bg-gray-100 rounded-full p-4 mb-3">
              {/* Placeholder for Gluten Free Icon */}
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7l7-3 7 3m-7 0v8m0-8V4m0 4h4m-4 0H8"></path></svg>
            </div>
            <p className="font-semibold text-gray-800">GLUTEN FREE</p>
            <p className="text-sm text-gray-600 mt-1 text-center">Tasty But Suit Your Diet</p>
          </div>

          {/* Juice */}
          <div className="flex flex-col items-center w-32">
            <div className="bg-gray-100 rounded-full p-4 mb-3">
              {/* Placeholder for Juice Icon */}
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h1M3 12H2m15.39-4.81l.71-.71M5.89 18.11l-.71.71m-.71-.71l.71.71M18.11 5.89l-.71-.71"></path></svg>
            </div>
            <p className="font-semibold text-gray-800">JUICE</p>
            <p className="text-sm text-gray-600 mt-1 text-center">Fresh Juice Add On</p>
          </div>
        </div>
      </section>

      {/* From Our Kitchen Section */}
      <section className="py-16 px-6 md:px-24">
     <button className="bg-white font-runde text-green-600 uppercase text-sm font-medium px-4 py-2 rounded-3xl border-green-500 shadow hover:bg-green-50 transition">
  Gallery
</button>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-8 md:mb-0">
            From Our Kitchen To <br /> Your Table
          </h2>
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">NOURISH YOUR BODY, NOURISH YOUR LIFE</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Discover the transformative power of food. By making conscious choices about what you eat, you can improve your energy levels, boost your mood, and enhance your overall quality of life.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodCategory;