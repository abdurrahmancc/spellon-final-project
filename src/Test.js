import React from "react";
import bg_img from "./assets/Vector1.png";

const Test = () => {
  return (
    <div
      // style={{ backgroundImage: `url(${bg_img})` }}
      className="mb-[100px] bg-no-repeat sections top-[-500px] absolute max-w-screen w-full h-screen  mt-[500px] overflow-hidden"
    >
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </div>
  );
};

export default Test;
