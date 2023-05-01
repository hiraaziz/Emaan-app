import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
const AccordionCard = () => {
  return (
    <Accordion
      allowToggle
      className="m-auto mt-10 w-[200px] md:w-[400px] lg:w-[1100px] flex  flex-wrap justify-evenly py-10"
    >
      <AccordionItem className="w-[480px] h-fit border-2 border-black mb-4">
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight="medium">
              Commencement of the Program
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Emaan Institute will commence the MBA Degree Program from Fall 2022
          Semester.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem className="w-[480px] h-fit border-2 border-black mb-4">
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight="medium">
              Our Vision
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          The vision of the Program is to brand the MBA program of Priority in
          the area, which cater the needs of Business
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem className="w-[480px] h-fit border-2 border-black mb-4">
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight="medium">
              Our Mision
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          The mission of the MBA program at EIMS is to contribute to business
          and Industrial Development nationally by Research and Case Study based
          teaching approaches
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem className="w-[480px] h-fit border-2 border-black mb-4">
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight="medium">
              Objectives of MBA Prgram
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <li>
            The program is intended to enable the students to apply their best
            skill to solve the managerial issues.
          </li>
          <li>
            To enable the students to align the theories and practices to
            conduct strategic analyses
          </li>
          <li>
            To enable the students, to Communicate effectively to Market his
            abilities
          </li>
          <li>
            To execute the best leadership skills to work efficiently in
            diversified conditions
          </li>
          <li>
            Ascertain the evaluate the ethical responsibilities of business
          </li>
          <li>
            Apply decision making abilities, both quantitatively and
            qualitatively, to entrepreneurial issues.
          </li>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem className="w-[480px] h-fit border-2 border-black mb-4">
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight="medium">
              Minimum Eligibility Criteria for Fall 2022 Admissions
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <p>
            Applicants must meet the minimum eligibility criteria (At least 16
            years of formal education from HEC recognized DAI/University) in
            order to be considered for admission to the Graduate Program.
            Meeting this criterion does not guarantee admission to the Graduate
            Program; applicants will be selected for admission to EIMS MBA
            Program based on the following factors:
          </p>
          <li>Academic Background</li>
          <li>Performance in the Admission Test</li>
          <li>Work Experience (strongly preferred)</li>
          <li>
            Completed and submitted application form and supporting documents by
            the stipulated deadline
          </li>
          <li>Interview</li>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem className="w-[480px] h-fit border-2 border-black mb-4">
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight="medium">
              Internship
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          All MBA students are required to complete a 6-week internship.
          Completion of internship is a degree requirement for all MBA programs.
          Students can produce their current employment record as an alternative
          to the internship program provided such employment experience is
          recognized by Emaan Institute.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionCard;
