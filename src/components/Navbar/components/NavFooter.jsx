import React from 'react'
import { Bag, Favorite } from '../../../CONSTANTS'


const NavFooter = () => {
  return (
    <div className='transition-opacity duration-300 ease-in-out opacity-100'>
    <p
      className={`flex text-center items-center justify-center space-x-2 pb-4 border-b-2 border-white`}
    >
      <span>TEXT SUPPORT 24/7 </span>
      <span className="text-[#D29A5A]">070-7782-9137</span>
    </p>
    <div className="flex items-center justify-center space-x-12 py-4">
      <div className="flex items-center justify-center">
        <span>
          <Bag />
        </span>
        <p>CART</p>
      </div>
      <div className=" flex items-center justify-center">
        <span>
          <Favorite />
        </span>
        <p>WISHLIST</p>
      </div>
    </div>
  </div>
  )
}

export default NavFooter