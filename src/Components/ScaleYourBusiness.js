import id from "date-fns/esm/locale/id/index.js";
import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import { Controller, Scene } from "react-scrollmagic";
import img from "../assets/Group153.png";
import MeetTheTeam from "./MeetTheTeam";
import "./scaleYourBusiness.css";

const ScaleYourBusiness = () => {
  useEffect(() => {
    if (document.querySelector(".scrollmagic-pin-spacer")) {
      // document.querySelector(".scrollmagic-pin-spacer").style.paddingBottom = null;
    }
  }, []);

  return (
    <div className="scrollmagic-sec">
      <Controller>
        <div>
          <Scene duration={1000} pin={{ pushFollowers: false }} triggerHook={0.1} offset={125}>
            <div className=" lg:pt-[109px]  pt-[50px]">
              <section className="container mx-auto">
                <Fade bottom>
                  <h2 className="lg:text-[38px] text-[26px] leading-[36px] pb-5 lg:pb-[30px] lg:leading-[48px] font-bold text-black capitalize text-center">
                    Scale your business to new heights
                  </h2>
                </Fade>
                <img src={img} className="mx-auto" alt="" />
              </section>
              <MeetTheTeam />
            </div>
          </Scene>
        </div>
      </Controller>
      {/* <section className=" lg:pt-[109px] pt-[50px]">
      <div className="container mx-auto">
        <Fade bottom>
          <h2 className="lg:text-[38px] text-[26px] leading-[36px] pb-5 lg:pb-[30px] lg:leading-[48px] font-bold text-black capitalize text-center">
            Scale your business to new heights
          </h2>
        </Fade>
        <img src={img} className="mx-auto" alt="" />
      </div>
    </section> */}
    </div>
  );
};

export default ScaleYourBusiness;
