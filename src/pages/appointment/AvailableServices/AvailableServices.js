import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../bookingModal/BookingModal";
import Speener from "../../../Speener/Speener";
import { useQuery } from "@tanstack/react-query";

const AvailableServices = ({ selectedDate }) => {
  const [bookingOption, setBookingOption] = useState(null);

  const {data: appointmentOptions, isLoading} = useQuery({
    queryKey:["appointmentOptions"],
    queryFn : async ()=> {
      const res = await fetch("http://localhost:5000/appointmentOptions")
      const data = await res.json();
      return data;
    }
  })
  return (
    <section className="p-10 lg:p-0">
      <p className="text-[#19D3AE] text-2xl text-center">
        Available Appointments on {format(selectedDate, "PPP")}
      </p>
      {isLoading ? (
        <Speener></Speener>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {appointmentOptions.map((option) => (
            <AppointmentOption
              key={option._id}
              option={option}
              setBookingOption={setBookingOption}
            ></AppointmentOption>
          ))}
        </div>
      )}
      {bookingOption && (
        <BookingModal
          bookingOption={bookingOption}
          selectedDate={selectedDate}
          setBookingOption={setBookingOption}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableServices;
