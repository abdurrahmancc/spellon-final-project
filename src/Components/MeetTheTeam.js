import React from "react";
import { Bounce } from "react-reveal";
import user1 from "../assets/user-1.png";
import user2 from "../assets/user-2.png";
import user3 from "../assets/user-3.png";
import bg_img from "../assets/Vector15.png";
import img1 from "../assets/Vector19.png";
import img2 from "../assets/Vector20.png";

const MeetTheTeam = () => {
  return (
    <section className="relative ">
      <div
        style={{ backgroundImage: `url(${bg_img})` }}
        className="bg-no-repeat relative overflow-hidden lg:h-[990px] h-[581px] pt-[52px] pb-[30px] lg:py-[191px]"
      >
        <div className="absolute top-[40%] cssanimation hu__hu__ ">
          <img src={img1} alt="" />{" "}
        </div>
        <div className="absolute top-[10%] right-[-50px] overflow-hidden cssanimation hu__hu__ ">
          {" "}
          <img src={img2} alt="" />
        </div>
        <div className="container mx-auto">
          <div className="max-w-[864px]  mx-auto">
            <Bounce bottom cascade>
              <h2 className="lg:text-[38px] text-[26px] leading-[36px] font-bold text-white pb-[30px] lg:leading-[48px] font-bol capitalize text-center">
                Meet The A-Team
              </h2>
              <p className="text-white px-3 text-[15px] leading-[25px] pb-[10px] lg:pb-5 lg:text-[24px] lg:leading-[30px] text-center">
                Founded by Yoji Selman who’s spent the past five years building social media brands
                while amassing hundreds of thousands of followers for his clients, Adverlo has
                assembled a team well-suited for the digital marketing growth of its clients.
              </p>
              <p className="text-white px-3 text-[15px] leading-[25px] pb-[10px] lg:pb-5 lg:text-[24px] lg:leading-[30px] text-center">
                Equipped with the skillset to scale brands and businesses, Adverlo’s team is more
                than capable of fulfilling your marketing needs.
              </p>
            </Bounce>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center">
              <Bounce bottom cascade>
                <div className="card rounded-lg ">
                  <figure className="lg:px-10 pt-10">
                    <img
                      src={user1}
                      className="rounded-[50%] mx-auto lg:w-[194px] lg:h-[194px]  w-[73px] h-[73px]"
                      alt="user_photo"
                    />
                  </figure>
                  <div className="card-body py-0 items-center text-center">
                    <h2 className="card-title font-semibold text-[12px] lg:text-[28px] leading-[34px] text-white capitalize pt-3 lg:pt-[34px] ">
                      Yoji Selman
                    </h2>
                    <span className="text-white text-[8px] lg:text-[20px] lg:pt-2 capitalize">
                      Founder
                    </span>
                  </div>
                </div>
                <div className="card  rounded-lg ">
                  <figure className="lg:px-10 pt-10">
                    <img
                      src={user2}
                      className="rounded-[50%] mx-auto lg:w-[194px] lg:h-[194px]  w-[73px] h-[73px]"
                      alt="user_photo"
                    />
                  </figure>
                  <div className="card-body py-0 items-center text-center">
                    <h2 className="card-title font-semibold text-[12px] lg:text-[28px] leading-[34px] text-white capitalize pt-3 lg:pt-[34px] ">
                      Ayeesha Mae
                    </h2>
                    <span className="text-white text-[8px] lg:text-[20px] lg:pt-2 capitalize">
                      Chief Marketing Officer
                    </span>
                  </div>
                </div>
                <div className="card  rounded-lg ">
                  <figure className="lg:px-10 pt-10">
                    <img
                      src={user3}
                      className="rounded-[50%] mx-auto lg:w-[194px] lg:h-[194px]  w-[73px] h-[73px]"
                      alt="user_photo"
                    />
                  </figure>
                  <div className="card-body py-0 items-center text-center">
                    <h2 className="card-title font-semibold text-[12px] lg:text-[28px] leading-[34px] text-white capitalize pt-3 lg:pt-[34px] ">
                      Julie Ocular
                    </h2>
                    <span className="text-white text-[8px] lg:text-[20px] lg:pt-2 capitalize">
                      Copywriter
                    </span>
                  </div>
                </div>
              </Bounce>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
