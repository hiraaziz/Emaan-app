import React from "react";
import { BsEye } from "react-icons/bs";
import { CiTrophy } from "react-icons/ci";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section className="flex flex-col items-center justify-between min-h-full  md:flex-row md:justify-center md:items-center w-full bg-slate-50 py-20">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="flex flex-col justify-center w-full md:w-400 px-8"
      >
        <h1 className="font-bold text-2xl tracking-wider mb-8">
          Welcome To{" "}
          <p className="font-black text-5xl text-maroon">Emaan Institue</p>
        </h1>
        <p className="font-normal  w-900">
          EMAAN INSTITUTE OF MANAGEMENT & SCIENCES (EIMS) has been established
          via Sindh Act No: XXXV of 2018 and recognized by HEC (Higher Education
          Commission) as Degree Awarding Institute. EMAAN INSTITUTE OF
          MANAGEMENT & SCIENCES (EIMS) has been established for creating leaders
          and developing the best professionals in every arena of life. It is
          our motto to impart the best quality education to the people of
          Pakistan.
        </p>
      </motion.div>
      <div className=" hidden md:block bg-maroon h-96 w-px rounded-full "></div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="flex flex-col w-full md:w-400 px-8 space-y-8"
      >
        <div className="flex flex-col">
          <div className="flex items-center space-x-6  text-maroon">
            <BsEye className="w-14 h-14" />
            <h1 className="font-extrabold text-3xl">OUR VISION</h1>
          </div>
          <p className="font-normal">
            Provide superior undergraduate and graduate programs that are
            technology-enriched and responsive to the needs of students and the
            evolving workplace. Prepare young people to find their place in the
            world..
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center space-x-6  text-maroon">
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
      </motion.div>
    </section>
  );
};

export default Vision;
