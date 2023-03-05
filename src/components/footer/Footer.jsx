import React from "react";
import { footernav } from "./constant";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" class="bg-darkblue text-white">
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

        <div className="flex lg:flex lg:items-start lg:gap-8">
          {footernav.map((footer) => (
            <div class="flex flex-col justify-evenly w-1000">
              <p class="font-bold tracking-widest text-lightpink">
                {footer.title}
              </p>

              <nav aria-label="Footer Navigation - Services" class="mt-6">
                <ul class="space-y-4 text-sm w-48">
                  {footer.navs.map((nav) => (
                    <li>
                      <a
                        href="#"
                        class="text-gray-200 transition hover:opacity-75"
                      >
                        {nav}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        <div class="mt-8 border-t border-pink pt-8">
          <p class="text-xs text-gray-300 text-center">
            &copy; 2021 – All rights reserved. • Powered by Emaan Institute of
            Management & Science
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
