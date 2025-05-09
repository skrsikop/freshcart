import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";

const BestSeller = () => {
  const {products} = useAppContext()
  return <div className="mt-16 ">
    <h1 className="text-2xl md:text-3xl font-medium">Best Seller</h1>
    <div className="grid grid-cols-2 container mx-auto items-center md:grid-cols-3  xl:grid-cols-5 gap-3 md:gap-6 mt-6">
      {products.filter((product) => product.inStock).slice(0,5).map((product,index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  </div>;
};

export default BestSeller;
