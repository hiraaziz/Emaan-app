import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import styles from "./styles.module.css";

const Topheader = () => {
  return (
    <div className="w-full h-11 bg-red-800 flex justify-evenly items-center">
      <div className="text-gray-200 flex justify-evenly w-20">
        <AiOutlineInstagram className={styles.icons} />
        <AiOutlineFacebook className={styles.icons} />
      </div>
      <div className="flex justify-evenly w-28 text-white">
        <h3>Apply</h3>
        <h3>LMS</h3>
      </div>
    </div>
  );
};

export default Topheader;
