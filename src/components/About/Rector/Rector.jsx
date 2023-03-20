import React, { useRef, useEffect } from "react";
import Navbar  from '../../Home/navigationBar/Navbar'
import Footer from "../../Home/footer/Footer";
import Middlebar from "../../Home/middleBar/Middlebar";
import Topheader from "../../Home/topHeader/Topheader";
import './Rector.css'

const Rector = () => {
  const RecRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= RecRef.current.offsetTop - window.innerHeight / 2) {
        RecRef.current.classList.add('animate');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

    return (
        <div>
          <Topheader />
          <Middlebar />
          <Navbar />
    
          <div className="recHead-container">
            <header className="rector-header">
              <div className="rector-text">
                <h1>Rector Messages</h1>
              </div>
            </header>
            </div>

 <section class="Recmessage-section">
  <div class="Recmessage-container" ref={RecRef}>
    <h2 class="Recmessage-heading1">RECTOR MESSAGE 01:</h2>
    <div class="Recred-underline"></div>
    <h3 class="Recmessage-heading2">Prof: Dr. Nasir U Din Khan</h3>
    <p class="Recmessage-paragraph">
    <div>Dear students,</div> As the Rector of this esteemed institution, I am pleased to address you today and discuss the significance of professional education. Professional education equips you with the knowledge, skills, and competencies that are necessary to excel in your chosen field of work. It not only helps you build a strong foundation of knowledge but also provides you with the practical skills and experiences that are crucial for success in the real world.

      In today's fast-paced and dynamic job market, employers are constantly seeking candidates who possess the necessary technical and soft skills required for their job role. Professional education plays a critical role in preparing you for this reality. It gives you an edge over your peers and prepares you to face the challenges of your profession with confidence.

      Furthermore, professional education helps in personal development as well. It teaches you time management, critical thinking, problem-solving, teamwork, and communication skills. These are essential skills that you will utilize throughout your career and personal life.

      At this institution, we are dedicated to providing you with a holistic education that blends theoretical knowledge with practical experiences. Our expert faculty, modern facilities, and state-of-the-art technologies ensure that you receive a world-class education that prepares you for success in your chosen career.

      We also provide a range of resources and support services that can help you to achieve your professional and personal goals. Our career services team, for instance, can assist you in exploring career paths, building your resume, and preparing for interviews.

      In conclusion, I urge you to embrace the opportunities for professional education that are available to you at this institution. Take advantage of the resources and support services that we provide and use them to achieve your full potential. With the right education and skills, you can make a significant impact on your chosen profession and contribute to building a better world.

      <br /><br />

      <span class="bold-text">Prof: Dr. Nasir U Din Khan</span><br />
      Rector<br />
      Emaan Institute of Management & Science Karachi
    </p>
    
  </div>
</section>

<section class="Recmessage-section">
  <div class="Recmessage-container">
    <h2 class="Recmessage-heading1">RECTOR MESSAGE 02:</h2>
    <div class="Recred2-underline"></div>
    <p class="Recmessage-paragraph">
    <div>Dear students,</div> I hope this message finds you well and that you're taking good care of yourselves and your loved ones. I wanted to take a moment to speak with you about something that is very important to me, and that is the value of education. 
Education is a powerful tool that has the ability to transform lives, communities, and even entire societies. It provides us with the knowledge, skills, and opportunities we need to achieve our goals and make a positive impact on the world around us.
Whether you're pursuing a degree in a traditional classroom setting, taking online courses, or learning through hands-on experience, education is a journey that requires dedication, hard work, and perseverance. But the rewards are immeasurable.
Education opens doors to new career opportunities, helps us better understand the world we live in, and allows us to connect with others in meaningful ways. It also gives us the tools we need to solve complex problems and make informed decisions about our lives and our futures.
As the rector of this institution, I encourage you to embrace the opportunities for learning that are available to you, both inside and outside the classroom. Take advantage of the resources that are at your disposal, including your professors, mentors, and fellow students. And above all, never stop learning.
In today's rapidly changing world, education is more important than ever before. It is the key to unlocking your potential and achieving your dreams. So, I urge you to make the most of this incredible opportunity and to pursue your education with passion and enthusiasm.


      <br /><br />
      Rector<br />
      Emaan Institute of Management & Science Karachi
    </p>
    
  </div>
</section>

<Footer />
    </div>
  );
};



export default Rector;
