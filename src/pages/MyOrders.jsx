import React, { useEffect, useState } from "react";
import {dummyOrders} from '../assets/assets'

const MyOrders = () => {

  const [myOrder , setMyOrder] = useState([])
  
  const fetchMyOrders = async () => {
    setMyOrder(dummyOrders)
  }

  useEffect(()=> {
    fetchMyOrders()
  }, [])
  return <div className="mt-16 pb-16">
    <div className="flex flex-col items-end w-max mb-8">
      <p className="text-2xl font-medium uppercase">My Orders</p>
      <div className="w-16 h-0.5 bg-primary rounded-full " />
    </div>
    {myOrder.map((order,index) => (
      <div key={index} className="border border-gray-300  rounded-lg mb-10 p-4 py-5 max-w-4xl">
        <p className="flex justify-between lg:items-center text-gray-400 lg:font-medium max-md:flex-col">
          <span>OrderId: {order._id}</span>
          <span>Payment: {order.paymentType}</span>
          <span>Total Amount: ${order.amount}</span>
        </p>
        {order.items.map((item,index)=> (
          <div key={index} className={`relative bg-white  text-gray-500/70 ${order.items.length !== index +1 && "border-b"} border-gray-300 flex flex-col lg:flex-row lg:items-center justify-between p-4 py-5 lg:gap-16 w-full max-w-4xl`}>
            <div className="flex items-center mb-4 lg:mb-0">
              <div className="bg-primary/10 p-4 rounded-lg">
                <img src={item.product.image[0]} alt="order image" className="h-16 w-16" />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-medium text-gray-800">{item.product.name}</h2>
                <p >{item.product.category}</p>
              </div>
            </div>


            <div className="flex flex-col justify-center lg:ml-8 mb-4 lg:mb-0">
              <p>Quantity: {item.quantity || "1"}</p>
              <p>Status: {item.status}</p>
              <p>Status: {new Date(order.createdAt).toLocaleDateString()}</p>
            </div>
            <p className="text-primary text-lg font-medium">Amount: ${item.product.offerPrice * item.quantity}</p>
          </div>
        ))}
      </div>
    ))}
  </div>;
};

export default MyOrders;
