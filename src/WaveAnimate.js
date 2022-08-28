import React from "react";
import bg_img from "./assets/Vector1.png";
import bg_img2 from "./assets/Group143.png";

const WaveAnimate = () => {
  return (
    <div id="sections" className="sections">
      <div
        style={{ backgroundImage: `url(${bg_img})` }}
        className="xl:mb-[100px] bg-no-repeat z-10 top-[-500px] absolute max-h-[645px] xl:max-w-screen w-full h-full mt-[500px] overflow-hidden"
      ></div>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
    </div>
  );
};

export default WaveAnimate;
