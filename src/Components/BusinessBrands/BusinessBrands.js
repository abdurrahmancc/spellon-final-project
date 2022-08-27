import React from "react";
import bg_img from "../../assets/Vector15.png";
import icon_3 from "../../assets/icons-1.png";
import icon_1 from "../../assets/icons-2.png";
import icon_2 from "../../assets/icons-3.png";
import icon_4 from "../../assets/icons-4.png";
import icon_6 from "../../assets/icons-5.png";
import icon_5 from "../../assets/icons-6.png";
import img1 from "../../assets/Vector19.png";
import img2 from "../../assets/Vector12.png";
import { Bounce } from "react-reveal";

const BusinessBrands = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bg_img})` }}
      className="h-[967px] overflow-hidden max-w-screen relative mt-[145px] bg-no-repeat w-full"
    >
      <div className="absolute top-[30%] cssanimation hu__hu__ ">
        <img src={img1} alt="" />{" "}
      </div>
      <div className="absolute top-[15%] right-[-50px] overflow-hidden cssanimation hu__hu__ ">
        {" "}
        <img src={img2} alt="" />
      </div>
      <div className="container mx-auto pt-[99px] pb-[116px]">
        <Bounce bottom cascade>
          <h2 className="text-[38px] pb-[116px] leading-[48px] font-bold text-white capitalize text-center">
            Ads for businesses <br /> and brands all over the world
          </h2>
        </Bounce>
        <div className="max-w-[849px] mx-auto">
          <div className="grid grid-cols-3 gap-y-[111px] justify-items-center items-center">
            <Bounce bottom cascade>
              <div className="">
                <img
                  src={icon_1}
                  alt="icon"
                  className=" max-w-[64px] lg:max-w-full mx-auto relative hover:top-[-4px] top-0 ease-in-out duration-500 "
                />
                <h4 className="lg:text-[28px] text-[15px] lg:pt-14 pt-5 leading-[25px] lg:leading-[34px] text-center text-white">
                  Ecommerce
                </h4>
              </div>
              <div className="">
                <img
                  src={icon_2}
                  alt="icon"
                  className="max-w-[64px] lg:max-w-full mx-auto relative hover:top-[-4px] top-0 ease-in-out duration-500 "
                />
                <h4 className="lg:text-[28px] text-[15px] lg:pt-14 pt-5 leading-[25px] lg:leading-[34px] text-center text-white">
                  Info Products
                </h4>
              </div>
              <div className="">
                <img
                  src={icon_3}
                  alt="icon"
                  className="max-w-[64px] lg:max-w-full  mx-auto relative hover:top-[-4px] top-0 ease-in-out duration-500 "
                />
                <h4 className="lg:text-[28px] text-[15px] lg:pt-14 pt-5 leading-[25px] lg:leading-[34px] text-center text-white">
                  Your Business
                </h4>
              </div>
              <div className="">
                <img
                  src={icon_4}
                  alt="icon"
                  className="max-w-[64px] lg:max-w-full mx-auto relative hover:top-[-4px] top-0 ease-in-out duration-500 "
                />
                <h4 className="lg:text-[28px] text-[15px] lg:pt-14 pt-5 leading-[25px] lg:leading-[34px] text-center text-white">
                  Tech
                </h4>
              </div>
              <div className="">
                <img
                  src={icon_5}
                  alt="icon"
                  className="max-w-[64px] lg:max-w-full mx-auto relative hover:top-[-4px] top-0 ease-in-out duration-500 "
                />
                <h4 className="lg:text-[28px] text-[15px] lg:pt-14 pt-5 leading-[25px] lg:leading-[34px] text-center text-white">
                  Healthcare
                </h4>
              </div>
              <div className="">
                <img
                  src={icon_6}
                  alt="icon"
                  className="max-w-[64px] lg:max-w-full mx-auto relative hover:top-[-4px] top-0 ease-in-out duration-500 "
                />
                <h4 className="lg:text-[28px] text-[15px] lg:pt-14 pt-5 leading-[25px] lg:leading-[34px] text-center text-white">
                  General Services
                </h4>
              </div>
            </Bounce>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessBrands;
