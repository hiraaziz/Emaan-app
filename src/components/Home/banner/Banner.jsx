import React from "react";
import Crousel from "./Crousel";

const Banner = () => {
  const itemlist = [
    {},
    {
      img: "./administration.png",
      courseName: "BBA",
      title: "Bachleors of Business Administration",
      length: 4,
    },
    {
      img: "./commerce.png",
      courseName: "ADP",
      title: "Business and Commerce",
      length: 2,
    },
    {
      img: "./network.png",
      courseName: "ADP",
      title: "Computer Networking",
      length: 2,
    },
    {
      img: "./webdesign.png",
      courseName: "ADP",
      title: "Web Design & Development",
      length: 2,
    },
    {
      img: "./database.png",
      courseName: "ADP",
      title: "Database Management",
      length: 2,
    },
    {
      img: "./computer.png",
      courseName: "BSCS",
      title: "Bachleors of Science in Computer Science",
      length: 4,
    },
  ];

  return <Crousel images={itemlist} />;
};

export default Banner;
