import React from "react";
import { Zoom } from "react-reveal";
import { Controller, Scene } from "react-scrollmagic";
import img from "../assets/Group152.png";
import OtherServices from "./OtherServices";

const Offer = () => {
  return (
    <div className="scrollmagic-sec">
      <Controller>
        <div>
          <Scene duration={1000} pin={{ pushFollowers: false }} triggerHook={0.1} offset={125}>
            <div>
              <section className=" pt-[109px] mb-[158px]">
                <div className="container mx-auto">
                  <Zoom top cascade>
                    <h2 className="lg:text-[38px] text-[26px] leading-[36px] pb-[30px] lg:leading-[48px] font-bold text-black capitalize text-center">
                      What do we offer?
                    </h2>
                  </Zoom>

                  <figure className="mx-auto max-w-[344px] lg:max-w-full">
                    <img src={img} alt="" className="mx-auto" />
                  </figure>
                </div>
              </section>
              <OtherServices />
            </div>
          </Scene>
        </div>
      </Controller>
    </div>
  );
};

export default Offer;
