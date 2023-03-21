import React from 'react'
import { HiOutlineChevronRight } from "react-icons/hi";

export default function Researchquiklinks() {
  return (
    <>
    <div className='container'>
        <h1 className='text-3xl font-serif'>Research</h1>
        <hr className='w-20 max-w-full h-1 bg-red-600'/>
        <ul className='mt-6'>
          <li className='flex items-center'><HiOutlineChevronRight/>&nbsp;JOURNALS</li>
          <li className='mx-3 mt-3 flex items-center'><HiOutlineChevronRight/>&nbsp;<p className='mt-5'>JOURNALS OF MANAGEMENT SCIENCE</p></li>
          <li className='mx-3 mt-3 flex items-center'><HiOutlineChevronRight/>&nbsp;<p className='mt-5'>JOURNALS OF MANAGEMENT SCIENCE</p></li>
         
          
        </ul>
      
      </div>
    </>
  )
}
