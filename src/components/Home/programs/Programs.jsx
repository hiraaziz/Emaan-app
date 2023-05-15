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
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const itemlist = [
  {
    img: "./business.jpg",
    courseName: "Associate Degree Program",
    courseLength: "Bachleors of Business Administration",
    icon: <FcBullish className="w-10 h-10" />,
  },
  {
    img: "./commerces.jpg",
    courseName: "Associate Degree Program",
    courseLength: "Business and Commerce",
    icon: <FcPositiveDynamic className="w-10 h-10" />,
  },
  {
    img: "./networks.jpg",
    courseName: "Associate Degree Program",
    courseLength: "Computer Networking",
    icon: <FcMindMap className="w-10 h-10" />,
  },
  {
    img: "./webdesigns.jpg",
    courseName: "Associate Degree Program",
    courseLength: "Web Design and Development",
    icon: <FcTemplate className="w-10 h-10" />,
  },
  {
    img: "./databases.jpg",
    courseName: "Associate Degree Program",
    courseLength: "Database Management",
    icon: <FcAcceptDatabase className="w-10 h-10" />,
  },
  {
    img: "./computers.jpg",
    courseName: "Bachleors of Science in Computer Science",
    courseLength: "4 years degree program",
    icon: <FcCommandLine className="w-10 h-10" />,
  },
];

const Programs = () => {
  return (
    <div className="h-[600px] mb-[120px]  flex flex-col items-center w-[70%] m-auto ">
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1.5 }}
          className="font-bold text-4xl mb-1 "
        >
          ACADEMIC PROGRAMS
        </motion.div>
        <div className="bg-maroon w-48 md:w-96 h-1 ml-4"></div>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
      >
        {itemlist.map((item) => (
          <SwiperSlide>
            <div
              className="swiper-slide w-[400px] h-[400px]  drop-shadow-xl bg-white flex flex-col justify-start items-center
           hover:scale-105 transition-all duration-200 overflow-hidden hover:shadow-lg"
            >
              <img
                src={item.img}
                data-value="1"
                className="w-full h-52  hover:scale-110 transition-all duration-300 cover"
              />
              <div className="flex justify-center items-start space-x-4 pt-8 md:p-6 w-full h-12 ">
                {item.icon}
                <div className="flex flex-col w-full justify-center font-medium text-sm tracking-wide">
                  <h1 className="text-sm">{item.courseName}</h1>
                  <h1 className="text-maroon">{item.courseLength}</h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Programs;
