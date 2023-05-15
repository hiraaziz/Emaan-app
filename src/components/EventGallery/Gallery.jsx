import React, { useState } from 'react';
import Footer from "../Home/footer/Footer";
import Middlebar from "../Home/middleBar/Middlebar";
import Topheader from "../Home/topHeader/Topheader";
import NavMenu from "../Home/navigationBar/NavMenu";
import './gallery.css';
import Qawali from './Qawali';
import Orientation from './Orientation';

import cricket1 from '../EventGallery/Galleryimages/cricket/c1.jpg';
import cricket12 from '../EventGallery/Galleryimages/cricket/c12.jpg';
import cricket3 from '../EventGallery/Galleryimages/cricket/c3.jpg';
import cricket4 from '../EventGallery/Galleryimages/cricket/c4.jpg';
import cricket5 from '../EventGallery/Galleryimages/cricket/c5.jpg';
import cricket6 from '../EventGallery/Galleryimages/cricket/c6.jpg';
import cricket7 from '../EventGallery/Galleryimages/cricket/c7.jpg';
import cricket8 from '../EventGallery/Galleryimages/cricket/c8.jpg';
import cricket9 from '../EventGallery/Galleryimages/cricket/c9.jpg';
import cricket10 from '../EventGallery/Galleryimages/cricket/c10.jpg';
import cricket11 from '../EventGallery/Galleryimages/cricket/c11.jpg';


const Gallery = () => {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = (event) => {
    setActiveButton(event.target.textContent);
  }

  const cricketImages = [cricket1, cricket12, cricket3, cricket4, cricket5, cricket6, cricket7, cricket8, cricket9, cricket10, cricket11];

  return (
    <div>
      <Topheader />
      <Middlebar />
      <NavMenu />
      <div className="gallery-container">
        <h1 className="gallery-heading">Emaan Events</h1>
        <div className="gallery-buttons">
          <button className={`gallery-button ${activeButton === 'Cricket Tournament' ? 'active' : ''}`} onClick={handleButtonClick}>Cricket Tournament</button>
          <button className={`gallery-button ${activeButton === 'Orientation' ? 'active' : ''}`} onClick={handleButtonClick}>Orientation</button>
          <button className={`gallery-button ${activeButton === 'Hec inspection 2022' ? 'active' : ''}`} onClick={handleButtonClick}>Hec inspection 2022</button>
          <button className={`gallery-button ${activeButton === 'Qawali night' ? 'active' : ''}`} onClick={handleButtonClick}>Qawali night</button>
        </div>
        {activeButton === 'Cricket Tournament' && (
          <div className="gallery-images">
            {cricketImages.map((image, index) => (
              <div className="gallery-image-wrapper" key={`cricket-${index}`}>
                <img src={image} alt={`cricket-${index}`} className="gallery-image" />
              </div>
            ))}
          </div>
        )}
        {activeButton === 'Orientation' && <Orientation type="orientation" />}
        {activeButton === 'Hec inspection 2022' && <Qawali type="hec-inspection" />}
        {activeButton === 'Qawali night' && <Qawali type="qawali" />}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
