import React from "react";
import Footer from "../Home/footer/Footer";
import Middlebar from "../Home/middleBar/Middlebar";
import NavMenu from "../Home/navigationBar/NavMenu";
import Topheader from "../Home/topHeader/Topheader";

const EthicalHacking = () => {
  return (
    <div>
      <Topheader />
      <Middlebar />
      <NavMenu />
      <iframe
        src="https://drive.google.com/file/d/1H9bhM4Q1fcMa13DP-qi1PF5uzAmMtdTe/preview"
        width="100%"
        height="1160"
        allow="autoplay"
      ></iframe>{" "}
      <Footer />
    </div>
  );
};

export default EthicalHacking;
