import React from "react";
import LinksRight from "../LinksRight";
import Footer from "../../Home/footer/Footer";
import Middlebar from "../../Home/middleBar/Middlebar";
import Navbar from "../../Home/navigationBar/Navbar";
import Topheader from "../../Home/topHeader/Topheader";
import { motion } from "framer-motion";
import AccordionCard from "./AccordionCard";
import { ChakraProvider } from "@chakra-ui/react";

const Cs = () => {
  return (
    <>
      <Topheader />
      <Middlebar />
      <Navbar />
      <section className="flex flexcol lg:flex-row w-full mt-20 mb-20">
        <div className="basis-4/5 flex flex-col items-start lg:items-start">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1.5 }}
            viewport={{ once: true }}
            className="w-700 ml-10 text-2xl md:text-3xl font-medium  text-maroon"
          >
            Bachelor of Computer Science
            <div className="max-w-96 lg:w-96 h-[2px] bg-maroon mb-8" />
          </motion.h1>
          <div
            className="w-full flex flex-col items-center px-4 space-y-4 
          lg:space-y-0 lg:flex-row lg:justify-evenly"
          >
            <div
              className="flex flex-col w-[330px] md:w-[600px] bg-slate-100 p-4 justify-between 
            space-y-4 rounded-md shadow-lg"
            >
              <img
                src={"/cs2.png"}
                alt="compscience"
                className="w-[350px] h-[200px] md:w-[600px] md:h-[350px] rounded-md shadow-lg"
              />
              <div>
                <h1 className="font-semibold text-xl tracking-wider text-maroon">
                  Overview of the program
                </h1>
                <p className="text-sm text-justify py-4">
                  EIMS has developed the Computer Science Program with the
                  primary intention to develop the students’ lateral
                  professional thinking and intuitive skills. The curriculum has
                  been formulated with a balanced mixture of theory and
                  practical experiences at initial and advanced level to equip
                  the graduates with professional core competencies so that they
                  can cater to the challenging needs of corporate sector of
                  computer science in national and global scenario.
                  Consequently, the graduate will be able to achieve the
                  significant positions in both private and public sector
                  organizations at development and planning levels. In short,
                  graduates will be able to assimilate the following outcomes as
                  a basis of a successful academic Program in Computer Science.
                </p>
              </div>
            </div>
            <div
              className="w-[330px] bg-slate-100 p-4 justify-between self-start
            space-y-4 rounded-md shadow-lg md:w-[500px] m-auto"
            >
              <h1 className="font-semibold text-xl tracking-wider text-maroon">
                LEARNING OUTCOMES
              </h1>
              <ul className="text-sm text-justify py-4">
                <li>
                  1. The Program will incorporate deep insight via introducing
                  concepts, theory, and techniques.
                </li>
                <li>
                  2. Intensive education/training in focused areas of Computer
                  Science
                </li>
                <li>
                  3. The Program will galvanize students to develop and use
                  abstract models in addition to apply respective technology in
                  practical situations.
                </li>
                <li>
                  4. Computer Science graduates require special communication
                  skills both orally and in writing. They will be able to
                  produce well-organized reports, which clearly delineate
                  objectives, methods of solution, results, and conclusions for
                  a complex task.
                </li>
                <li>
                  5. The Program has been designed to provide formal foundations
                  for higher learning.
                </li>
                <li>
                  6. The Program is dynamic and flexible enough to maintain
                  currency with the latest scientific and technological
                  developments in the field.
                </li>
                <li>
                  7. The Program has been formulated in order to provide
                  professional orientation to prepare students for industry.
                </li>
              </ul>
            </div>
          </div>
          <ChakraProvider>
            <AccordionCard />
          </ChakraProvider>
          <button className="m-auto px-6 py-2 bg-maroon text-white rounded-md mt-10">
            Apply Now
          </button>
        </div>
        <div className="basis-1/5 ">
          <LinksRight />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cs;
