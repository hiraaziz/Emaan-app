import React, { useState, useEffect } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { motion } from "framer-motion";

const Crousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      {currentIndex == 0 ? (
        <div
          className="bg-cover bg-center "
          style={{
            backgroundImage: 'url("./banner.png")',
            height: "520px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col justify-center w-full h-full items-center text-white space-y-4">
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="font-black text-6xl w-500 text-center"
            >
              WELCOME TO EMAAN INSTITUE
            </motion.div>
            <p className="font-medium text-md w-96 text-center">
              We serves you Quality Education You can discover what makes you
              amazing
            </p>
            <button
              className="font-medium text-white bg-maroon border-2 border-maroon 
            rounded-full py-3 px-6 transition ease-in-out delay-150 duration-300 
            hover:scale-110 self-center"
            >
              APPLY NOW
            </button>
          </div>
        </div>
      ) : (
        <div
          className="bg-cover bg-center "
          style={{
            backgroundImage: `url(${images[currentIndex].img})`,
            height: "520px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col w-full justify-center items-center md:items-start text-white md:pl-20">
            <div className="flex flex-col w-700 mt-12 ml-10  md:ml-20">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", duration: 1.5 }}
                className="font-extrabold w-700 md:w-auto text-6xl md:text-9xl "
              >
                {images[currentIndex].courseName}
              </motion.div>
              <h3 className="font-semibold text-3xl md:text-5xl md:w-05 md:mb-3">
                {images[currentIndex].title}
              </h3>
              <h4 className="font-medium text-white mt-20 py-2 flex text-4xl">
                {images[currentIndex].length} Years
              </h4>
              <h4 className="font-medium text-4xl mb-6">Degree Program</h4>
            </div>
          </div>
        </div>
      )}

      <button
        className="absolute top-1/2 left-0 ml-10 transform  rounded-full focus:outline-none
        transition ease-in-out delay-150 duration-300 border border-white text-white p-4 
        hover:scale-150 backdrop-blur-sm"
        onClick={handlePrev}
      >
        <BsChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-0 mr-10 transform rounded-full focus:outline-none
        transition ease-in-out delay-150 duration-300 border border-white text-white p-4
        hover:scale-150 backdrop-blur-sm"
        onClick={handleNext}
      >
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Crousel;
