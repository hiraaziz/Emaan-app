import React, { useEffect, useRef } from 'react';
import './Mission.css';

const Mission = () => {
  const missionVisionRef = useRef(null);

  useEffect(() => {
    const missionVision = missionVisionRef.current;
    const handleScroll = () => {
      if (window.scrollY >= missionVision.offsetTop - window.innerHeight / 2) {
        missionVision.classList.add('animate');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="mission-vision-container" ref={missionVisionRef}>
        <div className="mission-box">
          <h2 className="mission-heading">Our Mission</h2>
          <p className="mission-text">
            Provide superior undergraduate and graduate programs that are technology-enriched and responsive to the needs of students and the evolving workplace. Prepare young people to find their place in the world.
          </p>
        </div>
        <div className="vision-box">
          <h2 className="vision-heading">Our Vision</h2>
          <p className="vision-text">
            We believe that curiosity is at the heart of every academic pursuit. A desire to learn, the courage to question and a passion for discovery are present in everything we do. We encourage students to dream, to think critically, creatively, and insightfully, and we engage in their own lives, their communities, and the world.
          </p>
        </div>
    

    </div>
  )
}

export default Mission;

