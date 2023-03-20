import React from 'react';
import { IoIosSchool, IoMdTrophy, IoMdClipboard } from 'react-icons/io';
import './AlumniSuccess.css';

const AlumniSuccess = () => {
  return (
    <div className="alumni-success-banner">
      <div className="banner-Scontent">
        <div className="banner-Sstats">
          <div className="stat-Sitem">
            <IoIosSchool className="stat-icon" />
            <p className="stat-heading">Our Philosophy</p>
            <p>
            We will strive to define and make visible all issues that concern us at large, and focus on applied techniques to meet the social and technological needs of the future. </p>
          </div>
          <div className="stat-Sitem">
            <IoMdTrophy className="stat-icon" />
            <p className="stat-heading">Our Principle</p>
            <p>
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.
            </p>
          </div>
          <div className="stat-Sitem">
            <IoMdClipboard className="stat-icon" />
            <p className="stat-heading">Key Success</p>
            <p>
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniSuccess;
