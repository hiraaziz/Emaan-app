import React from 'react'
import Footer from '../../../Home/footer/Footer';
import Middlebar from '../../../Home/middleBar/Middlebar';
import Navbar from '../../../Home/navigationBar/Navbar';
import Topheader from '../../../Home/topHeader/Topheader';
import ReadMore from './ReadMore';
import Researchquiklinks from '../../Researchquiklinks';
// import ReadMore1 from './readmore'

export default function Researchgrands2() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam mi quis dolor ultricies, ut mattis nibh malesuada. Phasellus quis nibh id purus dictum egestas. Sed vitae lorem eu urna gravida consectetur. Nulla sagittis velit eu ante pulvinar, eget blandit quam dictum. Quisque et felis auctor, sollicitudin libero eu, maximus purus. Duis fermentum, risus in pharetra molestie, nulla quam efficitur lacus, vel porttitor velit velit at dolor. Nunc eu urna ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam mi quis dolor ultricies, ut mattis nibh malesuada. Phasellus quis nibh id purus dictum egestas. Sed vitae lorem eu urna gravida consectetur. Nulla sagittis velit eu ante pulvinar, eget blandit quam dictum. Quisque et felis auctor, sollicitudin libero eu, maximus purus. Duis fermentum, risus in pharetra molestie, nulla quam efficitur lacus, vel porttitor velit velit at dolor. Nunc eu urna ipsum.";

  return (
   <>  
   <Topheader/>
   <Middlebar/>
   <Navbar/>
      <div className='flex mb-32'>   
             <div className='w-2/3 mx-8 mt-6'>
                <div className='text-4xl my-10 font-bold'>EIMS RESEARCH PUBLICATION GRANT PROPOSAL (PGP)<hr className='w-96 h-2 bg-red-800 mt-5'/></div>
                
                 <div>
                      <ReadMore previewText={text.substring(0, 300)} fullText={text} />
                 </div>
             </div>

             <div>
            <div className='w-1/3 mt-28 drop-shadow-2xl'><img className='max-w-sm transition duration-300 ease-in-out hover:scale-110' src='Call for Emaan Research.jpeg' alt=''/></div> 
            <div className='mt-10'><Researchquiklinks/></div> 
            </div>
           
      </div>
      <Footer/>
    </>
  );
}

