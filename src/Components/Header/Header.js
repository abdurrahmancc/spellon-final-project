import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import illustration from "../../assets/Illustration.png";
import { VscThreeBars } from "react-icons/vsc";
import bg_img from "../../assets/Vector1.png";
import engine1 from "../../assets/engine1.png";
import engine2 from "../../assets/engine2.png";
import WaveAnimate from "../../WaveAnimate";
import { Zoom } from "react-reveal";

const Header = () => {
  return (
    <header>
      <WaveAnimate />
      <div
        style={{ backgroundImage: `url(${bg_img})` }}
        className="bg-no-repeat relative z-10 overflow-hidden lg:max-h-[951px] mb-60 lg:mb-60 xl:mb-32 max-h-[645px]"
      >
        <div className="pt-[17px] relative z-[1000]">
          <div className="navbar w-full container mx-auto">
            <div className="navbar-start justify-between lg:justify-start">
              <a className="btn btn-ghost normal-case text-xl">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="navbar-end  hidden lg:flex">
              <ul className="menu-horizontal items-center text-[18px] p-0 gap-10">
                <li>
                  <a className="text-white hover:cursor-pointer">Why Adverlo?</a>
                </li>
                <li>
                  <a className="text-white hover:cursor-pointer">Services</a>
                </li>

                <li className="ml-[15px]">
                  <a className="px-[30px] text-white hover:bg-[#F13A9E] py-[22px]  rounded-full bg-[#F13A9E]">
                    Speak to our team
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar-end lg:hidden">
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                  <VscThreeBars className="text-xl text-white" />
                </label>
                <ul
                  tabIndex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li tabIndex="0">
                    <a className="justify-between">
                      Parent
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                      </svg>
                    </a>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Item 3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container relative z-[200] mx-auto h-full pt-[56px]  lg:pt-[120px]">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-[60px]">
            <div className="px-6">
              <h1 className="lg:text-[3.5vw] relative text-[32px] text-center lg:text-start pb-[30px] text-[#ffffff] font-bold leading-[42px] xl:leading-[80px] lg:leading-[60px]">
                We Convert
                <span className="ring"></span>
                <span className=" text-white"> Clicks</span>
                <br /> Into Customers{" "}
              </h1>
              <Zoom top cascade>
                <p className="text-white relative text-[15px] leading-[25px] pb-[10px] lg:pb-5 lg:text-[20px] xl:text-[24px] xl:leading-[34px] lg:leading-[30px] text-center lg:text-start">
                  Ads cost money. Good ads make money.
                </p>
                <span className="text-white text-[15px] leading-[25px] xl:text-[24px] lg:text-[20px] xl:leading-[34px] block text-center lg:text-start">
                  It???s time to maximize results and sales to make the most of your ad budget.
                </span>
                <div className="lg:pt-10 pt-5 flex justify-center lg:justify-start">
                  <button className="lg:px-[30px] py-[14px] px-[22px] text-white lg:hover:bg-[#F13A9E] lg:py-[22px] rounded-full lg:bg-[#7423C6] bg-[#F13A9E] ">
                    Speak to our team
                  </button>
                </div>
              </Zoom>
            </div>
            <div className="lg:max-w-[738px] relative mx-auto lg:mx-0 max-w-[277px] h-full">
              <img src={illustration} alt="" />
              <img
                src={engine1}
                alt=""
                className="absolute lg:h-[33px] lg:w-[33px] w-[20px] h-[20px]   engine1 top-[63%] left-[40%]"
              />
              <img
                src={engine2}
                alt=""
                className="absolute lg:h-[57px] lg:w-[57px] w-[25px] h-[25px]  engine2 top-[55%] left-[35%]"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
