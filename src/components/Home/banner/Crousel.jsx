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
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isTransitioning) {
        setCurrentImage((currentImage) => (currentImage + 1) % 6);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isTransitioning]);

  const handleSlideChange = (index) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage(index);
        setIsTransitioning(false);
      }, 1000);
    }
  };

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
        className={`carousel__image ${currentImage === 0 ? "active" : ""}`}
        style={{ width: "100%" }}
      />
      <img
        src={slider2}
        alt="Slider Image 2"
        className={`carousel__image ${currentImage === 1 ? "active" : ""}`}
        style={{ width: "100%" }}
      />
      <img
        src={slider3}
        alt="Slider Image 3"
        className={`carousel__image ${currentImage === 2 ? "active" : ""}`}
        style={{ width: "100%" }}
      />
      <img
        src={slider4}
        alt="Slider Image 4"
        className={`carousel__image ${currentImage === 3 ? "active" : ""}`}
        style={{ width: "100%" }}
      />
      <img
        src={slider5}
        alt="Slider Image 5"
        className={`carousel__image ${currentImage === 4 ? "active" : ""}`}
        style={{ width: "100%" }}
      />
      <img
        src={slider6}
        alt="Slider Image 6"
        className={`carousel__image ${currentImage === 5 ? "active" : ""}`}
        style={{ width: "100%" }}
      />
      <Pagination
        currentSlide={currentImage}
        totalSlides={6}
        onSlideChange={handleSlideChange}
      />
    </div>
  );
};

export default Carousel;
