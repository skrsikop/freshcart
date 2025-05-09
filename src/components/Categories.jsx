import React from "react";
import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Categories = () => {
  const { navigate } = useAppContext();

  return (
    <div className="mt-16 px-4 md:px-8 lg:px-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Shop by Category</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`group cursor-pointer flex flex-col items-center justify-center text-center rounded-2xl p-5 transition transform hover:scale-105 hover:shadow-lg`}
            style={{ backgroundColor: category.bgColor }}
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
          >
            <img
              src={category.image}
              alt={category.text}
              className="w-20 h-20 object-contain mb-3 transition duration-300 group-hover:scale-110"
            />
            <p className="text-sm md:text-base font-medium text-gray-800">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
