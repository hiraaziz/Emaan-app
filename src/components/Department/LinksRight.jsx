import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { GoDash } from "react-icons/go";
import { Link } from "react-router-dom";

const LinksRight = () => {
  return (
    <div className="hidden lg:block ">
      <h1 className="font-medium text-xl">Quick Links</h1>
      <div className="w-20 h-[2px] bg-maroon" />
      <div className="mt-4">
        <div className="flex space-x-2 items-center">
          <GoDash />
          <h1 className="text-gray-600">Admissions</h1>
        </div>
        <ul className="text-gray-600 ml-4">
          <Link to="/" className="flex space-x-2 items-center px-4 py-2">
            <GoDash />
            <li>Fee Structure</li>
          </Link>
          <Link to="/" className="flex space-x-2 items-center px-4 py-2">
            <GoDash />
            <li>Eligibility</li>
          </Link>
          <Link to="/" className="flex space-x-2 items-center px-4 py-2">
            <GoDash />
            <li>Scholarship</li>
          </Link>
          <Link to="/" className="flex space-x-2 items-center px-4 py-2">
            <GoDash />
            <li>Admission Policy</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default LinksRight;
