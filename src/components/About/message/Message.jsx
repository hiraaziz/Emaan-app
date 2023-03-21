import React from "react";
import Navbar  from '../../Home/navigationBar/Navbar'
import Footer from "../../Home/footer/Footer";
import Middlebar from "../../Home/middleBar/Middlebar";
import Topheader from "../../Home/topHeader/Topheader";
import './Message.css'

const Message = () => {
  return (
    <div>
      <Topheader />
      <Middlebar />
      <Navbar />

      <div className="messHead-container">
        <header className="message-header">
          <div className="message-text">
            <h1>Messages</h1>
          </div>
        </header>
        </div>

   <section class="message-section">
   <div class="message-container">
    <h2 class="message-heading1">MESSAGE OF CHAIRMEN</h2>
    <div class="red-underline"></div>
    <h3 class="message-heading2">Dr Raza Mughal</h3>
    <p class="message-paragraph">
    <div>Dear students,</div> As you embark on your journey of professional development, I want to emphasize the importance of education in achieving your goals. Education is not just about acquiring a set of skills or knowledge; it is about developing your mind and character so that you can become a thoughtful, ethical, and effective practitioner in your field. Professional education is a continuous process that requires lifelong learning. Whether you are just starting out in your career or have years of experience, there is always something new to learn, new challenges to face, and new opportunities to seize. By committing yourself to ongoing education, you can stay up-to-date with the latest developments in your field, broaden your perspectives, and deepen your expertise. However, education is not just about what you learn in a classroom or through textbooks. It is also about the experiences you have, the people you meet, and the challenges you overcome. By taking advantage of internships, apprenticeships, mentoring relationships, and other forms of experiential learning, you can develop skills and knowledge that are not easily taught in a traditional classroom setting. Ultimately, the goal of professional education is not just to help you get a job, but to help you build a fulfilling and meaningful career. By pursuing education with passion, dedication, and curiosity, you can develop the skills, knowledge, and character traits that will help you succeed in your chosen profession and make a positive difference in the world. So, my message to you is simple: embrace education as a lifelong pursuit, and commit yourself to becoming the best professional you can be. By doing so, you will not only achieve your personal and professional goals, but you will also contribute to the greater good of society. Good luck, and keep learning! <br/><br/>
    <span className="bold-red">Dr. Muhhamad Raza Mughal</span> <br/>
  <span className="bold-red">Chairman</span> <br/>
  <span className="bold-red">Emaan Institute of Management & Sciences Karachi.</span></p>
</div>
</section>
<section class="message-section">
   <div class="message-container">
    <h2 class="message-heading1">MESSAGE OF DIRECTOR(QEC)</h2>
    <div class="red-line"></div>
    <h3 class="message-heading2">Saleem Raza Bhatti (Ph.D.)</h3>
    <p class="message-paragraph">
    "Education is the foundation of progress, and innovative and quality education is the key to unlocking our full potential as individuals and as a society. Through education, we can learn new skills, expand our knowledge, and develop critical thinking abilities that allow us to tackle complex challenges. Innovative and quality education is about more than just memorizing facts and figures; it's about fostering creativity, encouraging collaboration, and promoting lifelong learning. It's about empowering students to think outside the box and explore new ideas and perspectives. As we navigate an ever-changing world, it's essential that we prioritize innovative and quality education. By investing in education, we invest in our future, ensuring that the next generation has the tools they need to succeed and make a positive impact on the world. So let us strive for innovative and quality education, one that fosters curiosity, creativity, and a lifelong love of learning. Together, we can create a brighter future for all." Innovative education is key to preparing students for the rapidly changing world of tomorrow. It's about going beyond the traditional classroom and finding new and creative ways to engage students in the learning process. Here are a few messages to inspire and encourage innovative education: "Innovative education is about empowering students to think outside the box and challenge the status quo. Let's create a learning environment that inspires creativity and curiosity!" "The future belongs to those who can adapt and innovate. 
Let's equip our students with the skills and knowledge they need to succeed in the 21st century." "Innovative education is not just about technology or gadgets, it's about creating meaningful learning experiences that prepare students for real-world challenges and opportunities." "Let's embrace the power of collaboration, critical thinking, and problem-solving to foster a culture of innovation in our classrooms and schools." "Innovative education is about meeting students where they are and helping them discover their full potential. Let's create personalized learning pathways that cater to each student's unique interests and abilities." Remember, innovation starts with a willingness to experiment and take risks. Let's inspire the next generation of learners to dream big and push the boundaries of what's possible!
 <br/><br/>
 <span className="bold-red">Saleem Raza Bhatti (Ph.D.)</span> <br/>
  <span className="bold-red">Director Quality Enhancement Cell</span> <br/>
  <span className="bold-red">Emaan Institute of Management & Sciences Karachi.</span></p>
</div>

</section>
<Footer />
    </div>
  );
};


export default Message;