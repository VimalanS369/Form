import React from 'react';
import { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';

export default function First() {
  
  const {userData, setUserData} = useContext(StepperContext);
  const handleChange =(e)=>{

    const {name, value} = e.target;
    setUserData({...userData,[name]:value});
  }
  
  
  
  return (
    <div className='flex flex-col'>
  <div className='w-1/2 mx-2 flex-1'>
    <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        {""}
    Username
    </div>
   <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
    <input 
    onChange={handleChange}
    value={userData["username"] || ""}
    name = "username"
    placeholder="Username"
    className='px-1 px-2 appearance-none outline-none w-1/2 text-gray-800'
    />
   </div>

  </div>


    </div>
  )
}
