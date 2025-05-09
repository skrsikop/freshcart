import React from "react";
import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="relative bg-primary/10 rounded-3xl overflow-hidden px-5 py-12 sm:px-10 md:px-16 lg:px-24 mt-24">
      {/* Background Image (Right side for medium+ screens) */}
      <img
        src={assets.bottom_banner}
        alt="bottom banner"
        className="hidden lg:block absolute right-0 top-0 h-full w-1/2 object-cover opacity-90"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        
        {/* Title & Features */}
        <div className="space-y-6 text-gray-800">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Why We Are The Best?
          </h2>

          <div className="space-y-5">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-10 h-10 lg:w-12 md:h-12 transition group-hover:scale-110"
                />
                <div>
                  <h3 className="text-base lg:text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image for mobile screens */}
        <div className="lg:hidden">
          <img
            src={assets.bottom_banner}
            alt="bottom banner"
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
