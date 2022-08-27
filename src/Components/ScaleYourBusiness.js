import React from "react";
import img from "../assets/Group153.png";

const ScaleYourBusiness = () => {
  return (
    <section className=" lg:pt-[109px] pt-[50px]">
      <div className="container mx-auto">
        <h2 className="lg:text-[38px] text-[26px] leading-[36px] pb-5 lg:pb-[30px] lg:leading-[48px] font-bold text-black capitalize text-center">
          What do we offer?
        </h2>
        <img src={img} className="mx-auto" alt="" />
      </div>
    </section>
  );
};

export default ScaleYourBusiness;
