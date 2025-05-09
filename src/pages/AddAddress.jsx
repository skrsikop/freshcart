import React, { useState } from "react";
import {assets} from '../assets/assets'

// input field 
const InputField = ({type, placeholder, name, handleChange , address}) => (
  <input 
    className='w-full px-2 py-2.5 border border-gray-500/30 rounded-md outline-none text-gray-500 focus:border-primary transition'
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    value={address[name]}
    required
    name={name}
   />
)
const AddAddress = () => {

  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }
  return <div className="mt-16 pb-16">
    <p className="text-2xl lg:text-3xl text-gray-500">Add Shipping <span className="font-semibold text-primary">Address</span></p>
    <div className="flex flex-col-reverse lg:flex-row justify-between mt-10">
      <div className="flex-1 max-w-md">
        <form onSubmit={onSubmitHandler} className="space-y-3  mt-6 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <InputField handleChange={handleChange} name="FirstName" type="text" placeholder="First Name" address={address} />
            <InputField handleChange={handleChange} name="LastName" type="text" placeholder="Last Name" address={address} />
          </div>
          <InputField handleChange={handleChange} name="email" type="email" placeholder="Your Email " address={address} />
          <InputField handleChange={handleChange} name="street" type="text" placeholder="street " address={address} />
          <div className="grid grid-cols-2 gap-4">
            <InputField handleChange={handleChange} name="city" type="text" placeholder="City" address={address} />
            <InputField handleChange={handleChange} name="state" type="text" placeholder="State" address={address} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <InputField handleChange={handleChange} name="zipCode" type="number" placeholder="Zip Code" address={address} />
            <InputField handleChange={handleChange} name="country" type="text" placeholder="Country" address={address} />
          </div>
          <InputField handleChange={handleChange} name="phone" type="number" placeholder="Phone" address={address} />
          <button type="submit" className="w-full bg-primary text-center  py-3  text-white cursor-pointer rounded-md mt-6 transition  hover:bg-primary-dull">
            Save Address
          </button>
        </form>
      </div>
      <img src={assets.add_address_iamge} alt="address" className="lg:mr-16 mb-16 lg:mt-0" />
    </div>
  </div>;
};

export default AddAddress;
