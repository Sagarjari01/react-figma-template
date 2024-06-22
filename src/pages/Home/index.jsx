import React from "react";
import { HOME_SECTIONS } from "../../CONSTANTS";
const Home = () => {
  return (
    <div className="pl-28 bg-black">
      {HOME_SECTIONS.map(({ Component, background, id, classs }) => {
        return (
          <Component key={id} id={id} background={background} classs={classs} />
        );
      })}
    </div>
  );
};

export default Home;
