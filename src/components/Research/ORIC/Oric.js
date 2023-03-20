import React, { useState } from 'react'
import Footer from '../../Home/footer/Footer';
import Middlebar from '../../Home/middleBar/Middlebar';
import Navbar from '../../Home/navigationBar/Navbar';
import Topheader from '../../Home/topHeader/Topheader';
import Researchquiklinks from '../Researchquiklinks';
import {Oricdata2, Oricdata3, Oricdata4} from './Oricdata';

export default function Oric() {

    const [activeComponents, setActiveComponent] = useState('A');
    const renderComponent = () => {
      switch (activeComponents) {
        case 'A':
          return <Oricdata2/>;
        case 'B':
          return <Oricdata3/>;
        case 'C':
          return <Oricdata4/>;
        default:
          return null;

      }
    }



  return (
    <>
    <Topheader/>
    <Middlebar/>
    <Navbar/>
    <div className='flex '>
      <div className=' '>
      <div className='mt-6 mx-5'>
        <div className='mx-5 w-28 rounded-full'><img src='Oric logo.jpeg' alt='none'/></div>
         <div className=''>
           <h1 className='mt-6 mx-5 text-4xl font-serif'>Office of Research, <br></br>Innovation & Commercialization (ORIC)</h1>
         </div>
         {/* <div className='mx-28 mt-11'>

          <Researchquiklinks/>
        
         </div> */}
        
      </div>

      <div className='flex mt-6 mx-5'>
        <div className='container mt-6 w-40'>
            <ul>
            <li className='mt-1 mx-3'><button onClick={() => setActiveComponent('A')} className='py-1 px-6 rounded hover:text-white hover:bg-red-900 text-lg w-48 border-2 border-red-900'><h1>Introduction</h1></button></li>
            <li className='mt-1 mx-3'><button onClick={() => setActiveComponent('B')} className='py-1 px-1 rounded hover:text-white hover:bg-red-900 text-lg w-48 border-2 border-red-900'>Vision & Mission</button></li>
            <li className='mt-1 mx-3'><button onClick={() => setActiveComponent('C')} className='py-1 px-1 rounded hover:text-white hover:bg-red-900 text-lg w-48 border-2 border-red-900'>Director's Message</button></li>
            
            </ul>

        </div>
        <div className='container mt-6 mx-20 box-content h-96 max-w-6xl p-4 border-2 shadow-lg mb-10'>
            {renderComponent()}
        </div>
      </div>
      </div>
      <div className=' mt-32 w-1/3'>

          <Researchquiklinks/>
        
         </div>
    </div>
    <Footer/>
    </>
  )
}
