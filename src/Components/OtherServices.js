import React from "react";
import bg_img from "../assets/Maskgroup.png";
import img from "../assets/Group45.png";
import img2 from "../assets/Vector215.png";
import Fade from "react-reveal/Fade";
import { Bounce } from "react-reveal";

const OtherServices = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg_img})` }}
      className="bg-no-repeat lg:h-[845px] h-[832px]"
    >
      <div className="container relative h-full mx-auto pt-10 lg:pt-[166px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-[60px]">
          <div className="px-6">
            <Bounce left cascade>
              <h2 className="lg:text-[38px] text-[26px] leading-[36px] font-bold text-white pb-[30px] lg:leading-[48px] font-bol capitalize lg:text-start text-center">
                What other <br /> services do we offer?
              </h2>
              <p className="text-white text-[15px] leading-[25px] pb-[10px] lg:pb-5 lg:text-[24px] lg:leading-[30px] text-center lg:text-start">
                None. We’re good at ads, so we’ll stick with ads. Other agencies will try and hand
                out an entire menu of services for you to choose from, but we’ll give you a single
                option that will catapult your business due to the quality of service provided. We
                believe that focusing on our craft will allow us to provide exceptional results for
                our clients while not overpromising multiple services that may not meet our
                standards.
              </p>
              <span className="text-white text-[15px] leading-[25px] lg:text-[24px] lg:leading-[34px] block text-center lg:text-start">
                If you want good ads, we’re here for you. It’s what we do.
              </span>
              <div className="lg:pt-10 pt-5 flex justify-center lg:justify-start">
                <button className="lg:px-[30px] py-[14px] px-[22px] text-white lg:hover:bg-[#F13A9E] lg:py-[22px] rounded-full lg:bg-[#7423C6] bg-[#F13A9E] ">
                  Speak to our team
                </button>
              </div>
            </Bounce>
          </div>
          <div className="absolute top-[10%] z-10  right-[100px] overflow-hidden cssanimation hu__hu__ ">
            {" "}
            <img src={img2} alt="" />
          </div>
          <div className=" lg:mx-0  h-full">
            <Bounce effect="fadeInUp">
              <img
                src={img}
                className="w-full mx-auto z-20 relative max-w-[246px] lg:max-w-[421px]"
                alt=""
              />
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
