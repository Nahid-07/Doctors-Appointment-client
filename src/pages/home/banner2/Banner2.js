import React from "react";
import bg from "../../../assets/images/appointment.png";
// import doctor from "../../../assets/images/doctor.png"
import doctor from "../../../assets/images/doctor-small.png";

const Banner2 = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="lg:my-40 my-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center p-10 lg:p-0">
        <div className="hidden lg:block">
          <img src={doctor} alt="" className="-mt-24" />
        </div>
        <div>
          <p className="text-lg font-bold text-[#19D3AE]">Appointment</p>
          <h3 className="text-4xl mt-5 text-white">Make an appointment Today</h3>
          <p className="my-5 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div>
            <button className="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] uppercase text-white p-3 rounded">
              get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
