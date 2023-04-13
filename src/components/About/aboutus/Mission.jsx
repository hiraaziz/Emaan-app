import React from "react";
import { BsEye } from "react-icons/bs";
import { CiTrophy } from "react-icons/ci";
import { motion } from "framer-motion";

const Mision = () => {
  return (
    <section className="flex flex-col items-center justify-between min-h-full md:flex-row md:justify-center md:items-center w-full py-20">
      <div className="flex flex-col justify-center w-full md:w-400 px-8 border-r-2 border-red-800">
        <div className="flex items-center space-x-6 text-maroon">
          <BsEye className="w-14 h-14" />
          <h1 className="font-extrabold text-3xl">OUR VISION</h1>
        </div>
        <p className="font-normal">
          We believe that curiosity is at the heart of every academic pursuit.
          A desire to learn, the courage to question and a passion for
          discovery are present in everything we do. We encourage students to
          dream, to think critically, creatively, and insightfully, and we
          engage in their own lives, their communities, and the world.
        </p>
      </div>
      <div className="flex flex-col w-full md:w-400 px-8 space-y-8">
        <div className="flex flex-col">
          <div className="flex items-center space-x-6 text-maroon">
            <CiTrophy className="w-14 h-14" />
            <h1 className="font-extrabold text-3xl">OUR MISSION</h1>
          </div>
          <p className="font-normal">
            We believe that curiosity is at the heart of every academic pursuit.
            A desire to learn, the courage to question and a passion for
            discovery are present in everything we do. We encourage students to
            dream, to think critically, creatively, and insightfully, and we
            engage in their own lives, their communities, and the world.
          </p>
        </div>
      </div>
    </section>
  );
};


export default Mision;


