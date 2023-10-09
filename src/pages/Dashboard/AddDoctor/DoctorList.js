import { useQuery } from "@tanstack/react-query";
import React from "react";
import Speener from "../../../Speener/Speener";

const DoctorList = () => {
  const {
    data: doctors,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors");
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/doctordelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const confirm = window.confirm('Are you sure you want to delete doctor?');
        if(confirm){
          if(data.deletedCount > 0){
            refetch()
          }
        }
          
      });
  };
  if (isLoading) {
    return <Speener></Speener>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>No.</th>
              <th>Name</th>
              <th>Speciality</th>
              <th>Email</th>
              <th>Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr className="text-lg">
                <th>{i + 1}</th>
                <td>{doctor.DoctorName}</td>
                <td>{doctor.speciality}</td>
                <td>{doctor.doctorEmail}</td>
                <td>
                  <img src={doctor.image} alt="doctor" width="50px" />
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(doctor._id)}
                    className="btn btn-xs bg-red-500 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorList;
