import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";


const Products = () => {
    const {products , searchQuery} = useAppContext()
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=> {
      if (searchQuery.length > 0) {
        setFilteredProducts(products.filter(
          product => product.name.toLowerCase().includes(searchQuery.toLowerCase())

        ))}else {
          setFilteredProducts(products)
        }
    }, [products, searchQuery])
  
  return <div className="mt-16 ">
  <h1 className="text-2xl md:text-3xl font-medium  pb-2 flex flex-col">All Products <span className="border-b-2 border-primary w-1/12 ml-20"/></h1>
  <div className="grid grid-cols-2 container mx-auto items-center md:grid-cols-3  xl:grid-cols-5 gap-3 md:gap-6 mt-6">
      {filteredProducts.filter((product) => product.inStock).map((product,index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
</div>;;
};

export default Products;
