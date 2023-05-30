import React from "react";
import care from "../../../assets/images/treatment.png";

const DentalCareBanner = () => {
  return (
    <section className="lg:flex items-center gap-10 p-10 lg:p-0 ">
      <div className="lg:w-1/2 rounded-lg overflow-hidden mb-8 lg:mb-0">
        <img src={care} alt="" />
      </div>
      <div className="lg:w-1/2">
        <h1 className="text-[#3A4256] font-bold text-5xl">
          Exceptional Dental Care, on Your Terms
        </h1>
        <p className="text-justify my-5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div>
          <button className="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] uppercase text-white p-3 rounded">
            get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default DentalCareBanner;
