import React from "react";
import { assets } from '../assets/assets';
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row items-center justify-between bg-primary/10 rounded-2xl overflow-hidden px-6 md:px-10 xl:px-16 py-10 gap-8 mt-16 mx-5 xl:mx-10">
      
      {/* Left Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h1 className="text-2xl md:text-4xl xl:text-5xl text-center lg:text-left font-bold leading-tight lg:leading-snug max-w-md md:max-w-lg text-gray-900">
        FreshCart – Groceries Delivered Fresh to Your Doorstep
        </h1>
        
        <div className="flex  lg:mx-0 mx-auto flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6 font-medium">
          <Link 
            to="/products" 
            className="group flex items-center gap-2 px-7 py-3 bg-primary hover:bg-primary-dull transition rounded-full text-white shadow-lg"
          >
            Shop Now 
            <img 
              src={assets.white_arrow_icon} 
              alt="arrow" 
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>

          <Link 
            to="/products" 
            className="group  items-center hidden md:flex gap-2 text-primary hover:underline"
          >
            Explore Deals 
            <img 
              src={assets.black_arrow_icon} 
              alt="arrow" 
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-1/2">
        <img 
          src={assets.main_banner_img}
          alt="main banner" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default MainBanner;
