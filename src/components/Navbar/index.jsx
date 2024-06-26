import React, { useState } from "react";
import { Close, HamBurger, SignH} from "../../CONSTANTS";
import RenderNavLinks from "./components/RenderNavLinks";
import NavFooter from "./components/NavFooter";


const Navbar = () => {
  const [expanded, setIsExpanded] = useState(false);
  return (

      <nav
        className={`bg-black bg-opacity-75 text-white h-screen relative border-r-8 border-[#D29A5A] transition-all duration-300 ease-in-out flex flex-col ${
          expanded ? "w-[344px]" : "w-[150px]"
        } `}
      >
        <div className="flex-grow flex flex-col">
          <div className="absolute top-8 left-12 transition-all duration-300 ease-in-out ">
            <div
              className="w-10 h-10 cursor-pointer "
              onClick={() => setIsExpanded((state) => !state)}
            >
              {expanded ? <Close /> : <HamBurger />}
            </div>
          </div>
          <div
            className={`transition-all duration-300 ease-in-out ${
              expanded
                ? "pt-12 opacity-100"
                : "-rotate-90 absolute w-[446px] left-14 top-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-center"
            }`}
          >
            <SignH />
          </div>
          <div
            className={`transition-all duration-300 ease-in-out ${
              expanded ? "opacity-100" : "opacity-0"
            }`}
          >
            {expanded && <RenderNavLinks />}
          </div>
        </div>
        <div className="mt-auto">{expanded && <NavFooter />}</div>
      </nav>
  );
};

export default Navbar;
