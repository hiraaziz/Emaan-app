import React from "react";
import Footer from "../Home/footer/Footer";
import Middlebar from "../Home/middleBar/Middlebar";
import NavMenu from "../Home/navigationBar/NavMenu";
import Topheader from "../Home/topHeader/Topheader";

const NetDevelopment = () => {
  return (
    <div>
      <Topheader />
      <Middlebar />
      <NavMenu />
      <iframe
        src="https://drive.google.com/file/d/1rV9keap15UGArO_H2MFi603Yo-KE3oT0/preview"
        width="100%"
        height="1160"
        allow="autoplay"
      ></iframe>{" "}
      <Footer />
    </div>
  );
};

export default NetDevelopment;
