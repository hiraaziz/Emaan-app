import React, { useState } from 'react'
// import {BiPlus} from 'react-icons/bi'

export default function Seminarform() {
  
  const [isOpen, setIsopen] = useState(false);

  const openForm = () => {
    setIsopen(!isOpen);
  };


  return (
    <>
      <div>
        <button className=' py-1 px-6 mt-8 mb-5 w-3/4 font-medium rounded-lg text-white hover:text-red-900 hover:bg-white hover:border-red-800 bg-red-900 text-3xl border-2' onClick={openForm} >
           {isOpen ? 'Registration for Workshop' : 'Registration for Workshop'}
        </button>

        {isOpen && ( 
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfWHcmnLJgYXN41VfX807CMWgzvbd9fnBq-qinfhrqafMXbzg/viewform?embedded=true" 
      width="640" 
      height="2218" 
      frameborder="0" 
      marginheight="0" 
      marginwidth="0">
        Loading…
        </iframe>
        )}
    </div>
    </>
  )
}
