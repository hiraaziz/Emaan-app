import React, { useState, useRef, useEffect } from "react";
import "./vision.css";

const Vision = () => {
  const [isVisible, setIsVisible] = useState(false);
  const messageRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const messagePosition = messageRef.current.getBoundingClientRect();
      const imagePosition = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (
        messagePosition.left < window.innerWidth &&
        imagePosition.left > 0 &&
        messagePosition.bottom > 0 &&
        messagePosition.top < windowHeight
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const messageStyle = {
    transform: `translateX(${isVisible ? "0%" : "-100%"})`,
    opacity: isVisible ? 1 : 0,
    transition: "transform 1s ease-out, opacity 1s ease-out",
  };

  const imageStyle = {
    transform: `translateX(${isVisible ? "0%" : "100%"})`,
    opacity: isVisible ? 1 : 0,
    transition: "transform 1s ease-out, opacity 1s ease-out",
  };

  return (
    <div className="AboutVision-container">
      <div
        className="Vision-message-container"
        style={messageStyle}
        ref={messageRef}
      >
        <h2 className="Vision-message-heading">OUR VISION</h2>
        <p className="Vision-message-paragraph">
          We believe that curiosity is at the heart of every academic pursuit. A
          desire to learn, the courage to question and a passion for discovery
          are present in everything we do. We encourage students to dream, to
          think critically, creatively, and insightfully, and we engage in their
          own lives, their communities, and the world.
        </p>
      </div>
      <div className="Vision-image-container" ref={imageRef}>
        <img
          src={process.env.PUBLIC_URL + "/vision.png"}
          alt="Mission Image"
          className="hover:scale-105 transition-all delay-100 ease-in"
        />
      </div>
    </div>
  );
};

export default Vision;
