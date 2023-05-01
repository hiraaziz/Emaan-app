import React from 'react'
import Footer from '../../Home/footer/Footer'
import Topheader from '../../Home/topHeader/Topheader'
import Middlebar from '../../Home/middleBar/Middlebar'
import Navbar from '../../Home/navigationBar/Navbar'

export default function EJMS() {
  return (
    <>
      <Topheader/>
        <Middlebar/>
        <Navbar/>
             <div className='main mb-40'>
                <div className='mx-16 my-24 mb-16'>
                    <div className=''>
                        <h4 className='font-monserrat text-lg text-slate-500 tracking-widest'>About The Journal</h4>
                    </div>
                    <div className=''>
                        <h1 className='text-3xl font-gloock tracking-widest text-red-900'> Emaan Journal of Management & Sciences (EJMS)</h1>
                        <p className='my-6 self-center text-justify w-700'>
                           Intends to promote the culture of managerial and business research. The journal welcomes empirical articles and 
                           case studies, having novel and innovative ideas related to the management sciences. The authors are welcome to 
                           submit their latest innovative research covering the broad scope of management. The research article may 
                           improve the conventional set of beliefs, by discussing innovative and challenging ideas, which benefit the 
                           business world and society with new theoretical insights.
                        </p>
                    </div>
                    <div className=''>
                        <h4 className=' my-16 font-monserrat text-lg text-slate-500 tracking-widest'>About The Publisher</h4>
                    </div>
                    <div>
                    <p className='-my-14   self-center text-justify w-700'>
                            <strong>The Department of Business Administration</strong> publishes the Emaam Journal of Management Sciences (EJMS) 
                            bi-annually, carrying the objectives of offering an arena for novel discourse about improving the knowledge in 
                            every aspect of management sciences. The Department of Business Administration in Emaan Institute of 
                            Management & Sciences Karachi offers a forum to the Academies and Entrepreneurial Class of society to 
                            contribute novel business ideas through their latest research. The EJMS disseminates these novel ideas globally 
                            by having open-access journals. Your insight and criticism regarding the improvement of the journal are
                            welcome. 
                        </p>
                    </div>
                    <div className=' flex h-56 '>
                        <ul className='my-20'>
                            <li className='my-2'><strong>Muhammad Arif</strong></li>
                            <li className='my-2'><strong>Managing Editor Subscription Rate</strong></li>
                            <li className='my-2'><strong>Department of Business Administration</strong></li>
                            <li className='my-2'><strong>Emaan Institute of Management & Sciences</strong></li>
                        </ul>
                    
                    </div>
                    <ul  className='w-500 mx-400'>
                            <li className='my-2'>Inland: Rs/400 </li>
                            <li className='my-2'>General: Rs/700</li>
                            <li className='my-2'>Overseas: US$/ 200</li>
                            <li className='my-2'>ISSN (P) #####</li>
                            <li className='my-2'>ISSN (E)#####</li>
                            <li className='my-2'>Abbreviated Key Title:</li>
                            <li className='my-2'>J.manag.res</li>
                        </ul>
                    <div className='my-10'>
                        <h2 className='text-2xl font-semibold'>Disclaimer</h2>
                        <p className=''><strong>EIMS:</strong> does not at all assent any liability for any idea, statement, content, or opinion articulated or concluded by 
                           the authors of EJMS. </p>
                    </div>
                    

                </div>








             
             
             
             
             
             
             
             
             
             
             
             
             </div>
        <Footer/>
    </>
  )
}
