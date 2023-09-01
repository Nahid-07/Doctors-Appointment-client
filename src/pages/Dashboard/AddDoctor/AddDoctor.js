import React from "react";

const AddDoctor = () => {
  return (
    <div className="flex justify-center">

      <form action="" className="border p-5 md:p-20 shadow-md rounded-lg mt-40">
        <div>
          <label htmlFor="" className="text-lg font-semibold text-gray-700">Name</label> <br />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="my-5">
          <label htmlFor="" className="text-lg font-semibold text-gray-700">Email</label> <br />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
