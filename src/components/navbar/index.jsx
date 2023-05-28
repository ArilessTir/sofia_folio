import React, { useEffect, useState } from "react";
import logo from "../../assets/Union.png";
import { HashLink } from "react-router-hash-link";
import { GrLinkedinOption, GrInstagram } from "react-icons/gr";
import { SiGmail } from "react-icons/si";

const NavBar = () => {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burger);
    console.log(burger);
  };

  return (
    <section className="w-full bg-white h-20 fixed z-50 text-md">
      <nav className=" mx-auto sm:px-12 px-6 text-black h-20 flex justify-between items-center">
        <img className="w-[85px] h-[46px]" src={logo} alt="Logo" />

        <ul className="sm:flex sm:space-x-20 hidden">
          <HashLink to="#work" smooth>
            {" "}
            WORK
          </HashLink>
          <HashLink to="#bio" smooth>
            {" "}
            BIO
          </HashLink>
          <li>RESUME</li>
        </ul>
        {/********* Responsive navbar *********/}
        <div className="sm:hidden">
          {burger ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8 cursor-pointer"
              onClick={toggleBurger}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8 cursor-pointer"
              onClick={toggleBurger}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>

        <div
          className={
            burger
              ? "md:hidden fixed flex flex-col overflow-y-scroll bg-white top-20 right-0 min-h-screen w-full transition-all duration-700 z-40 px-10"
              : "bg-white  top-20 -right-full overflow-y-scroll w-full transition-all min-h-screen absolute z-40 duration-700 "
          }
        >
          <ul className="pt-20 text-black text-lg space-y-8 flex flex-col">
            <HashLink to="#work" smooth onClick={toggleBurger}>
              {" "}
              WORK
            </HashLink>
            <HashLink to="#bio" smooth onClick={toggleBurger}>
              {" "}
              BIO
            </HashLink>
            <li className="cursor-pointer">RESUME</li>
          </ul>

          <div className="flex w-full justify-around items-center mt-20">
            <GrLinkedinOption
              size={30}
              href="https://www.linkedin.com/in/sofiahamdi/"
            />
            <GrInstagram size={30} href="https://www.instagram.com/sof.h_/" />
            <SiGmail size={30} href="mailto:sofiahamdi10@gmail.com" />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
