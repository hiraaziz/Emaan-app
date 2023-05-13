import React from "react";
import Footer from "../../Home/footer/Footer";
import Middlebar from "../../Home/middleBar/Middlebar";
import Topheader from "../../Home/topHeader/Topheader";
import { motion } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";
import AccordionCard from "./AccordionCard";
import LinksRight from "../LinksRight";
import NavMenu from "../../Home/navigationBar/NavMenu";

export const Web = () => {
  return (
    <>
      <Topheader />
      <Middlebar />
      <NavMenu />
      <section className="flex flexcol lg:flex-row w-full mt-20 mb-20">
        <div className="basis-4/5 flex flex-col items-start lg:items-start">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1.5 }}
            viewport={{ once: true }}
            className="w-700 ml-10 text-2xl md:text-3xl font-medium  text-maroon"
          >
            ADP Web Design and Developemnt
            <div className="max-w-96 lg:w-96 h-[2px] bg-maroon mb-8" />
          </motion.h1>
          <div
            className="w-full flex flex-col items-center px-2 space-y-4 
          lg:space-y-0 lg:flex-row lg:justify-evenly"
          >
            <div
              className="flex flex-col w-[330px] md:w-[450px] bg-slate-100 p-4 justify-between 
            space-y-4 rounded-md shadow-lg"
            >
              <img
                src={"/commerce1.png"}
                alt="mba"
                className="w-[300px] h-[200px] md:w-[600px] md:h-[350px] rounded-md shadow-lg"
              />
              <div>
                <h1 className="font-semibold text-xl tracking-wider text-maroon">
                  Program Introduction
                </h1>
                <p className="text-sm text-justify py-4">
                  The Associate Degree in Business & Commerce is a regular
                  2-year degree program which has been designed to equip the
                  students with adequate knowledge and skills which would help
                  them taking an early start of their professional career so
                  that they can earn their livings and support their families
                  too. Note: The students, after obtaining the degree may
                  continue their studies towards BBA (4-year) program and the
                  relevant qualified courses will be exempted / transferred,
                  accordingly.
                </p>
              </div>
            </div>
            <div
              className="w-[330px] bg-slate-100 p-4 justify-between 
            space-y-4 rounded-md shadow-lg md:w-[500px]"
            >
              <img
                src={"/commerce2.png"}
                alt="mba"
                className="w-[300px] h-[200px] md:w-[600px] md:h-[420px] rounded-md shadow-lg"
              />
              <h1 className="font-semibold text-xl tracking-wider text-maroon">
                Program Objectives
              </h1>
              <p className="text-sm text-justify py-4">
                Following are the objectives of this program:
                <li>
                  To equip the candidates with fundamental principles of
                  commerce.
                </li>
                <li>
                  To facilitate incremental building of knowledge to cope with
                  the needs of public and private sector.
                </li>
              </p>
            </div>
          </div>
          <ChakraProvider>
            <AccordionCard />
          </ChakraProvider>
          <button className="m-auto px-6 py-2 bg-maroon text-white rounded-md mt-10">
            Apply Now
          </button>
        </div>
        <div className="basis-1/5 hidden lg:block">
          <LinksRight />
        </div>
      </section>
      <Footer />
    </>
  );
};
