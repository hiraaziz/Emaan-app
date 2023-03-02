import React from "react";
import Crousel from "./Crousel";

const Banner = () => {
  const images = [
    "https://picsum.photos/800/600?random=1",
    "https://picsum.photos/800/600?random=2",
    "https://picsum.photos/800/600?random=3",
  ];

  return <Crousel images={images} />;
};

export default Banner;
