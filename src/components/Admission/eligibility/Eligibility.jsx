import React from "react";
import Footer from "../../Home/footer/Footer";
import Middlebar from "../../Home/middleBar/Middlebar";
import Navbar from "../../Home/navigationBar/Navbar";
import Topheader from "../../Home/topHeader/Topheader";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

const Eligibility = () => {
  return (
    <>
      <Topheader />
      <Middlebar />
      <Navbar />
      <section
        className="flex flex-col justify-start items-center w-900 m-auto  
       text-center mt-[100px] mb-20 overflow-scroll"
      >
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1.5 }}
          className="text-3xl font-extrabold "
        >
          ELIGIBILITY CRITERIA
        </motion.h1>

        <div className="w-96 lg:w-[600px] h-[1px] bg-slate-400" />
        <div className={styles.tablecss}>
          <table border="1" bordercolor="#d1d1d1">
            <tr className="text-white bg-[#00683B] text-center">
              <th>PROGRAM</th>
              <th>YEAR</th>
              <th>SEMESTERS</th>
              <th>CREDIT HOURS</th>
              <th>ELIGIBILITY CRITERIA</th>
            </tr>
            <tr className="text-white bg-[#6C0404]">
              <th colSpan={5}>DEPARTMENT OF BUSINESS ADMINISTRATION</th>
            </tr>
            <tr>
              <td>Master of Business Administration(MBA)</td>
              <td>2 Years</td>
              <td>4 Semesters</td>
              <td>66 Cr.Hrs</td>
              <td>
                <li>
                  At least 16 years of formal non-business education or the
                  applicants holding the following degrees or equivalent:
                </li>
                <li>
                  MA, MSc, BE, BS, MBBS, B-Pharm or equivalent with at least 2.5
                  CGPA in last degree or 60% marks. Admission process consists
                  of an entry test along with interview.
                </li>
                <li>At least 50% marks in EIMS Entrance Test</li>
              </td>
            </tr>
            <tr>
              <td>Master of Business Administration(MBA)</td>
              <td>2 Years </td>
              <td>4 Semesters</td>
              <td>36 Cr.Hrs</td>
              <td>
                <li>
                  At least 16 years of formal education and business degree
                  holders like BBA (Hons) or equivalent with at least 2.5 CGPA
                  in last degree or 60% marks.
                </li>
                <li>
                  Admission process consists of an entry test along with
                  interview.
                </li>
                <li>At least 50% marks in EIMS Entrance Test</li>
              </td>
            </tr>
            <tr>
              <td>Bachelor of Business Administration(BBA)</td>
              <td>4 Years</td>
              <td>8 Semesters</td>
              <td>144 Cr.Hrs</td>
              <td>
                <li>
                  Intermediate or an equivalent examination with minimum 45%
                  marks; or
                </li>
                <li>
                  A-Level with minimum 3 passes in principal subjects (IBCC
                  equivalence required); and
                </li>
                <li>At least 50% marks in EIMS Entrance Test</li>
              </td>
            </tr>
            <tr>
              <td>Bachelor of Business Administration(BBA)</td>
              <td>2 Years</td>
              <td>4 Semesters</td>
              <td>166 - 90 Cr.Hrs</td>
              <td>
                <li>Bachelors Degree (14 Years Education) with 50% marks</li>
              </td>
            </tr>
            <tr>
              <th colSpan={5} className="text-white bg-[#6C0404]">
                DEPARTMENT OF COMPUTER SCIENCE
              </th>
            </tr>
            <tr>
              <td>BS (Computer Science)</td>
              <td>4 Years</td>
              <td>8 Semesters</td>
              <td>132 Cr.Hrs</td>
              <td>
                <li>
                  Intermediate with Mathematics and Physics or an equivalent
                  examination with minimum 50% marks; or
                </li>
                <li>
                  A-Level with minimum 3 passes in principal subjects (IBCC
                  equivalence required); and
                </li>
                <li>At least 50% marks in EIMS Entrance Test</li>
              </td>
            </tr>
            <tr>
              <th colSpan={5} className="text-white bg-[#6C0404]">
                2 YEARS ASSOCIATE DEGREE PROGRAM
              </th>
            </tr>
            <tr>
              <td>Business & Commerce</td>
              <td>2 Years</td>
              <td>4 Semesters</td>
              <td>66 Cr.Hrs</td>
              <td>
                <li>
                  Intermediate or an equivalent examination with 45% marks
                </li>
              </td>
            </tr>
            <tr>
              <td>Computer Science</td>
              <td>2 Years</td>
              <td>4 Semesters</td>
              <td>69 Cr.Hrs</td>
              <td>
                <li>
                  Intermediate or an equivalent examination with 45% marks
                </li>
              </td>
            </tr>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Eligibility;
