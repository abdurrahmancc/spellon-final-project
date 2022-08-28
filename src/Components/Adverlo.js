import React from "react";
import { Bounce } from "react-reveal";
import { Controller, Scene } from "react-scrollmagic";
import img from "../assets/Group139.png";
import BusinessBrands from "./BusinessBrands/BusinessBrands";

const Adverlo = () => {
  return (
    <div className="scrollmagic-sec">
      <Controller>
        <div>
          <Scene duration={1000} pin={{ pushFollowers: false }} triggerHook={0.2} offset={125}>
            <div>
              <section className="container mx-auto">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-[134px] items-center justify-items-center">
                  <div data-aos="flip-right" className="cssanimation hu__hu__ ">
                    <img src={img} className="w-[576px] h-auto" alt="images" />
                  </div>
                  <div className="max-w-[620px] mx-3">
                    <Bounce right cascade>
                      <h2 className="font-bold text-[38px]  pb-[30px] text-[#000000] leading-[48px] lg:text-start text-center capitalize">
                        Why Adverlo?
                      </h2>
                      <p className=" text-xl leading-[30px] text-[#000000] pb-6">
                        Adverlo is completely devoted to creating the best experience for our
                        clients by delivering ad campaigns that work. Ads are essential in the
                        current climate. You can't afford NOT to have ads. Good ads make money. We
                        offer good ads.
                      </p>
                      <p className="text-xl leading-[30px] text-[#000000]">
                        We value return on ad spend. Producing remarkable results puts our clients
                        in the position they want. Scale your business and increase sales with
                        Adverlo.
                      </p>
                      <div className="lg:pt-10 pt-5 flex justify-center lg:justify-start">
                        <button className="lg:px-[30px] py-[14px] px-[22px] text-white lg:hover:bg-[#F13A9E] lg:py-[22px] rounded-full lg:bg-[#7423C6] bg-[#F13A9E] ">
                          Speak to our team
                        </button>
                      </div>
                    </Bounce>
                  </div>
                </div>
              </section>
              <BusinessBrands />
            </div>
          </Scene>
        </div>
      </Controller>
    </div>
  );
};

export default Adverlo;
