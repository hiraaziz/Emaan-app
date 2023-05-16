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
          We believe that curiosity is at the heart of every academic pursuit. A
          desire to learn, the courage to question and a passion for discovery
          are present in everything we do. We encourage students to dream, to
          think critically, creatively, and insightfully, and we engage in their
          own lives, their communities, and the world.
        </p>
      </div>
    </div>
  );
};

export default Mission;
