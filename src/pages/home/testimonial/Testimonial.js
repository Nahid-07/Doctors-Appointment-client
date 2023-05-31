import React from "react";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";

const Testimonial = () => {
  return (
    <section className="p-10 lg:p-0">
      <div className="mb-20">
        <h4 className="text-lg text-[#19D3AE] font-semibold">Testimonial</h4>
        <h2 className="text-4xl text-[#3A4256]">What Our Patients Says</h2>
      </div>
      <div className="lg:flex justify-between gap-10">
        <div className="">
          <div>
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </div>
          <div className="flex items-center mt-12">
            <div className="mr-6 border-2 border-[#19D3AE] rounded-full">
              <img src={people1} alt="" />
            </div>
            <div>
              <p className="block font-bold">Winson Herry</p>
              <p>California</p>
            </div>
          </div>
        </div>
        <div className="my-5 lg:my-0">
          <div>
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </div>
          <div className="flex items-center mt-12">
            <div className="mr-6 border-2 border-[#19D3AE] rounded-full">
              <img src={people2} alt="" />
            </div>
            <div>
              <p className="block font-bold">Winson Herry</p>
              <p>California</p>
            </div>
          </div>
        </div>
        <div>
        <div>
          <div>
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </div>
          <div className="flex items-center mt-12">
            <div className="mr-6 border-2 border-[#19D3AE] rounded-full">
              <img src={people3} alt="" />
            </div>
            <div>
              <p className="block font-bold">Winson Herry</p>
              <p>California</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
