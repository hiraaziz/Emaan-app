import React from "react";

const Middlebar = () => {
  return (
    <div className="hidden w-full md:flex md:flex-shrink justify-center h-35.5">
      <div className="w-400 flex items-center">
        <img src={"./logo.jpeg"} alt="logo" className="w-24 h-24" />
        <h1 className="font-bold font-arial tracking-wider text-left text-black ">
          <span className="text-5xl">Emaan Institute</span>
          <br />
          <span className="text-2xl tracking-wide">
            OF MANAGEMENT AND SCIENCES
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Middlebar;

