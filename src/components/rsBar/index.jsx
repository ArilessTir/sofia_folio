import React from "react";
import { GrLinkedinOption, GrInstagram } from "react-icons/gr";
import { SiGmail } from "react-icons/si";

const Rsbar = () => {
  return (
    <div className="hidden md:fixed  md:right-0 md:bg-white md:flex md:flex-col md:space-y-7 md:h-screen md:z-50">
      <a
        className="cursor-pointer"
        href="https://www.linkedin.com/in/sofiahamdi/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <GrLinkedinOption size={30} className="m-3" />
      </a>

      <a
        className="cursor-pointer"
        href="https://www.instagram.com/sof.h_/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <GrInstagram size={30} className="m-3" />
      </a>

      <a
        className="cursor-pointer"
        href="mailto:sofiahamdi10@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <SiGmail size={30} className="m-3" />
      </a>
    </div>
  );
};

export default Rsbar;
