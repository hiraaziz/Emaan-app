import React from "react";
import Footer from "../../Home/footer/Footer";
import Middlebar from "../../Home/middleBar/Middlebar";
import Navbar from "../../Home/navigationBar/Navbar";
import Topheader from "../../Home/topHeader/Topheader";
import { motion } from "framer-motion";

const Scholarship = () => {
  return (
    <section>
      <Topheader />
      <Middlebar />
      <Navbar />
      <div className="w-full my-24  flex flex-col items-center justify-evenly">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1.5 }}
          viewport={{ once: true }}
          className="w-700 justify-self-start text-2xl md:text-3xl font-medium text-maroon"
        >
          SCHOLARSHIP POLICY
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
            NEED CUM MERIT SCHOLARSHIP
          </h2>
          <h3 className="font-semibold text-lg py-4">
            10 % of the students’ will be awarded “Scholarship”.
          </h3>
          <p className="text-sm leading-normal md:leading-loose tracking-normal md:tracking-wide">
            No student is denied admission to the Institute due to any financial
            constraints, he/she may be suffering from.
            <br />
            On application for need cum merit scholarship, a certain procedure
            for assessment is undertaken (which includes the parent / guardians
            salary / income, type and size of residence, utility bills, number
            of dependents, consideration for a single parent and such other
            parameters as the committee may think fit to consider), after which
            the percentage of need cum merit scholarship is decided. Strict
            confidentiality is maintained, ensuring the self-respect of the
            applicant. Only the deserving students admitted will be able to
            avail this facility{" "}
            <strong>
              EMAAN INSTITUTE OF MANAGEMENT & SCIENCES Scholarship
            </strong>{" "}
            is strictly tied to the good results and overall positive attitude
            and discipline of the students.
          </p>
          <h3 className="font-semibold text-md py-4">
            Withdrawal of need cum merit scholarship
          </h3>
          <p className="text-sm leading-normal md:leading-loose tracking-normal md:tracking-wide">
            If a student does not perform satisfactorily in either academics or
            discipline, the scholarship facility may be withdrawn with immediate
            effect.
          </p>
          <h3 className="font-semibold text-md py-4">
            Powers to Grant, Refuse or Withdraw need cum merit scholarship
          </h3>
          <p className=" text-sm leading-normal md:leading-loose tracking-normal md:tracking-wide">
            The decision to grant, refuse or withdraw fee endowment will lie
            with the{" "}
            <span>
              EMAAN INSTITUTE OF MANAGEMENT & SCIENCES Scholarship Award
              Committee.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1.5 }}
          viewport={{ once: true }}
          className="w-700 leading-loose tracking-normal md:tracking-wide text-justify"
        >
          <h2 className="text-lg md:text-xl font-bold tracking-wider py-4 underline">
            MERIT SCHOLARSHIPS
          </h2>
          <h3 className="font-semibold text-md py-4">
            Criteria for 1st semester
          </h3>
          <p className=" text-sm leading-normal md:leading-loose tracking-normal md:tracking-wide">
            All Position Holders for the First 3 Positions declared in the
            HSC/B.Com/BSC/BA/BBA or equivalent will be given 100% Scholarship of
            their Tuition Fee.
          </p>
          <h3 className="font-semibold text-md py-4">
            Criteria from 2nd semester to onward
          </h3>
          <p className="text-sm leading-normal md:leading-loose tracking-normal md:tracking-wide">
            {" "}
            This facility will be awarded to those students, on a semester
            basis, who meet the scholarship criteria for admission
          </p>
          <li className=" text-sm leading-normal md:leading-loose tracking-normal md:tracking-wide">
            The scholarships will cover the tuition fee.
          </li>
          <li className="text-sm leading-normal md:leading-loose tracking-normal md:tracking-wide">
            There shall be 01 scholarship per semester and will be offered to
            the highest GPA holder of the Batch, who must have achieved the
            following criteria:
          </li>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            duration: 1.5,
          }}
          viewport={{ once: true }}
          className="w-700 leading-loose tracking-normal md:tracking-wide text-justify"
        >
          <h2 className="text-lg md:text-xl font-bold tracking-wider py-4 underline">
            FORMS OF SCHOLARSHIP
          </h2>
          <p className="text-sm leading-normal md:leading-loose tracking-normal md:tracking-wide">
            The above scholarship could be either in the form of fee waiver or
            else the students should be given an option to attend corporate
            training workshops at any renowned Institute or such other bodies as
            this will add to their professional vision and competence. In case
            the student opts for such a workshop, the following conditions will
            apply:
          </p>
          <li className="text-sm leading-normal md:leading-loose tracking-normal md:tracking-wide">
            The cost of the workshop should not exceed the amount of the
            scholarship.
          </li>
          <li className="text-sm leading-normal md:leading-loose tracking-normal md:tracking-wide">
            Where the cost of the workshop is higher than the scholarship
            amount, the student will pay the difference.
          </li>
          <li className="text-sm leading-normal md:leading-loose tracking-normal md:tracking-wide">
            If a student can attend more than the one workshop within the
            scholarship amount, he / she may be permitted to do so.
          </li>
          <li className="text-sm leading-normal md:leading-loose tracking-normal md:tracking-wide">
            The scholarship amount will not accumulate over the semesters.
            Students may have the option of opting for a combination of
            attending a workshop and for partial adjustment of the remaining
            scholarship amount towards the tuition fee.
          </li>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};

export default Scholarship;
