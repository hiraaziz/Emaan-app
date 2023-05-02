import React from "react";
import { footernav } from "./constant";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" class="bg-darkblue text-white ">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className=" lg:flex lg:items-start lg:gap-8 mb-14">
          <div class="bg-white rounded-full w-28 ">
            <img src="./bgrm-logo.png" alt="logo" />
          </div>

          <div class="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div class="col-span-2">
              <div>
                <h2 class="text-2xl font-bold text-gray-100">Enroll Now</h2>

                <p class="mt-4 text-gray-200">
                  Get Enroll Now By Clicking on & The Apply Now Button.
                </p>
              </div>
            </div>

            <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <button
                className="transition ease-in-out delay-150 hover:scale-105 
            duration-300 bg-maroon border border-white text-white font-bold py-2 px-4 rounded w-48 "
              >
                APPLY NOW
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col  lg:gap-8 ">
          <section className="flex flex-col md:flex-row md:h-[400px] items-start md:space-x-2">
            <div className="md:w-1/5">
              <div class="flex flex-col justify-evenly w-full   ">
                <p class="font-bold tracking-widest text-lightpink mt-0 lg:mt-0 ">
                  GET IN TOUCH
                </p>

                <nav class="mt-6">
                  <ul class="space-y-2  text-sm w-[150px]">
                    <li className=" text-left flex flex-col">
                      <a
                        href="#"
                        class="text-gray-200 transition hover:opacity-75 "
                      >
                        info@emaan.edu.pk
                      </a>
                      <a
                        href="#"
                        class="text-gray-200 transition hover:opacity-75 "
                      >
                        Hiring Statistics
                      </a>
                      <a
                        href="#"
                        class="text-gray-200 transition hover:opacity-75 "
                      >
                        Plot # A-2, Sector 28 Suparco Rd, Gulzar-E-Hijri Scheme
                        33, Karachi, Pakistan
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div class="flex flex-col justify-evenly w-full mt-[20px] md:mt-8">
                <p class="font-bold tracking-widest text-lightpink mt-0 lg:mt-0 ">
                  Useful Links
                </p>

                <nav class="mt-6">
                  <ul class="space-y-2  text-sm w-[150px]">
                    <li className=" text-left flex flex-col">
                      <a
                        href="#"
                        class="text-gray-200 transition hover:opacity-75 "
                      >
                        Semester Rules
                      </a>
                      <a
                        href="#"
                        class="text-gray-200 transition hover:opacity-75 "
                      >
                        Academic Calender
                      </a>
                      <a
                        href="#"
                        class="text-gray-200 transition hover:opacity-75 "
                      >
                        Eligibility Criteria
                      </a>
                      <a
                        href="#"
                        class="text-gray-200 transition hover:opacity-75 "
                      >
                        Scholarship Policy
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div class="flex flex-col justify-evenly w-full md:w-2/5 mt-[20px] md:mt-0">
              <p class="font-bold tracking-widest text-lightpink mt-0 lg:mt-0 ">
                GALLERY
              </p>
              <div className="flex gap-4">
                <div>
                  <img
                    src={"/gallery1.jpg"}
                    alt="gallery1"
                    className="w-[180px] h-[130px] border-2 border-white"
                  />
                  <img
                    src={"/gallery2.jpg"}
                    alt="gallery2"
                    className="w-[180px] h-[130px] border-2 border-white mt-4"
                  />
                </div>

                <div>
                  <img
                    src={"/gallery3.jpg"}
                    alt="gallery3"
                    className="w-[180px] h-[130px] border-2 border-white"
                  />
                  <img
                    src={"/gallery4.jpg"}
                    alt="gallery4"
                    className="w-[180px] h-[130px] border-2 border-white mt-4"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-col justify-start items-start w-full md:w-2/5 mt-[20px] md:mt-0">
              <p class="font-bold tracking-widest mt-0 lg:mt-0 ">LOCATION</p>

              <div className="map-column ml-0">
                <h2 class="map-heading">Campus Location</h2>
                <iframe
                  width="100%"
                  height="350"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  className="lg:w-[300px] xl:w-[450px] ml-0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8306360444846!2d67.13064331500616!3d24.947263584006545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339e95b79a3e5%3A0xb2e46cb7217938ca!2sEmaan%20Institute%20of%20Management%20and%20Sciences!5e0!3m2!1sen!2s!4v1649882604706!5m2!1sen!2s"
                ></iframe>
              </div>
            </div>
          </section>

          <div class="mt-8 border-t border-pink pt-8 w-full">
            <p class=" text-xs text-gray-300 text-center">
              &copy; 2021 – All rights reserved. • Powered by Emaan Institute of
              Management & Science
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
