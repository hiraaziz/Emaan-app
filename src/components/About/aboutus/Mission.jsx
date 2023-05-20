import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="AboutMission-container">
      <div className="Mission-image-container">
        <img
          src={process.env.PUBLIC_URL + "/mission.jpg"}
          alt="Mission Image"
          className="hover:scale-105 transition-all delay-100 ease-in"
        />
      </div>
      <div className="Mission-message-container">
        <h2 className="Mission-message-heading">OUR MISSION</h2>
        <p className="Mission-message-paragraph">
          Our mission is to provide students with a transformative education
          that prepares them to be leaders in their fields and in their
          communities. We strive to create a dynamic environment. that fosters
          intellectual curiosity, critical thining and creaive
          problem-solving.Through our innovative programs, outstanding faculty,
          and supportive campus community, we aim to empower our students to
          achieve their full potential and become lifelong learners who are
          prepared to meet the challenges of a rapidly changing world.
        </p>
      </div>
    </div>
  );
};

export default Mission;
