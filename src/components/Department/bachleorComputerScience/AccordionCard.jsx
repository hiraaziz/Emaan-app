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
              Eligibility Criteria
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          The minimum requirements for admission in a Bachelor degree program in
          Computer Science, is at least 50% marks in Intermediate (HSSC)
          examination with Mathematics or equivalent qualification with
          Mathematics certified by IBCC
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem className="w-[480px] h-fit border-2 border-black mb-4">
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight="medium">
              Duration
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          The minimum duration for completion of BS degree is four years. As per
          HEC rules, a maximum period of seven years is required to complete BS
          degree program.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem className="w-[480px] h-fit border-2 border-black mb-4">
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight="medium">
              Degree Completion Requirements
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <p>
            To become eligible for award of BS degree, a student must satisfy
            the following requirements:
          </p>
          <li>
            Must have studied and passed the prescribed courses, totaling at
            least 130 credit hours.
          </li>
          <li>
            Must have earned CGPA (Cumulative Grade Point Average) of at least
            2.0 on a scale of 4.0.
          </li>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionCard;
