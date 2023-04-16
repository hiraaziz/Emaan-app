import React, { useRef, useEffect } from "react";
import Mission from "./Mission"; // import the Mission component
import Objective from "./Objective";

import Navbar from "../../Home/navigationBar/Navbar";
import Footer from "../../Home/footer/Footer";
import Middlebar from "../../Home/middleBar/Middlebar";
import Topheader from "../../Home/topHeader/Topheader";
import "./AboutUs.css";
import Vision from "./Vision";

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

      <div class="about-container">
        <h1 class="about-heading">ABOUT E I M S</h1>
        <img
          class="about-image"
          src={process.env.PUBLIC_URL + "/about.png"}
          alt="Description of the image"
        />
      </div>

      <section class="welcome-section" ref={welcomeSectionRef}>
        <div class="wel-container">
          <div class="welcome-container">
            <h2 class="welcome-heading">Welcome to Emaan Institute</h2>
            <p class="welcome-paragraph">
              EMAAN INSTITUTE OF MANAGEMENT & SCIENCES (EIMS) has been
              established via Sindh Act No: XXXV of 2018 and recognized by HEC
              (Higher Education Commission) as Degree Awarding Institute. EMAAN
              INSTITUTE OF MANAGEMENT & SCIENCES (EIMS) has been established for
              creating leaders and developing the best professionals in every
              arena of life. It is our motto to impart the best quality
              education to the people of Pakistan. We have determined to play a
              pivotal role in rebuilding the educational foundations of our
              country on the basis of following visionary principles; CHARTERED
              BY GOVERNMENT OF SINDH, RECOGNIZED BY HEC (HIGHER EDUCATION
              COMMISSION) as Degree Awarding Institute. <br></br>
              We offer a wide range of high quality of teaching and
              extra-curricular activities.Providing state-of-the-art campus
              building in order to create congenial academic environment. Hiring
              the highly qualified, profoundly experienced and veteran faculty
              members, who will uplift the standard of education and transform
              the students’ lives. Bridging the gap between the Corporate Sector
              and the Educational Institutes/Universities so that education of
              relevance can be provided in order to cater to the national as
              well as international needs..
            </p>
          </div>
        </div>
      </section>
      <section class="recognized-section">
  <div class="recognized-container">
    <div class="recognized-heading-container">
      <h2 class="recognized-heading">Chartered by Government of Sindh,<br>
      </br> RECOGNIZED BY HEC (HIGHER EDUCATION COMMISSION)</h2>
    </div>
    <div class="recognized-images-container">
    <img src={process.env.PUBLIC_URL + '/chartered.png'} alt="Image 1" class="chartered" />
    <img src={process.env.PUBLIC_URL + '/hec.png'} alt="Image 2" class="hec" />

    </div>
  </div>
</section>


      {/* Render the Mission component */}
      <Mission />
      <Vision/>
      <Objective />

      <Footer />
    </div>
  );
};

export default Aboutus;
