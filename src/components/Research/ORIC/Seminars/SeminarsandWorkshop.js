import React from 'react'
import Footer from '../../../Home/footer/Footer';
import Middlebar from '../../../Home/middleBar/Middlebar';
import Navbar from '../../../Home/navigationBar/Navbar';
import Topheader from '../../../Home/topHeader/Topheader';
import Seminarform from './Seminarform';
import Workshopform from './Workshopform';
// import ReadMore from './ReadMore';
// import ReadMore1 from './readmore'

export default function SeminarsandWorkshop() {
  

  return (
   <>  
   <Topheader/>
   <Middlebar/>
   <Navbar/>
      <div className=''>   
           <div className='flex mb-28 mt-10'>
            <div className='w-2/3 mx-8 mt-6'>

                <div className='text-5xl my-10  '>EIMS WORKSHOP HOSTED BY ORIC<hr className='w-24 h-1 bg-red-800 mt-3 mx-1'/></div>
                
                 <div className='my-4'>
                                    <p className='text-justify '>
                                    These Workshops allow students to study and gain insight into a wide range of topics while also motivating 
                                    them to pursue new interests. They are often designed to encourage a facilitator to give particular attention 
                                    to each attendee. A workshop requires participants to take a hands-on approach to immediately use the skills 
                                    they are learning while also being tested so that they comprehend the correct outcomes.

                                    </p>


                                    <h1 className='mt-8  text-2xl font-poppins font-medium'>Why was this workshop conducted?</h1>

                                    <p className='mt-4 text-justify'>

                                    The purpose of this workshop varies from faculty to faculty; however, some workshops are broad and cross-discipline in nature. Furthermore, the basic concept of the workshop remains the same: to assist students and faculty in improving their skill development while increasing their learning curve. The purpose of this workshop may also include some of the following:


                                    <ul className='list-disc mx-8 mt-4'>
                                      <li className='mt-2'>They are allowing students to conduct in-depth research on a topic with relevant facts.</li>
                                      <li className='mt-2'>Knowledge of the concept and outcomes.</li>
                                      <li className='mt-2'>Acquiring a diverse set of specific skills.</li>
                                      <li className='mt-2'>Developing strong learning and analytical abilities.</li>
                                      <li className='mt-2 mb-4'>Encouragement of fresh ideas and problem-solving strategies.</li>
                                    </ul>
                                       
                                    EIMS is providing an opportunity to you attend workshops as listed below in the registration form.

                                    </p>
                  </div>

                   <div><Workshopform/></div>
              </div>
              <div className='w-1/3 mt-28 drop-shadow-2xl'><img className='max-w-sm transition duration-300 ease-in-out hover:scale-110' src='EMAAN confrence Grand.jpeg' alt=''/></div>
           </div>  

                         <div className=''> <hr className='w-800 h-2 bg-red-800 mt-1 mx-24 '/></div>


        <div className=' flex mb-28'> 
            <div className='w-2/3 mx-8 mt-6'>
           <div className='text-5xl my-10 mt-24 '>EIMS SEMINARS HOSTED BY ORIC<hr className='w-24 h-1 bg-red-800 mt-3 mx-1'/></div>
                
                 <div className='my-4'>
                                    <p className='text-justify '>
                                    Seminars are an important aspect of the university's academic activities since they allow students to 
                                    discuss, analyze, and learn about a variety of new ideas, concepts, and advancements in their respective 
                                    subjects.
                                    </p>


                                    <h1 className='mt-8  text-2xl font-poppins font-medium'>Why Attend?</h1>

                                    <p className='mt-4 text-justify'>

                                    The seminar's exact purpose varies significantly across the university and from subject to subject. 
                                    Yet the essence of the seminar remains to assist students in skill development while also increasing their learning curve. 
                                    The following are some examples of purpose: 


                                    <ul className='list-disc mx-8 mt-4'>
                                      <li className='mt-2'>Giving students the opportunity to investigate a topic in-depth and with relevant facts.</li>
                                      <li className='mt-2'>Cultivating a diverse set of communication and intellectual abilities.</li>
                                      <li className='mt-2'>Developing self-esteem and personality.</li>
                                      <li className='mt-2'>Facilitating interaction between students and the speaker.</li>
                                      
                                    </ul>
                                       
                                    EIMS is providing an opportunity for you to attend seminars as listed below in the registration form.
                                    </p>
                                    

                 </div>

                 <div><Seminarform/></div>
                 </div>
                 <div className='w-1/3 mt-28 drop-shadow-2xl'><img className='max-w-sm transition duration-300 ease-in-out hover:scale-110' src='EMAAN confrence Grand.jpeg' alt=''/></div>
          </div>

              
       </div>
      <Footer/>
    </>
  );
}



