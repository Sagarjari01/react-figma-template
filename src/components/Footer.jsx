import React from "react";
import { FOOTER, SignH } from "../CONSTANTS";
const Footer = () => {
  return (
    <div className="flex justify-around pl-28 bg-black  flex-col relative pb-48 overflow-hidden">
      <div className="flex justify-around py-16 border-b-8 border-orange-300 ">
        {FOOTER.map((elem) => {
          const { title, description, Logo } = elem;
          return (
            <div className="flex space-x-4">
              <Logo />
              <div className=" space-y-4 text-white ">
                <div className=" text-[#D29A5A] text-xl font-semibold">
                  {title}
                </div>
                <div>{description}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute left-1/2 bottom-[25%] transform -translate-x-1/2 translate-y-1/2 w-[448px]">
        <SignH className="h-full w-full" />
      </div>
    </div>
  );
};

export default Footer;
