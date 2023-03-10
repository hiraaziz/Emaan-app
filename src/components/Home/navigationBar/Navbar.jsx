import React, { useState } from "react";
import { links } from "./constant";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [value, setvalue] = useState("");
  const [aboutOpen, setAboutOpen] = useState(false);
  const [program, setprogram] = useState(false);
  const [department, setdepartment] = useState(false);
  const [admission, setAdmission] = useState(false);
  const [qec, setQec] = useState(false);
  const [academics, setacademics] = useState(false);
  const [research, setresearch] = useState(false);
  const [login, setLogin] = useState(false);

  const nav = [
    {
      name: "About",
      value: "about",
      funcName: aboutOpen,
    },

    {
      name: "Department",
      value: "department",
      funcName: department,
    },
    {
      name: "Admission",
      value: "admission",
      funcName: admission,
    },
    {
      name: "Academics",
      value: "academics",
      funcName: academics,
    },
    {
      name: "QEC",
      value: "qec",
      funcName: qec,
    },
    {
      name: "Research",
      value: "research",
      funcName: research,
    },
    {
      name: "Login",
      value: "login",
      funcName: login,
    },
  ];

  const onCloseNav = (value) => {
    if (value == "about") setAboutOpen(false);
    else if (value === "program") setprogram(false);
    else if (value === "department") setdepartment(false);
    else if (value === "admission") setAdmission(false);
    else if (value === "qec") setQec(false);
    else if (value === "academics") setacademics(false);
    else if (value === "research") setresearch(false);
    else if (value === "login") setLogin(false);
  };
  const toggleDropdown = (value) => {
    setAboutOpen(false);
    setprogram(false);
    setdepartment(false);
    setAdmission(false);
    setacademics(false);
    setLogin(false);
    setQec(false);
    setresearch(false);

    if (value === "about") setAboutOpen(!aboutOpen);
    else if (value === "program") setprogram(!program);
    else if (value === "department") setdepartment(!department);
    else if (value === "admission") setAdmission(!admission);
    else if (value === "qec") setQec(!qec);
    else if (value === "academics") setacademics(!academics);
    else if (value === "research") setresearch(!research);
    else if (value === "login") setLogin(!login);
  };

  return (
    <div className=" bg-maroon w-full h-16 flex justify-center">
      <div className=" hidden md:flex justify-evenly items-center list-none h-full w-900 text-gray-100 font-medium">
        <button>
          <Link to="/">Home</Link>
        </button>
        {nav.map((nav, ind) => (
          <div className="relative " onMouseLeave={() => onCloseNav(nav.value)}>
            <button
              className="flex items-center transition ease-in-out delay-50 duration-300 
              hover:scale-110"
              onMouseEnter={() => toggleDropdown(nav.value)}
            >
              {nav.name}
            </button>
            {nav.funcName && (
              <div className=" absolute left-0  py-2 w-48 bg-black text-white-100 rounded-md shadow-lg z-10">
                {links[ind].map((link) => (
                  <>
                    <Link
                      to={link.link}
                      className="block px-4 py-2 text-sm hover:text-black hover:bg-gray-100"
                    >
                      {link.title}
                    </Link>
                    <div className="w-900 h-px bg-gray-500 flex ml-2"></div>
                  </>
                ))}
              </div>
            )}
          </div>
        ))}
        <button>
          <Link to="/certificates">Certificates</Link>
        </button>
        <button>
          <Link to="/lms">LMS</Link>
        </button>
        <button>
          <Link to="/contact">Contact</Link>
        </button>
        <button>
          <Link to="/alumni">Alumni</Link>
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
