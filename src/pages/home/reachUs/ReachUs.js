import React from "react";
import clock from "../../../assets/icons/clock.svg";
import location from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const ReachUs = () => {
  return (
    <div className="lg:flex justify-between mt-20 gap-5 px-10 lg:px-0">
      <div className="rounded-md bg-gradient-to-r from-[#2D9596] to-[#0FCFEC] p-4 flex space-x-4 items-center">
        <div>
          <img src={clock} alt="" />
        </div>
        <div className="text-white">
          <p className="font-bold text-lg">Opening Hours</p>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>
      <div className="rounded-md bg-[#2D9596] p-4 flex space-x-4 items-center my-8 lg:my-0">
        <div>
          <img src={location} alt="" />
        </div>
        <div className="text-white">
          <p className="font-bold text-lg">Opening Hours</p>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>
      <div className="rounded-md bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] p-4 flex space-x-4 items-center">
        <div>
          <img src={phone} alt="" />
        </div>
        <div className="text-white">
          <p className="font-bold text-lg">Opening Hours</p>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>
    </div>
  );
};

export default ReachUs;
