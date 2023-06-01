import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <section className="lg:my-40 my-10 p-10 lg:p-0">
      <div className="lg:flex items-center ">
        {/* left side content div */}
        <div className="mb-10 lg:mb-0 lg:w-1/2 w-full flex justify-center">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          ></DayPicker>
        </div>
        {/* right side content */}
        <div className="lg:w-1/2 w-full">
          <img src={chair} alt="" />
        </div>
      </div>
      <p>Your selected date is {format(selectedDate, "PPP")} </p>
    </section>
  );
};

export default AppointmentBanner;
