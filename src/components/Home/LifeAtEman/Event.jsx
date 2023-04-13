import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Event.css";

const Event = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const sectionHeight = containerRef.current.getBoundingClientRect().height;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop + window.innerHeight >= containerRef.current.offsetTop + sectionHeight / 2) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="event-container" ref={containerRef}>
      <h1 className="event-heading">LIFE AT EMAAN</h1>
      <motion.div
        className="image-container"
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.img
          src={process.env.PUBLIC_URL + "/e1.png"}
          alt="Event 1"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.img
          src={process.env.PUBLIC_URL + "/e2.png"}
          alt="Event 2"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.img
          src={process.env.PUBLIC_URL + "/e3.png"}
          alt="Event 3"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.img
          src={process.env.PUBLIC_URL + "/e1.png"}
          alt="Event 4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      
      
    </div>
  );
};

export default Event;

