import React from "react";
import Footer from "../../Home/footer/Footer";
import Middlebar from "../../Home/middleBar/Middlebar";
import Navbar from "../../Home/navigationBar/Navbar";
import Topheader from "../../Home/topHeader/Topheader";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

const FeeStructure = () => {
  return (
    <>
      <Topheader />
      <Middlebar />
      <Navbar />
      <section
        className="flex flex-col justify-start items-center w-full h-[150vh] lg:h-fit
      mt-20 text-center mb-[320px] md:-mb-[150px] "
      >
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1.5 }}
          className="text-3xl font-extrabold "
        >
          FEE STRUCTURE
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1.5 }}
          className="text-2xl font-medium pb-4"
        >
          First Step To Quality And Affordable Education
        </motion.h2>
        <div className="w-96 lg:w-[600px] h-[1px] bg-slate-400" />
        <div className={styles.tablecss}>
          <table border="1" bordercolor="#d1d1d1">
            <tr className="text-white bg-[#00683B] text-center">
              <th>PROGRAM</th>
              <th>ADMISSION FEE</th>
              <th>PER SEMESTER FEE</th>
            </tr>
            <tr className="text-white bg-[#6C0404]">
              <th colSpan={3}>DEPARTMENT OF BUSINESS ADMINISTRATION</th>
            </tr>
            <tr>
              <td>Master of Business Administration (MBA) 2 Years</td>
              <td>Rs 20,000</td>
              <td>Rs 72,000</td>
            </tr>
            <tr>
              <td>Bachelor of Business Administration (BBA) 4 Years</td>
              <td>Rs 10,000</td>
              <td>Rs 60,000</td>
            </tr>
            <tr>
              <td>Bachelor of Business Administration (BBA) 2 Years</td>
              <td>Rs 10,000</td>
              <td>Rs 60,000</td>
            </tr>
            <tr>
              <th colSpan={3} className="text-white bg-[#6C0404]">
                DEPARTMENT OF COMPUTER SCIENCE
              </th>
            </tr>
            <tr>
              <td>BS (Computer Science) 4 Years</td>
              <td>Rs 10,000</td>
              <td>Rs 60,000</td>
            </tr>
            <tr>
              <th colSpan={3} className="text-white bg-[#6C0404]">
                2 YEARS ASSOCIATE DEGREE PROGRAM
              </th>
            </tr>
            <tr>
              <td>Business & Commerce</td>
              <td>Rs 10,000</td>
              <td>Rs 60,000</td>
            </tr>
            <tr>
              <td>Database Management Systems</td>
              <td>Rs 10,000</td>
              <td>Rs 60,000</td>
            </tr>
            <tr>
              <td>Web Design and Development</td>
              <td>Rs 10,000</td>
              <td>Rs 60,000</td>
            </tr>
            <tr>
              <td>Computer Networking</td>
              <td>Rs 10,000</td>
              <td>Rs 60,000</td>
            </tr>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FeeStructure;
