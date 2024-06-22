import React from "react";
import { scrollToSection } from "../utils";
import { HOME_SECTIONS, HamBurger, Sign } from "../CONSTANTS";

const Navbar = () => {
  return (
    <nav className="absolute bg-black bg-opacity-25 z-10 h-screen w-28 top-0 left-0 flex flex-col items-center border-r-4 border-r-orange-300 ">
      <HamBurger className="pt-6 w-8"/>
      <Sign className="absolute left-0 top-[30%] w-40 " />
      {/* mobile-navbar */}
    </nav>
  );
};

export default Navbar;
{
  /* {HOME_SECTIONS.map((section)=>{
            return(
                <button key={section.id} onClick={()=>scrollToSection(section.id)}>
                    {section.id}
                </button>
            )
        })} */
}
