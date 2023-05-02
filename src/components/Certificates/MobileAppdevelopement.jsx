import React from "react";
import Footer from "../Home/footer/Footer";
import Middlebar from "../Home/middleBar/Middlebar";
import NavMenu from "../Home/navigationBar/NavMenu";
import Topheader from "../Home/topHeader/Topheader";

const MobileAppdevelopement = () => {
  return (
    <div>
      <Topheader />
      <Middlebar />
      <NavMenu />
      <iframe
        src="https://drive.google.com/file/d/1N3jrmYMEVO3Q2z6gOZEpsopC841d1tUy/preview"
        width="100%"
        height="1160"
        allow="autoplay"
      ></iframe>
      <Footer />
    </div>
  );
};

export default MobileAppdevelopement;
