import React, { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { motion } from "framer-motion";

const Crousel = ({ images }) => {
  console.log(images);
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
        <div className="flex w-full h-400">
          <div className="w-500">
            <img
              src={images[currentIndex].img}
              alt="banner"
              className="h-[518px] w-full"
            />
          </div>
          <div className="flex flex-col w-500 justify-center items-start pl-20">
            <motion.div
              initial={{ x: -80 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="font-extrabold text-9xl"
            >
              {images[currentIndex].courseName}
            </motion.div>
            <h3 className="font-medium text-3xl w-96 mb-3">
              {images[currentIndex].title}
            </h3>
            <h4 className="font-medium text-maroon text-2xl pt-3">
              {images[currentIndex].length} Years
            </h4>
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
      )}

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
