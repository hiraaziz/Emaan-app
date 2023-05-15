import React, { useState, useEffect } from "react";
import "./slider.css";
import slider1 from "./Simages/s1.jpg";
import slider2 from "./Simages/s2.jpg";
import slider3 from "./Simages/s3.jpg";
import slider4 from "./Simages/s4.jpg";
import slider5 from "./Simages/s5.jpg";
import slider6 from "./Simages/s6.jpg";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % 6);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const Pagination = ({ currentSlide, totalSlides, onSlideChange }) => {
    const buttons = [];
    for (let i = 0; i < totalSlides; i++) {
      buttons.push(
        <button
          key={i}
          className={i === currentSlide ? "active" : ""}
          onClick={() => onSlideChange(i)}
        >
          <span></span>
        </button>
      );
    }
    return <div className="pagination">{buttons}</div>;
  };

  return (
    <div className="carousel">
      <img
        src={slider1}
        alt="Slider Image 1"
        className={currentImage === 0 ? "active" : ""}
        style={{ width: "100%" }}
      />
      <img
        src={slider2}
        alt="Slider Image 2"
        className={currentImage === 1 ? "active" : ""}
        style={{ width: "100%" }}
      />
      <img
        src={slider3}
        alt="Slider Image 3"
        className={currentImage === 2 ? "active" : ""}
        style={{ width: "100%" }}
      />
      <img
        src={slider4}
        alt="Slider Image 4"
        className={currentImage === 3 ? "active" : ""}
        style={{ width: "100%" }}
      />
      <img
        src={slider5}
        alt="Slider Image 5"
        className={currentImage === 4 ? "active" : ""}
        style={{ width: "100%" }}
      />
      <img
        src={slider6}
        alt="Slider Image 6"
        className={currentImage === 5 ? "active" : ""}
        style={{ width: "100%" }}
      />
      <Pagination
        currentSlide={currentImage}
        totalSlides={6}
        onSlideChange={setCurrentImage}
      />
    </div>
  );
};

export default Carousel;
