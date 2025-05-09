import React from "react";
import { assets } from "../assets/assets";
import { AppContext, useAppContext } from "../context/AppContext";

const ProductCard = ({product}) => {
  const { navigate, addToCart, removeFromCart, cartItems} = useAppContext()

  return product && (
      <div 
        onClick={()=> 
        {navigate(`/products/${product.category.toLowerCase()}/${product._id}`); 
        scrollTo(0,0)}} 
        className="border border-gray-500/20  rounded-xl md:px-4  py-2 px-3 bg-white w-full">
          <div className="group bg-primary/10  rounded-xl cursor-pointer flex items-center justify-center p-3 my-2">
              <img className="group-hover:scale-105 transition max-w-26 md:max-w-36" src={product.image[0]} alt={product.name} />
          </div>
          <div className="text-gray-500/60 text-sm ">
              <p>{product.category}</p>
              <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
              <div className="flex items-center gap-0.5">
                  {Array(5).fill('').map((_, i) => (
                          <img key={i} src={i > 4 ? assets.star_dull_icon : assets.star_icon} 
                           alt="stars icon"
                           className="md:w-3.5 w-3" />
                  ))}
                  <p>(4)</p>
              </div>
              <div className="flex items-end justify-between mt-3">
                  <p className="md:text-xl text-base font-medium text-primary">
                      ${product.offerPrice}  {" "} <span className="text-gray-500/60 md:text-sm text-xs line-through">${product.price}</span>
                  </p>
                  <div className="text-primary">
                      {!cartItems[product._id] ? (
                          <button className="flex items-center cursor-pointer justify-center gap-1 bg-primary/10 border border-primary/40 md:w-[80px] w-[64px] h-[34px] rounded" onClick={() => addToCart(product._id)} >
                              <img src={assets.cart_icon} alt="art icons" />
                              Add
                          </button>
                      ) : (
                          <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-primary/25 rounded select-none">
                              <button onClick={() => {removeFromCart(product._id)}} className="cursor-pointer text-md px-2 h-full" >
                                  -
                              </button>
                              <span className="w-5 text-center">{cartItems[product._id]}</span>
                              <button onClick={() => {addToCart(product._id)}} className="cursor-pointer mb-3 text-md px-2 h-full" >
                                  +
                              </button>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      </div>
  );
};

export default ProductCard