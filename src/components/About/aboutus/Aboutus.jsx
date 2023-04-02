import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom"; // import the Link component from React Router
import Mission from "./Mission"; // import the Mission component
import Objective from "./Objective";
import img1 from './assests/chartered.png'
import img2 from './assests/hec.png'
import Navbar from "../../Home/navigationBar/Navbar";
import Footer from "../../Home/footer/Footer";
import Middlebar from "../../Home/middleBar/Middlebar";
import Topheader from "../../Home/topHeader/Topheader";
import "./AboutUs.css";

const Aboutus = () => {
  const welcomeSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (welcomeSectionRef.current) {
      observer.observe(welcomeSectionRef.current);
    }

    return () => {
      if (welcomeSectionRef.current) {
        observer.unobserve(welcomeSectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Topheader />
      <Middlebar />
      <Navbar />

      <div className="about-us-container">
        <header className="about-us-header">
          <div className="header-text">
            <h1>About Emaan</h1>
          </div>
        </header>
      </div>

      <section class="welcome-section" ref={welcomeSectionRef}>
        <div class="wel-container">
          <h2 class="welcome-heading">Welcome to Emaan Institute</h2>

          <p class="welcome-paragraph">
            EMAAN INSTITUTE OF MANAGEMENT & SCIENCES (EIMS) has been established
            via Sindh Act No: XXXV of 2018 and recognized by HEC (Higher
            Education Commission) as Degree Awarding Institute. EMAAN INSTITUTE
            OF MANAGEMENT & SCIENCES (EIMS) has been established for creating
            leaders and developing the best professionals in every arena of
            life. It is our motto to impart the best quality education to the
            people of Pakistan. We have determined to play a pivotal role in
            rebuilding the educational foundations of our country on the basis
            of following visionary principles;{" "}
            <span class="text-mahroon font-bold">
              CHARTERED BY GOVERNMENT OF SINDH, RECOGNIZED BY HEC (HIGHER
              EDUCATION COMMISSION)
            </span>{" "}
            as Degree Awarding Institute. <br></br>
            We offer a wide range of high quality of teaching and
            extra-curricular activities.Providing state-of-the-art campus
            building in order to create congenial academic environment. Hiring
            the highly qualified, profoundly experienced and veteran faculty
            members, who will uplift the standard of education and transform the
            students’ lives. Bridging the gap between the Corporate Sector and
            the Educational Institutes/Universities so that education of
            relevance can be provided in order to cater to the national as well
            as international needs..
          </p>
          <div class="welcome-images-container">
            <img src={img1} alt="Image 1" class="welcome-image1"></img>
            <img src={img2} alt="Image 2" class="welcome-image"></img>
          </div>
        </div>
      </section>

      {/* Render the Mission component */}
      <Mission />
      <Objective />

      <Footer />
    </div>
  );
};

export default Aboutus;
