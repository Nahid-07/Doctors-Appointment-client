import { format } from "date-fns";
import React, { useContext } from "react";
import { ContextAuth } from "../../../ContextApi/ContextProvider";

const BookingModal = ({ bookingOption, selectedDate, setBookingOption }) => {
  const { name: treatmentName, slots } = bookingOption;
  const { user } = useContext(ContextAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const treatmentDate = e.target.treatmentDate.value;
    const slot = e.target.slot.value;

    const bookingData = {
      name,
      phone,
      email,
      treatmentName,
      treatmentDate,
      slot,
    };
    setBookingOption(null);
  };
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="text-white btn btn-sm btn-circle bg-[#293462] absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-[10px]">{treatmentName}</h3>
          <form onSubmit={handleSubmit} className="grid gap-5">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              value={format(selectedDate, "PP")}
              name="treatmentDate"
              disabled
            />
            <select className="select select-bordered w-full" name="slot">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full name"
              className="input input-bordered w-full"
              name="name"
              defaultValue={user.displayName}
              disabled
            />
            <input
              type="text"
              placeholder="Phone number"
              className="input input-bordered w-full"
              name="phone"
              required
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full"
              name="email"
              defaultValue={user.email}
              disabled
            />
            <p></p>
            <button
              type="submit"
              className="text-white p-3 rounded bg-[#293462] w-full"
            >
              BOOK APPOINTMENT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
