import React from "react";
import Banner from "./Home/banner/Banner";
import Footer from "./Home/footer/Footer";
import Middlebar from "./Home/middleBar/Middlebar";
import Navbar from "./Home/navigationBar/Navbar";
import Programs from "./Home/programs/Programs";
import Topheader from "./Home/topHeader/Topheader";
import Vision from "./Home/vision/Vision";
import Navigationbar from "./Home/navigationBar/Navigationbar";

const Home = () => {
  return (
    <div>
      <Topheader />
      <Middlebar />
      <Navbar />
      {/* <Navigationbar /> */}
      <Banner />
      <Vision />
      <Programs />
      <Footer />
    </div>
  );
};

export default Home;
