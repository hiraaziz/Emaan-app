import React from 'react'
import { HiOutlineChevronRight } from "react-icons/hi";

export default function Researchquiklinks() {
  return (
    <>
    <div className='container w-auto'>
        <h1 className='text-3xl font-serif'>Research</h1>
        <hr className='w-20 max-w-full h-1 bg-red-600'/>
        <ul className='mt-6'>
          <li className='flex items-center text-lg'><HiOutlineChevronRight/>&nbsp;JOURNALS</li>
          <li className='mx-4 mt-4 flex items-center'><HiOutlineChevronRight/>&nbsp;<p className='mt-1 text-base'>JOURNALS OF MANAGEMENT SCIENCE</p></li>
          <li className='mx-4 mt-4 flex items-center'><HiOutlineChevronRight/>&nbsp;<p className='mt-1 text-base'>JOURNALS OF COMPUTER SCIENCE</p></li>
         
          
        </ul>
      
      </div>
    </>
  )
}
