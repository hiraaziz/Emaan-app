import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { motion } from "framer-motion";
import {
  FcAcceptDatabase,
  FcBullish,
  FcTemplate,
  FcPositiveDynamic,
  FcCommandLine,
  FcMindMap,
} from "react-icons/fc";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const itemlist = [
  {
    img: "./administration.png",
    courseName: "Associate Degree Program",
    courseLength: "Bachleors of Business Administration",
    icon: <FcBullish className="w-10 h-10" />,
  },
  {
    img: "./commerce.png",
    courseName: "Associate Degree Program",
    courseLength: "Business and Commerce",
    icon: <FcPositiveDynamic className="w-10 h-10" />,
  },
  {
    img: "./network.png",
    courseName: "Associate Degree Program",
    courseLength: "Computer Networking",
    icon: <FcMindMap className="w-10 h-10" />,
  },
  {
    img: "./webdesign.png",
    courseName: "Associate Degree Program",
    courseLength: "Web Design and Development",
    icon: <FcTemplate className="w-10 h-10" />,
  },
  {
    img: "./database.png",
    courseName: "Associate Degree Program",
    courseLength: "Database Management",
    icon: <FcAcceptDatabase className="w-10 h-10" />,
  },
  {
    img: "./computer.png",
    courseName: "Bachleors of Science in Computer Science",
    courseLength: "4 years degree program",
    icon: <FcCommandLine className="w-10 h-10" />,
  },
];

const Programs = () => {
  return (
    <div className="flex flex-col justify-center items-center w-900 mt-20 mb-20 m-auto ">
      <div className="mb-16">
        <motion.div
          initial={{ x: -80 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="font-bold text-4xl mb-1 "
        >
          ACADEMIC PROGRAMS
        </motion.div>
        <div className="bg-maroon w-96 h-1 ml-4"></div>
      </div>
      <AliceCarousel
        mouseTracking
        autoPlay
        autoPlayInterval={"3000"}
        responsive={responsive}
        controlsStrategy="alternate"
        setHeight={true}
      >
        {itemlist.map((item) => (
          <div className=" w-800 drop-shadow-xl bg-white flex flex-col justify-start items-center">
            <img src={item.img} data-value="1" />
            <div className="flex justify-center items-center space-x-4 p-10 w-full h-12">
              {item.icon}
              <div className="flex flex-col justify-center font-medium text-sm tracking-wide">
                <h1>{item.courseName}</h1>
                <h1 className="text-maroon">{item.courseLength}</h1>
              </div>
            </div>
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
};

export default Programs;
