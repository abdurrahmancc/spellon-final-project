import React from "react";
import bg_img from "../../assets/bg_footer.png";
import group_img from "../../assets/Group.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-no-repeat footer-image">
      <div className="lg:pt-[100px] pt-[38px]">
        <div className="mx-3">
          <h4 className="lg:text-[38px] text-[26px] pb-[30px] lg:pb-10 text-center leading-[48px] font-bold text-white capitalize">
            Have Any Questions?
          </h4>
          <img src={group_img} className={"mx-auto "} alt="" />
          <p className="text-[16px] lg:pb-[105px] pb-[53px] leading-[26px] text-white text-center">
            If you have any inquiries and would like to speak directly to our team, feel free to
            contact us via <br /> email at: hello@adverlo.com
          </p>
        </div>
        <div className="border-t border-white  text-white ">
          <div className="container mx-auto">
            <p className="lg:pt-5 pt-[30px] pb-[46px] lg:pb-[33px] justify-between flex items-center flex-col lg:flex-row">
              <span className="pb-3">Adverlo Digital Marketing</span>{" "}
              <span>All Rights Reserved | Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
