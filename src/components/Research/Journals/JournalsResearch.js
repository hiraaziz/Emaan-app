import React from 'react'
import Topheader from '../../Home/topHeader/Topheader'
import Middlebar from '../../Home/middleBar/Middlebar'
import Navbar from '../../Home/navigationBar/Navbar'
import Footer from '../../Home/footer/Footer'
import Researchquiklinks from '../Researchquiklinks'

export default function JournalsResearch() {
  return (
     <>
        <Topheader/>
        <Middlebar/>
        <Navbar/>
            <div> 
                    <div className='mb-16 flex'>
                           <div className='w-2/3 mx-8 mt-6'>
                                <div className='text-4xl my-10'>
                                        <b className='font-semibold'> RESEARCH</b> JOURNALS
                                    <hr className='w-16 h-1.5 bg-red-800 mt-4'/>
                                </div>
                                
                                <div className='my-4'>
                                    <p className='text-justify '>
                                          What is Lorem Ipsum?
                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                          when an unknown printer took a galley of type and scrambled it to make a type 
                                          specimen book. It has survived not only five centuries, but also the leap into 
                                          electronic typesetting, remaining essentially unchanged. It was popularised in 
                                          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                          and more recently with desktop publishing software like Aldus PageMaker including 
                                          versions of Lorem Ipsum.
                                    </p>
                                 </div>
                                 <div className='my-10'>
                                    <p>Click below to register as <strong>Reviewer</strong></p>
                                    <button className=' w-48 h-14 text-2xl rounded-lg drop-shadow-sm text-white bg-red-900 hover:border-red-800 border-2 hover:bg-white hover:text-red-900'>
                                       Register Now
                                    </button>
                                 </div>
                                 <div className='my-10'>
                                    <p>For submitting research paper please click below</p>
                                    <button className=' w-48 h-14 text-2xl rounded-lg drop-shadow-sm text-white bg-red-900 hover:border-red-800 border-2 hover:bg-white hover:text-red-900'>
                                       Submit Paper
                                    </button>
                                 </div>
                              </div>
                              <div className='my-24 mx-4 w-1/4'><Researchquiklinks/></div>
                           </div>
            
            
            
            
            
            
            
            
            
            </div>

      <Footer/>
     </>
  )
}
