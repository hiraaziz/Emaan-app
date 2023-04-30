import React from "react";
import Footer from "../../Home/footer/Footer";
import Middlebar from "../../Home/middleBar/Middlebar";
import NavMenu from "../../Home/navigationBar/NavMenu";
import Topheader from "../../Home/topHeader/Topheader";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const AdmissionPolicy = () => {
  return (
    <>
      <Topheader />
      <Middlebar />
      <NavMenu />
      <div className="w-full my-24  flex flex-col items-center justify-evenly">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1.5 }}
          viewport={{ once: true }}
          className="w-700 justify-self-start text-2xl md:text-3xl font-medium text-maroon"
        >
          ADMISSION PROCEDURE
          <div className="w-20 h-[2px] bg-maroon mb-8" />
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1.5 }}
          viewport={{ once: true }}
          className="w-700  tracking-normal md:tracking-wide text-justify"
        >
          <h2 className="text-lg md:text-xl font-bold py-4 underline">
            PROCEDURES AND CRITERIA OF ADMISSION
          </h2>
          <p className="  text-sm leading-normal md:leading-loose tracking-normal md:tracking-wide">
            Admissions will be advertised in the leading newspapers before
            commencement of the semester.
            <br />{" "}
            <strong>
              Interested Applicants may apply online or they can visit our
              Admission Office at Emaan Institute of Management & Sciences in
              order to collect Admission Form.
            </strong>
            <br /> All candidates will be required to appear in the
            Aptitude/Admission Entry Test and secure minimum 50% marks in the
            test.
            <br /> Then they will appear before the Interview Panel. If the
            students secure aggregate of 50% in the Admission Test, Interview
            and Previous Academic Record, they will qualify for getting
            admission in Emaan Institute of Management and Sciences (EIMS).
            <br />
            <strong className="text-lg underline">SELECTION</strong>
            <br />
            The final selection of a candidate depends on the combined rating of
            the above factors.
            <br />
            <strong className="text-lg underline">APTITUDE TEST </strong>
            <br />
            All applications will be sorted out and assessed on basis of
            eligibility criteria for shortlisting purpose. Candidates’ last
            qualification will be properly checked. It will be checked whether a
            candidate has submitted all important testimonials or not.
            Applicants will be required to take the Aptitude Test irrespective
            of their previous system of education, which provides a fair measure
            of the candidates’ scholastic attainment as well as an insight into
            their potential. The test assesses applicants’ skills in the
            following areas:
            <br />
            <ol>
              <li>1. English</li>
              <li>2. Mathematics</li>
              <li>3. General Knowledge</li>
              <li>4. I.T</li>
            </ol>
            Have gone through the test, the students will be asked to
            participate in group discussion so that his/her interpersonal skills
            can be checked. After that the candidate will be interviewed in
            order to judge his/her I.Q, present-mindedness, convincing power and
            communication skills.
          </p>
        </motion.div>
        <div
          className="w-700 flex justify-center items-center h-24 bg-maroon 
        text-white text-xl md:text-2xl font-semibold mt-10"
        >
          DOCUMENTS REQUIRED FOR ADMISSION
        </div>
        <div className={styles.tablecss}>
          <table border="1" bordercolor="#d1d1d1">
            <tr>
              <th colSpan={2}>
                Candidates granted admissions are required to submit the
                following documents for registration and enrollment. Failing
                which admission will be cancelled.
              </th>
            </tr>
            <tr>
              <td>Matric / O Level Certificate</td>
              <td>Attested Photocopy</td>
            </tr>
            <tr>
              <td>Intermediate / A Level Certificate</td>
              <td>Attested Photocopy</td>
            </tr>
            <tr>
              <td>Intermediate Mark sheet</td>
              <td>Attested Photocopy</td>
            </tr>
            <tr>
              <td>
                Bachelors’ Degree & Marksheet (For Master’s Degree Programs
                only)
              </td>
              <td>Attested Photocopy</td>
            </tr>
            <tr>
              <td>C.N.I.C. or Birth Certificate or B. Form</td>
              <td>Attested Photocopy</td>
            </tr>
            <tr>
              <td>
                Migration Certificate (for Student other than Karachi Board)
              </td>
              <td> Original</td>
            </tr>
            <tr>
              <td>Equivalence Certificate (A Level)</td>
              <td> Original</td>
            </tr>
            <tr>
              <td>Four recent Passport size photographs</td>
              <td>Attested on Back side</td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdmissionPolicy;
