import React, { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { motion } from "framer-motion";

const Crousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="flex w-full h-400">
        <div className="w-500">
          <img
            src={images[currentIndex]}
            alt="banner"
            className="h-[518px] w-full"
          />
        </div>
        <div className="flex flex-col w-500 justify-center items-start pl-20">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="font-extrabold text-9xl"
          >
            BBA
          </motion.div>
          <h3 className="font-medium text-3xl w-96 mb-3">
            Bachelors of Business Administration
          </h3>
          <h4 className="font-medium text-maroon text-xl pt-3">4 & 2 Years</h4>
          <h4 className="font-medium text-3xl mb-6">Degree Program</h4>
          <p className="font-bold text-maroon text-xl border-4 p-3 rounded-lg mb-6 border-maroon">
            Morning / Evening
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

      <button
        className="absolute top-1/2 left-0 ml-10 transform  rounded-full focus:outline-none
        transition ease-in-out delay-150 duration-300 border border-black p-4 
        hover:scale-150 backdrop-blur-sm"
        onClick={handlePrev}
      >
        <BsChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-0 mr-10 transform rounded-full focus:outline-none
        transition ease-in-out delay-150 duration-300 border border-black p-4
        hover:scale-150 backdrop-blur-sm"
        onClick={handleNext}
      >
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Crousel;
