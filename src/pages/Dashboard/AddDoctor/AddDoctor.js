import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Speener from "../../../Speener/Speener";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const imageApiKey = process.env.REACT_APP_api_key;
  const navigate = useNavigate()
  const { data: specialities, isLoading } = useQuery({
    queryKey: ["appointmentSpecialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });
  const { handleSubmit, register } = useForm();

  const doctorData = (data) => {
    const image = data.doctorImage[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageApiKey}`, {
      method: "POST",
      body: formData,
    }).then((res) => res.json().then((imageData) => {
      if(imageData.success){
        const doctorData = {
          DoctorName : data.doctorName,
          doctorEmail : data.doctorEmail,
          speciality : data.speciality,
          image : imageData.url
        }
        fetch("http://localhost:5000/doctorCollection",{
          method : "POST",
          headers : {
            "content-type" : "application/json"
          },
          body: JSON.stringify(doctorData)
        }).then(res => res.json()).then(data => {
          console.log(data);
          if(data.acknowledged){
            toast.success("doctor added successfully")
            navigate("/dashbord/doctorlist")
          }
        })
      }
    }));
  };
  if (isLoading) {
    return <Speener></Speener>;
  }
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(doctorData)}
        className="border p-5 md:p-20 shadow-md rounded-lg mt-40"
      >
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
          <select
            {...register("speciality")}
            className="select select-bordered w-full max-w-xs mb-5"
          >
            {specialities.map((speciality) => (
              <option key={speciality._id} value={speciality.name}>
                {speciality.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            {...register("doctorImage")}
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
