import React from "react";
import Navbar from "../../Home/navigationBar/Navbar";
import Footer from "../../Home/footer/Footer";
import Middlebar from "../../Home/middleBar/Middlebar";
import Topheader from "../../Home/topHeader/Topheader";
import "./Message.css";

const Message = () => {
  return (
    <div>
      <Topheader />
      <Middlebar />
      <Navbar />

      <div className="messHead-container">
        <header className="message-header">
          <div className="message-text">
            <h1>Message</h1>
          </div>
        </header>
      </div>

      <section class="message-section">
        <div class="message-container">
          <h2 class="message-heading1">MESSAGE OF CHAIRMEN</h2>
          <div class="red-underline"></div>
          <h3 class="message-heading2">Dr Raza Mughal</h3>
          <div class="message-paragraph">
            <div class="bold-Red">Dear Students,</div>
            <p>
              As you embark on your journey of professional development, I want
              to emphasize the importance of education in achieving your goals.
              Education is not just about acquiring a set of skills or
              knowledge; it is about developing your mind and character so that
              you can become a <span class="light-red">thoughtful</span>,{" "}
              <span class="light-red">ethical</span> and{" "}
              <span class="light-red">effective practitioner </span>
              in your field. Professional education is a continuous process that
              requires lifelong learning. Whether you are just starting out in
              your career or have years of experience, there is always something
              new to learn, new challenges to face, and new opportunities to
              seize. By committing yourself to ongoing education, you can stay
              up-to-date with the latest developments in your field, broaden
              your perspectives, and deepen your expertise.
            </p>
            <p>
              However, education is not just about what you learn in a classroom
              or through textbooks. It is also about the experiences you have,
              the people you meet, and the challenges you overcome. By taking
              advantage of internships, apprenticeships, mentoring
              relationships, and other forms of experiential learning, you can
              develop skills and knowledge that are not easily taught in a
              traditional classroom setting. Ultimately, the goal of
              professional education is not just to help you get a job, but to
              help you build a <span class="light-red">fulfilling</span> and
              <span class="light-red"> meaningful career</span> .
            </p>
            <p>
              {" "}
              By pursuing education with <span class="light-red">
                passion
              </span>, <span class="light-red">dedication</span> and{" "}
              <span class="light-red">curiosity. </span> you can develop the
              skills, knowledge, and character traits that will help you succeed
              in your chosen profession and make a positive difference in the
              world. So, my message to you is simple: embrace education as a
              lifelong pursuit, and commit yourself to becoming the best
              professional you can be. By doing so, you will not only achieve
              your personal and professional goals, but you will also contribute
              to the greater good of society. Good luck, and keep learning!
            </p>
            <br></br>
            <div class="bold-grey">Dr. Muhamad Raza Mughal</div>
            <div class="bold-grey">Chairman</div>
            <div class="bold-grey">
              Emaan Institute of Management & Sciences Karachi.
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Message;
