import React from "react";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import {
  BsMessenger,
  BsInstagram,
  BsWhatsapp,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import styles from "./styles.module.css";

const Topheader = () => {
  return (
    <div className="hidden lg:w-full h-11 bg-maroon lg:flex md:flex-shrink md:justify-evenly md:items-center">
      <button className="w-32 h-7 text-maroon bg-white rounded-3xl font-bold">
        Apply Now!
      </button>
      <div className="text-gray-200 flex justify-evenly w-48">
        <FaFacebookF />
        <BsInstagram />
        <BsWhatsapp />
      </div>
    </div>
  );
};

export default Topheader;
