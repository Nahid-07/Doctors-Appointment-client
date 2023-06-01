import React from "react";

const AppointmentOption = ({option}) => {
    const {name, slots} = option;
  return (
    <div className="card shadow">
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
      <p>{slots.length} {slots.length > 1 ? "spaces" : "space" } available</p>
      <div className="card-actions">
        <button className="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] uppercase text-white p-3 rounded">Book Appointment</button>
      </div>
    </div>
  </div>
  );
};

export default AppointmentOption;
