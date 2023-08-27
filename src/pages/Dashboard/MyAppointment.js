import React, { useContext } from "react";
import { ContextAuth } from "../../ContextApi/ContextProvider";
import { useQuery } from "@tanstack/react-query";
import Speener from "../../Speener/Speener";

const MyAppointment = () => {
  const { user } = useContext(ContextAuth);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Treatment Name</th>
            <th>Date</th>
            <th>Slot</th>
          </tr>
        </thead>
        {isLoading ? (
          <Speener></Speener>
        ) : (
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id} className="bg-base-200">
                <th>{i + 1}</th>
                <td>{booking.name}</td>
                <td>{booking.treatmentName}</td>
                <td>{booking.treatmentDate}</td>
                <td>{booking.slot}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default MyAppointment;
