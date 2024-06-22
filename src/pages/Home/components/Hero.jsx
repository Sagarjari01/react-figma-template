import React from "react";
import Navbar from "../../../components/Navbar";
const Hero = ({ background, id, classs }) => {
  console.log(background);
  return (
    <div className="">
      <Navbar />
      <div
        style={{ backgroundImage: `url(${background})` }}
        className={`h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-end items-center pb-40`}
        id={id}
      >
        <button className="border-2 py-4 px-24 font-semibold text-white text-xl">
          Meet Chef Matt
        </button>
      </div>
    </div>
  );
};

export default Hero;
