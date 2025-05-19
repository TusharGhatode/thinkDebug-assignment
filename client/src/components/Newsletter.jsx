import React from 'react'
import { FaSearch } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className='p-8 '>
        <img src="/public/Image/newslatter.jpg" className=""/>

    <div className='flex -mt-28'>
             <input type="text" className='border-2 p-2 w-80 border-gray-300 bg-white text-black ml-24' placeholder='search for products, brands and more'/>
            <div className='bg-yellow-500 w-12 flex flex-wrap justify-center items-center'>
                <FaSearch className='text-white'/>
            </div>
           </div>
       
    </div>
  )
}

export default Newsletter