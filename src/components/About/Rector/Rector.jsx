import React, { useRef, useEffect } from "react";
import Navbar from "../../Home/navigationBar/Navbar";
import Footer from "../../Home/footer/Footer";
import Middlebar from "../../Home/middleBar/Middlebar";
import Topheader from "../../Home/topHeader/Topheader";
import "./Rector.css";

const Rector = () => {
  const RecRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= RecRef.current.offsetTop - window.innerHeight / 2) {
        RecRef.current.classList.add("animate");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Topheader />
      <Middlebar />
      <Navbar />

      <div className="recHead-container">
        <header className="rector-header">
          <div className="rector-text">
            <h1>Rector Message</h1>
          </div>
        </header>
      </div>

      <section class="Recmessage-section">
        <div class="Recmessage-container" ref={RecRef}>
          <h2 class="Recmessage-heading1">RECTOR MESSAGE:</h2>
          <div class="Recred-underline"></div>
          <h3 class="Recmessage-heading2">Prof: Dr. Nasir U Din Khan:</h3>
          <div class="Recmessage-paragraph">
            <div class="bold-Red">Dear Students,</div>
            <p>
              As the Rector of this esteemed institution, I am pleased to
              address you today and discuss the significance of professional
              education. Professional education equips you with the knowledge,
              skills, and competencies that are necessary to excel in your
              chosen field of work. It not only helps you build a strong
              foundation of knowledge but also provides you with the practical
              skills and experiences that are crucial for success in the real
              world. In today's fast-paced and dynamic job market, employers are
              constantly seeking candidates who possess the necessary technical
              and soft skills required for their job role. Professional
              education plays a critical role in preparing you for this reality.
              It gives you an edge over your peers and prepares you to face the
              challenges of your profession with confidence. Furthermore,
              professional education helps in personal development as well. It
              teaches you time management, critical thinking,{" "}
              <span class="light-red">problem-solving</span>,{" "}
              <span class="light-red">teamwork</span>, and{" "}
              <span class="light-red">communication skills.</span> These are
              essential skills that you will utilize throughout your career and
              personal life.
            </p>
            <p>
              At this institution, we are dedicated to providing you with a
              holistic education that blends theoretical knowledge with
              practical experiences. Our expert faculty, modern facilities, and
              state-of-the-art technologies ensure that you receive a
              world-class education that prepares you for success in your chosen
              career. We also provide a range of resources and support services
              that can help you to achieve your professional and personal goals.
              Our career services team, for instance, can assist you in
              exploring career paths, building your resume, and preparing for
              interviews. In conclusion, I urge you to embrace the opportunities
              for professional education that are available to you at this
              institution. Take advantage of the resources and support services
              that we provide and use them to achieve your full potential. With
              the right education and skills, you can make a significant impact
              on your chosen profession and contribute to building a better
              world.
            </p>
            <br></br>
            <div className="bold-grey">Prof: Dr. Nasir U Din Khan</div>
            <div className="bold-grey">Rector</div>
            <div className="bold-grey">
              Emaan Institute of Management & Sciences Karachi.
            </div>
          </div>
        </div>
       
      </section>

      <Footer />
    </div>
  );
};

export default Rector;
