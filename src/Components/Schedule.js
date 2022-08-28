import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import user_5 from "../assets/user-5.png";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";
import "react-datepicker/dist/react-datepicker.css";
import "./Sejedule.css";
import { Bounce } from "react-reveal";

const Schedule = () => {
  const [selected, setSelected] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <section className="lg:my-[93px] my-[58px]">
      <div className="container mx-auto">
        <div className="max-w-[1246px] mx-auto lg:shadow">
          <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center">
            <div className="pt-10">
              <div className="card max-w-[506px]">
                <Bounce left cascade>
                  <figure className="px-10">
                    <img
                      src={user_5}
                      alt="Shoes"
                      className="w-[74px] h-[74px] lg:w-[100px] lg:h-[100px]"
                    />
                  </figure>
                </Bounce>
                <div className="card-body pt-0 items-center text-center">
                  <Bounce left cascade>
                    <span className="text-[16px] text-[464646] pt-[11px] pb-[16px] leading-[19px]">
                      Esther Howard
                    </span>
                    <h2 className="card-title font-bold text-black text-[24px] leading-[48px] py-0">
                      1-On-1 Meeting
                    </h2>
                    <p className="text-[21px] font-bold leading-[26px] text-black lg:pb-[31px] pb-[22px]">
                      Schedule your 30-Minute Call with Yoji
                    </p>
                    <span className="text-[16px] text-start leading-[26px] text-[#404040] pb-[20px] lg:pb-7">
                      Everything you need to know about working with Adverlo will be explained in
                      this call with our founder. We will be able to have a clear understanding of
                      the goals you want to be accomplished for your ad campaigns. During this call,
                      you will be shown case studies of the different successes Adverlo has created
                      for its clients.
                    </span>
                    <span className="text-[16px] text-start leading-[26px] text-[#404040]">
                      Find a time on the calendar that works for you, so you’ll be able to start
                      your adventure with Adverlo.
                    </span>
                  </Bounce>
                </div>
              </div>
            </div>
            <div className="lg:pt-10 pt-[30px]">
              <div id="datePiker" className="datePiker_shadow">
                <Bounce right cascade>
                  <h4 className="text-[21px] leading-[28px] border-b pt-[33px] lg:pt-12 pb-5 text-center text-black font-semibold">
                    Select a day
                  </h4>
                </Bounce>
                <div className="lg:p-[30px] p-[20px]">
                  <Bounce right cascade>
                    <DayPicker mode="single" selected={selected} onSelect={setSelected} />
                  </Bounce>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
