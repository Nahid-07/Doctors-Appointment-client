import React from "react";
import bg from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className=" p-10 lg:p-20 lg:my-40 my-20"
    >
      <div className="mb-8 text-center">
        <h5 className="text-lg text-[#19D3AE] mb-3 font-semibold">
          Contact Us
        </h5>
        <h2 className=" text-4xl text-white">Stay connected with us</h2>
      </div>
      <div className="flex flex-col items-center">
        <div className="">
          <input
            type="email"
            placeholder="Email address"
            className="w-full md:w-96 p-3 rounded-md"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full md:w-96 p-3 rounded-md my-8"
          />
        </div>
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Your message"
            className="w-full md:w-96 p-3 rounded-md"
          ></textarea>
        </div>
        <div>
          <button className="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] uppercase text-white p-3 rounded mt-8">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
