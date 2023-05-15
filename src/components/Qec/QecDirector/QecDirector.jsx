import React, { useEffect, useRef } from "react";
import "./Qecdirector.css";

const QecDirector = () => {
  const objectiveRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const listItems = document.querySelectorAll(".objective-list li");

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      listItems.forEach((item) => {
        if (scrollPosition >= item.offsetTop + item.offsetHeight / 2) {
          item.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div className="director-container" style={{ backgroundColor: "mehrun" }}>
        <div className="director-section">
          <div className="director-image">
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder Image"
            />
          </div>
          <div className="director-message" style={{ color: "white" }}>
            <h1 className="QecDirectorHeading" style={{ color: "white" }}>
              MESSAGE OF DIRECTOR(QEC)
            </h1>
            <p className="QecDirectorPara">
              We extend warm thankfulness to{" "}
              <span className="WhiteBold">
                Quality Assurance Agency of Higher Education Commission
              </span>{" "}
              for establishing <span className="WhiteBold">QECs</span> in
              Institutions private as well as in public. The initiative will
              facilitate the Higher Education Institutions and Degree Awarding
              Institutions to enhance their quality of education and programs at
              National and International criteria. We firmly believe that QECs
              work in closely with each other as it will embark a synergistic
              effect on our educational set-up. Mean while, the QEC staff at our
              Institution leaves no stone unturned to create a quality culture
              of education for its stakeholders in a timely and cost-effective
              manner. If we rationalize our procedures and work on the refrain
              of "ownership and execution", we can achieve new statures of
              success. It’s great time that we should take some evocative and
              real steps to assure quality education and this could be possible
              if we make our assessment systems valid and reliable.
            </p>
          </div>
        </div>
      </div>
      <div className="Qecbanner">
        <h1 className="QecVision">VISION</h1>
      </div>
      <div className="vision-message">
        <ul>
          <h3 className="QecVisionHeading">Vision:</h3>
          <li>
            <span className="bold-Red"> EIMS</span>,
            <span className="bold-Red"> QEC</span> goal is to provide an
            innovative quality education by ensuring well-matched with national
            standards.
          </li>
          <h3 className="QecMisiionStat">Mission Statement:</h3>
          <li>
            <span className="bold-Red"> EIMS</span>,
            <span className="bold-Red"> QEC</span> is dedicated and committed to
            guarantee and extend superiority in higher education with regards to
            unified teaching methodologies, having a good environment, and
            feedback-based education, positive students’ perception, effective
            programs assessment tools and a learning environment encouraging
            research culture.
          </li>
        </ul>
      </div>
      <div className="objective-container" ref={objectiveRef}>
        <h2 className="objective-heading">EIMS (QEC) OBJECTIVES</h2>
        <ul className="objective-list">
          <li>
            To analyze the data through feedback forms and course outlines/
            plans from the relevant departments
          </li>
          <li>
            To arrange training programs on regular basis & to evaluate, Team in
            order to create awareness regarding self-assessment process.
          </li>
          <li>
            To evaluate the current status of educational provision at
            departmental level by holding meetings with the Program & Assessment
            Team.
          </li>
          <li>
            To follow up the progress of the corrective actions highlighted in
            the Self Assessment Report (SAR) by the respective departments.{" "}
          </li>
          <li>
            To confirm whether curriculum, subject and staff development,
            research and other scholarly activities are conducted as per HEC
            criteria.
          </li>
          <li>
            To enable the respective departments in getting accreditation
            certificate from the councils/ bodies prescribed by the Higher
            Education Commission of Pakistan.{" "}
          </li>
          <li>
            To acquire membership of international agencies working in the
            domain of quality assurance.
          </li>
          <li>
            To verify whether Institutional Performance Evaluation Standards
            (IPES) devised for the betterment of Higher Education Institutions
            (HEIs) are in accordance with the HEC guidelines.
          </li>
          <li>
            To make sure that the Institutional abides by the rules &
            regulations set by HEC in terms of faculty appointment, admission to
            BBA/BS/MS/M.Phil. and PhD the programs approved by the HEC.{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QecDirector;
