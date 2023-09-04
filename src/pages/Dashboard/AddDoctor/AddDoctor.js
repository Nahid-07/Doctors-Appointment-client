import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {handleSubmit, register} = useForm()
  const doctorData = (data)=>{
    console.log(data);
  }
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(doctorData)} className="border p-5 md:p-20 shadow-md rounded-lg mt-40">
        <div>
          <label htmlFor="" className="text-lg font-semibold text-gray-700">
            Name
          </label>{" "}
          <br />
          <input
            {...register("doctorName")}
            type="text"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="my-5">
          <label htmlFor="" className="text-lg font-semibold text-gray-700">
            Email
          </label>{" "}
          <br />
          <input
          {...register("doctorEmail")}
            type="email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <select {...register("speciality")} className="select select-bordered w-full max-w-xs mb-5">
            <option value="Teeth Cleaning">
            Teeth Cleaning
            </option>
            <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
            <option value="Cavity Protection">Cavity Protection</option>
            <option value="Teeth Orthodontics">Teeth Orthodontics</option>
            <option value="Oral Surgery">Oral Surgery</option>
            <option value="Pediatric Dental">Pediatric Dental</option>
          </select>
        </div>
        <div>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <button className="bg-[#3A4256] w-full py-3 rounded-md text-white font-medium mt-5">
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
