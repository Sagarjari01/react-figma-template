import React from "react";
import { FOOTER, SignH } from "../CONSTANTS";
const Footer = () => {
  return (
    <div className="flex justify-around pl-28 bg-black  flex-col relative">
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

      <div className="flex justify-center items-center mt-auto mb-0">
        <SignH className=" " />
      </div>

    </div>
  );
};

export default Footer;
