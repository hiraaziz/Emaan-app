import React from "react";
import './alumni.css';
import Footer from "../../Home/footer/Footer";
import Middlebar from "../../Home/middleBar/Middlebar";
import Navbar from "../../Home/navigationBar/Navbar";
import Topheader from "../../Home/topHeader/Topheader";
import AlumniBanner from '../AlumniBanner/AlumniBanner';
import AlumniSuccess from '../AlumniSucsess/AlumniSucess';
import AlumniGallery from '../AlumniGallery/AlumGallery';



const Alumni = () => {
  return (
    <div>
      <Topheader />
      <Middlebar />
      <Navbar />
      <section className="alumni-hero">
      <div className="alumni-hero__text">
      <div className="typewriter">
       <h1 className="Alumni-head">
           <span>Emaan Alumni!</span>
       </h1>
        <p>
        EMAAN INSTITUTE OF MANAGEMENT & SCIENCES (EIMS) has been established via Sindh Act No: XXXV of 2018 and recognized by HEC (Higher Education Commission) as Degree Awarding Institute.        </p>
       </div>
          <button className="alumni-hero__button">Read More</button>
       </div>
       <div className="alumni-hero__image">
      
      </div>  
    </section>
    <AlumniBanner/>
    <AlumniSuccess/>
    <AlumniGallery/>
      <Footer />
    </div>
  );
};

export default Alumni;
