import React from 'react';
import './Alumgallery.css';

const AlumGallery = () => {
  return (
    <div className="alum-gallery">
      <div className="alum-gallery-box">
        <img src="https://via.placeholder.com/400x300" alt="Event 1" />
        <h4>Event 1</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#">Read More</a>
      </div>
      <div className="alum-gallery-box">
        <img src="https://via.placeholder.com/400x300" alt="Event 2" />
        <h4>Event 2</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#">Read More</a>
      </div>
      <div className="alum-gallery-box">
        <img src="https://via.placeholder.com/400x300" alt="Event 3" />
        <h4>Event 3</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

export default AlumGallery;

