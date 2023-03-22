import React from "react";
import LinksRight from "../LinksRight";
import Footer from "../../Home/footer/Footer";
import Middlebar from "../../Home/middleBar/Middlebar";
import Navbar from "../../Home/navigationBar/Navbar";
import Topheader from "../../Home/topHeader/Topheader";

const Mba = () => {
  return (
    <>
      <Topheader />
      <Middlebar />
      <Navbar />
      <section className="flex w-full">
        <div className="basis-4/5">content</div>
        <div className="basis-1/5">
          <LinksRight />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Mba;
