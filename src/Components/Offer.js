import React from "react";
import img from "../assets/Group152.png";

const Offer = () => {
  return (
    <section className=" pt-[109px] mb-[158px]">
      <div className="container mx-auto">
        <h2 className="lg:text-[38px] text-[26px] leading-[36px] pb-[30px] lg:leading-[48px] font-bold text-black capitalize text-center">
          What do we offer?
        </h2>
        <figure className="mx-auto max-w-[344px] lg:max-w-full">
          <img src={img} alt="" className="mx-auto" />
        </figure>
      </div>
    </section>
  );
};

export default Offer;
