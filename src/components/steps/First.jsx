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
    <div className='w-[46%] mx-2 flex-1'>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        {""}
        Title of Album, EP or Single
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
        <input 
          onChange={handleChange}
          value={userData["title"] || ""}
          name="title"
          className='px-1 px-2 appearance-none outline-none w-1/2 text-gray-800'
        />
      </div>
    </div>



    <div className='w-auto flex'>
    <div className='w-1/2 mx-2 flex-1'>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        {""}
        Copyright Holder
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
        <input 
          onChange={handleChange}
          value={userData["crighthldr"] || ""}
          name="crighthldr"
          className='px-1 px-2 appearance-none outline-none w-1/2 text-gray-800'
        />
      </div>
    </div>
    <div className='w-1/2 mx-2 flex-6'>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        {""}
        Copyright Year
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
        <input 
          onChange={handleChange}
          value={userData["crightyr"] || ""}
          name="crightyr"
          className='px-1 px-2 appearance-none outline-none w-1/2 text-gray-800 ml-2'
        />
      </div>
    </div>
    </div>


    <div className='w-auto flex'>
    <div className='w-1/2 mx-2 flex-1'>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        {""}
        Production Holder
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
        <input 
          onChange={handleChange}
          value={userData["phldr"] || ""}
          name="phldr"
          className='px-1 px-2 appearance-none outline-none w-1/2 text-gray-800'
        />
      </div>
    </div>
    <div className='w-1/2 mx-2 flex-6'>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        {""}
       Production Year
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
        <input 
          onChange={handleChange}
          value={userData["pyr"] || ""}
          name="ptyr"
          className='px-1 px-2 appearance-none outline-none w-1/2 text-gray-800 ml-2'
        />
      </div>
    </div>
    </div>



    <div className='w-[46%] mx-2 flex-1'>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        {""}
        Title of Album, EP or Single
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
        

      <select  name="rlabel" 
      value={userData["rlabel"] || ""} 
      onChange={handleChange} 
      className='px-1 px-2 appearance-none outline-none w-1/2 text-gray-800'>
          <option value="independent">Independent</option>

      </select>
      </div>
    </div>

    <br />
    <br />

    <hr />
    <br />
  
    <h1 className=' font-bold text-3xl'>Artwork</h1>

      <input type="file" name="artwrk" className='' />

    <br />
    <br />

    <hr />
    <br />
  
    <h1 className=' font-bold text-3xl'>Genre</h1>
   

    <div className='w-auto flex'>
    <div className='w-1/2 mx-2 flex-1'>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        {""}
        Primary Genre
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
        <input 
          onChange={handleChange}
          value={userData["prigenre"] || ""}
          name="prigenre"
          className='px-1 px-2 appearance-none outline-none w-1/2 text-gray-800'
        />
      </div>
    </div>
    <div className='w-1/2 mx-2 flex-6'>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        {""}
        Secondary Genre
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
        <input 
          onChange={handleChange}
          value={userData["secgenre"] || ""}
          name="secgenre"
          className='px-1 px-2 appearance-none outline-none w-1/2 text-gray-800 ml-2'
        />
      </div>
    </div>
    </div>
    <div className='w-[46%] mx-2 flex-1'>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        {""}
       Language
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
        <input 
          onChange={handleChange}
          value={userData["lang"] || ""}
          name="lang"
          className='px-1 px-2 appearance-none outline-none w-1/2 text-gray-800'
        />
      </div>
    </div>
    

  </div>
  
  )
}
