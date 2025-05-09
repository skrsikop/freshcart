import React, { useEffect, useState } from "react";
import {useAppContext} from '../../context/AppContext'

const SellerLogin = () => {

  const  {isSeller, setIsSeller, naviagte} = useAppContext()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSeller(true)
  }
  useEffect(()=> {
    if(isSeller) {
      naviagte('/seller')
    }
  }, [isSeller])
  return !isSeller && (
    <form onSubmit={onSubmitHandler} className="min-h-screen flex items-center text-gray-600 text-sm">
      <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200 ">
        <p className="text-2xl font-medium  m-auto">
          Login
          <span className="text-primary" > seller</span>
        </p>
        <div className="w-full">
          <p>Email</p>
          <input onChange={(e) =>setEmail(e.target.value)} value={email} type="email" placeholder="Enter your Email" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input onChange={(e) =>setPassword(e.target.value)} value={password} type="passowrd" placeholder="Enter your Password" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" />
        </div>
        <button className="bg-primary text-white w-full cursor-pointer py-2 rounded-md">Login</button>
      </div>
    </form>
  );
};

export default SellerLogin;
