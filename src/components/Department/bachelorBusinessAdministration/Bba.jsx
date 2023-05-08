import React from "react";
import LinksRight from "../LinksRight";
import Footer from "../../Home/footer/Footer";
import Middlebar from "../../Home/middleBar/Middlebar";
import NavMenu from "../../Home/navigationBar/NavMenu";
import Topheader from "../../Home/topHeader/Topheader";
import { motion } from "framer-motion";
import AccordionCard from "./AccordionCard";
import { ChakraProvider } from "@chakra-ui/react";

const Bba = () => {
  return (
    <>
      <Topheader />
      <Middlebar />
      <NavMenu />
      <section className="flex flexcol lg:flex-row w-full mt-20 mb-20">
        <div className="basis-4/5 flex flex-col items-start">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1.5 }}
            viewport={{ once: true }}
            className="w-700 ml-10 text-2xl md:text-3xl font-medium  text-maroon"
          >
            Bachelor of Business Administration
            <div className="max-w-96 lg:w-96 h-[2px] bg-maroon mb-8" />
          </motion.h1>
          <div
            className="w-full flex flex-col items-center lg:px-2 space-y-4 
          lg:space-y-0 lg:flex-row lg:justify-evenly"
          >
            <div
              className="flex flex-col w-[300px] md:w-[550px] bg-slate-100 justify-between 
            space-y-4 rounded-md shadow-lg p-4"
            >
              <img
                src={"/bba.png"}
                alt="compscience"
                className="w-[350px] h-[200px] md:w-[500px] md:h-[500px] rounded-md shadow-lg"
              />
              <div>
                <h1 className="font-semibold text-xl tracking-wider text-maroon">
                  Introduction
                </h1>
                <p className="text-sm text-justify py-4">
                  The Bachelor of Business Administration (BBA) is a four years’
                  degree program that offers the fundamental concepts required
                  in today’s business world. The program is tailored around the
                  basic areas of business, management, economics, marketing,
                  accounting, and finance. It trains students to develop an
                  understanding and appreciation of the global business
                  environment. Furthermore, the students will be guided by high
                  ethical standards to operate in the local business
                  environment. A distinctive feature of the BBA program is that
                  it incorporates within the curriculum major an emphasis on the
                  development of students’ fundamental learning skills, for
                  example: reasoning and quantitative abilities; as well as
                  communication and computing skills which they will need for
                  responsible leadership roles in their careers.
                </p>
              </div>
            </div>
            <div
              className="w-[300px] bg-slate-100 p-4 justify-between self-start
            space-y-4 rounded-md shadow-lg md:w-[540px] m-auto"
            >
              <h1 className="font-semibold text-xl tracking-wider text-maroon">
                Program Objectives
              </h1>
              <ul className="text-sm text-justify py-4">
                <p>
                  The EIMS objectives specify the intellectual and behavioral
                  competencies that graduates should possess and that provide a
                  foundation for their future professional and personal
                  development and success. Learning goals are general
                  statements, so a number of measurable program objectives are
                  also established for each goal.
                </p>
                <li>
                  1. Critical Thinking and Decision Making:
                  <p>
                    Learning Outcome: Graduates must be able to use analytical
                    and reflective thinking techniques to identify and analyze
                    problems, develop viable alternatives, make effective
                    decisions and apply appropriate quantitative and qualitative
                    techniques in solving business problems.
                  </p>
                </li>
                <li>
                  2. Effective Communication Skills:
                  <p>
                    Learning Outcome: Graduates must be able to draft effective
                    business documents and prepare and deliver effective oral
                    business presentations using a variety of appropriate
                    technologies.
                  </p>
                </li>
                <li>
                  3. Ethics and Sustainability:
                  <p>
                    Learning Outcome: Graduates must be able to identify and
                    analyze ethical conflicts and sustainability issues
                    involving different stakeholders in order to develop viable
                    alternatives and make effective decisions relating to
                    business ethics and sustainability.
                  </p>
                </li>
                <li>
                  4. Core Business Knowledge and Competence:
                  <p>
                    Learning Outcome: Graduates must be able to demonstrate
                    competency in the underlying concepts, theory and tools
                    taught in the core undergraduate curriculum.
                  </p>
                </li>
                <li>
                  5. TEffective Teamwork and Leadership Skills:
                  <p>
                    Learning Outcome: Graduates must be able to work effectively
                    in teams and understand group processes, leadership,
                    conflict, power and culture in organizations.
                  </p>
                </li>
                <li>
                  6. Industry Focus:
                  <p>
                    Learning Outcome: Graduates must be able to understand the
                    dynamics of local industry and understand business as an
                    integrated system and apply strategic planning tools to
                    coordinate among the functional areas.
                  </p>
                </li>
                <li>
                  7. Global Perspective (Internationalization):
                  <p>
                    Learning Outcome: Graduates must be able to identify and
                    analyze relevant global factors that influence
                    decision-making and develop viable alternatives and make
                    effective decisions in an international business setting.
                  </p>
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

export default Bba;
