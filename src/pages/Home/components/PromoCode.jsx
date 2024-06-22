import React from "react";

const promoCode = ({ background, id, classs }) => {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className={`    
        bg-[length:100%_auto] 
        my-32
        h-[482px]
        py-40
        bg-no-repeat 
        bg-center 
        max-w-full 
        flex
        justify-center
        items-center
        `}
      id={id}
    >
      <div className="flex text-center flex-col justify-center items-center">
        <p className=" text-4xl ">ONLINE ONLY</p>
        <div className="border-[3px] w-16 border-black my-6"></div>
        <p className="text-2xl">
          GET 20% OFF YOUR ORDER OF $50 OR MORE
          <br />
          Use code <b>“Chef20”</b>
        </p>
        <button className="py-6 mt-10 px-36 text-3xl border-4 font-semibold border-black">Shop Now</button>
      </div>
    </div>
  );
};

export default promoCode;
