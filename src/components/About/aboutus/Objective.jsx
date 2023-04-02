import React, { useEffect, useRef } from 'react';
import './Objective.css'

const Objective = () => {
  const objectiveRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const listItems = document.querySelectorAll('.objective-list li');

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      listItems.forEach((item) => {
        if (scrollPosition >= item.offsetTop + item.offsetHeight / 2) {
          item.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="objective-container" ref={objectiveRef}>
    <h2 className="objective-heading">Our Objectives</h2>
    <ul className="objective-list">
      <li>To explore the frontiers of knowledge through independent research, as well as in collaboration with other entities in business or education having similar goals. To establish a ‘Research & Development’ Centre which explores the secrets of triumph in every arena of life.</li>
      <li>To prepare students in order to cater to national and international organizational requirements and build leaders of tomorrow who have the ability to think laterally critically and tolerate cultural, social, linguistic, ethnic, religious and racial differences.</li>
      <li>To eradicate racial, ethnic, cultural, political and religious diversity among the young generation and cultivate ethical, moral values and tolerance among them so that they can become good human beings along with professionalism.</li>
      <li>To develop professional ethics in the students so that they can cope up with challenges of practical life.</li>
      <li>To make education affordable for everyone so that every citizen can benefit from our institute.</li>
      <li>To provide all modern era teaching techniques and facilities for better learning.</li>
      <li>To offer high quality programs to business organizations for staff training and management development to enhance corporate productivity and efficiency.</li>
      <li>To impart quality education that can transform the living standards of the people and help them to lead their lives as successful professionals and responsible citizens.</li>
      <li>To provide a congenial learning environment with important facilities to students so that they can acquire knowledge in the most pragmatic way.</li>
      <li>To establish ‘Job Placement Centre’ for professional grooming and training of the students and helping them to acquire better employment opportunities.</li>
      <li style={{backgroundColor: "red"}}>To produce leadership at the global level.</li>
    </ul>
    </div>
  );
};

export default Objective;

