import React from "react";
import LinksRight from "../LinksRight";
import Footer from "../../Home/footer/Footer";
import Middlebar from "../../Home/middleBar/Middlebar";
import Navbar from "../../Home/navigationBar/Navbar";
import Topheader from "../../Home/topHeader/Topheader";
import { motion } from "framer-motion";
import AccordionCard from "./AccordionCard";
import { ChakraProvider } from "@chakra-ui/react";

const Mba = () => {
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
            MASTER OF BUSINESS ADMINISTRATION
            <div className="max-w-96 lg:w-96 h-[2px] bg-maroon mb-8" />
          </motion.h1>
          <div
            className="w-full flex flex-col items-center px-2 space-y-4 
          lg:space-y-0 lg:flex-row lg:justify-evenly"
          >
            <div
              className="flex flex-col w-[330px] md:w-[600px] bg-slate-100 p-4 justify-between 
            space-y-4 rounded-md shadow-lg"
            >
              <img
                src={"/MBA33.jpg"}
                alt="mba"
                className="w-[300px] h-[200px] md:w-[600px] md:h-[350px] rounded-md shadow-lg"
              />
              <div>
                <h1 className="font-semibold text-xl tracking-wider text-maroon">
                  Overview of the program
                </h1>
                <p className="text-sm text-justify py-4">
                  The MBA program at Emaan Institute of Management and Sciences
                  (EIMS) is a rigorous 2 year degree Program encompassing
                  numerous facets of business and management, enabling students
                  to attain core knowledge of fundamental business concepts. The
                  Program hones students’ ability to develop analytical and
                  problem solving skills. With a long-standing history of
                  academic excellence, the MBA provides an extensive, worthwhile
                  experience unmatched by any other institution of similar
                  caliber.
                </p>
              </div>
            </div>
            <div
              className="w-[330px] bg-slate-100 p-4 justify-between 
            space-y-4 rounded-md shadow-lg md:w-[500px]"
            >
              <h1 className="font-semibold text-xl tracking-wider text-maroon">
                Introduction of the Program
              </h1>
              <p className="text-sm text-justify py-4">
                The Full Time MBA (Master of Business Administration) is our
                flagship, unique, exclusive and designed for the academically,
                socially and interpersonally competitive students from all over
                Pakistan, and beyond. The pattern, rigor, processes and
                benchmarks of this MBA program are developed by keeping the
                global standards in mind. With quality intake assessed on
                multiple components, this MBA differentiates itself from other
                programs all over Pakistan. Leading academicians and corporate
                leaders are the custodians and mentors of the courses taught in
                this MBA. The courses represent diversity and corporate
                relevance. Courses are taught through innovative teaching
                methodologies by one of the finest faculty in the country.
                Assessments are done through various methods such as case
                studies, problem based learning, labs and simulations. Students
                are motivated to work in groups from day one, and trained to
                accept the complexities of the real life situations. Our
                graduates will not only be placed in top organizations of
                Pakistan, but also worldwide. The program enables students to
                think globally. Foreign faculty is invited on a regular basis to
                give a global perspective on corporate situations. Students are
                also motivated and facilitated to travel internationally and
                gain exposure and experience necessary during MBA. The quality
                intake, exclusivity, intense and rigorous learning experience,
                international exposure and efficient corporate jobs placements
                make this MBA different, unique and the first choice for
                students all over Pakistan.
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

export default Mba;
