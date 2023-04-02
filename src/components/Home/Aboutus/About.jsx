import React, { useState } from "react";
import imgtab from "../Aboutus/assests/tab.jpg";
import "./about.css";

const About = () => {
  const [showAboutEmaan, setShowAboutEmaan] = useState(true);

  const handleAboutClick = () => {
    setShowAboutEmaan(true);
  };

  const handleMissionClick = () => {
    setShowAboutEmaan(false);
  };

  return (
    <div className="table-container">
      <div className="left">
        <div className="row" onClick={handleAboutClick}>
          <p>About IU</p>
        </div>
        <div className="row" onClick={handleMissionClick}>
          <p>Mission</p>
        </div>
      </div>
      <div className="middle">
        {showAboutEmaan ? (
          <div>
            <h2 className="table-about-heading">Welcome to Emaan Insititute</h2>
            <p className="table-about-paragraph">
              EMAAN INSTITUTE OF MANAGEMENT & SCIENCES (EIMS) has been
              established via Sindh Act No: XXXV of 2018 and recognized by HEC
              (Higher Education Commission) as Degree Awarding Institute.
            </p>
            <button className="read-more-button">Read More</button>
          </div>
        ) : (
          <div>
            <h2 className="table-mission-heading">Mission</h2>
            <p className="table-mission-paragraph">
              {" "}
              Provide superior undergraduate and graduate programs that are
              technology-enriched and responsive to the needs of students and
              the evolving workplace. Prepare young people to find their place
              in the world.
            </p>
            <button className="read-more-button">Read More</button>
          </div>
        )}
      </div>
      <div className="right">
        <img src={imgtab} alt="IU Image" />
      </div>
    </div>
  );
};

export default About;
