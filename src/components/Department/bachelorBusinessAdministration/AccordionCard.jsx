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
          Department of Management Science envisions its success in the
          sustainable contribution that it will make to the industry, academia
          and research in public and private sector. EIMS will lead by providing
          professionally competent and ethically conscious human resources
          engaged in the global and local context to foster socio-economic
          growth and sustainability for the society. EIMS envisages having
          faculty with high research potential and a deep desire for cutting
          edge research including collaboration with national and international
          partners.
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
          Being a research-oriented and student-centric business school, we
          emphasize research publications in impact journals as well as state-of
          -the-art learning methodologies. We will prepare our students to
          become the future ethical business leaders and the guiding post for
          the society, while equipping them with the knowledge and skills
          required by world-class professionals. We will be the leading choice
          for organizations seeking highly talented human resource. EIMS will
          foster internationalization with key stakeholders and actively work to
          exchange best practices with business schools across Pakistan through
          collaborations, workshops, conferences and other means.
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
          <li>Duration: 4 years (8 Semesters)</li>
          <li>Credit Hours: 138</li>
          <li>Entry Requirements:</li>
          <li>
            Minimum 45% Marks in Intermediate / A-Level or equivalent and no 3rd
            division in Matriculation
          </li>
          <li>50% Marks in NTSEIMS entry Test (Arithematics and English)</li>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionCard;
