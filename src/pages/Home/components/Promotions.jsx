import React from "react";

const Promotions = ({ background, id, classs }) => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="    
        bg-[length:100%_auto] 
        h-[400px]
        text-white
        bg-no-repeat 
        bg-center 
        max-w-full 
        flex
        justify-items-start
        "
      id={id}
    >
      <div className="flex text-left flex-col pt-20 space-y-10 pl-14">
        <p className=" text-[38px] w-fit border-b-4 border-b-white pb-4 ">SIGN UP SPECIAL PROMOTIONS</p>
        <p className="text-xl">
        Get exclusive deals you won’t find anywhere else straight to your inbox!
        </p>
        <div className="flex space-x-4">
          <input className="pl-2 pr-80 text-black border-2 border-white bg-transparent placeholder:text-white" placeholder="Enter email address" />
        <button className="py-2 px-10 text-lg bg-[#D29A5A]">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
