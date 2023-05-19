import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          <p>About EIMS</p>
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
            <button className="read-more-button">
              <Link to="/aboutus">Read More</Link>
            </button>
          </div>
        ) : (
          <div>
            <h2 className="table-mission-heading">Mission</h2>
            <p className="table-mission-paragraph">
              {" "}
              Our mission is to provide students with a transformative education
              that prepares them to be leaders in their fields and in their
              communities. We strive to create a dynamic environment. that
              fosters intellectual curiosity, critical thining and creaive
              problem-solving.Through our innovative programs, outstanding
              faculty, and supportive campus community,
            </p>
            <button className="read-more-button">
              <Link to="/mission">Read More</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
