import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../bookingModal/BookingModal";
import Speener from "../../../Speener/Speener";

const AvailableServices = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [bookingOption, setBookingOption] = useState(null);
  const [loadingData, setLoadingData] = useState(false);
  console.log(bookingOption);
  useEffect(() => {
    setLoadingData(true);
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setAppointmentOptions(data);
        setLoadingData(false);
      });
  }, []);
  return (
    <section className="p-10 lg:p-0">
      <p className="text-[#19D3AE] text-2xl text-center">
        Available Appointments on {format(selectedDate, "PPP")}
      </p>
      {loadingData ? (
        <Speener></Speener>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {appointmentOptions.map((option) => (
            <AppointmentOption
              key={option.id}
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
