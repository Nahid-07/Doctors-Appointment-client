import { useQuery } from "@tanstack/react-query";
import React from "react";

const DoctorList = () => {
  const { data: doctors } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Speciality</th>
              <th>Email</th>
              <th>Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor,i) => (
              <tr>
                <th>{i+1}</th>
                <td>{doctor.DoctorName}</td>
                <td>{doctor.speciality}</td>
                <td>{doctor.doctorEmail}</td>
                <td><img src={doctor.image} alt="doctor image" width="20px" /></td>
                <td><button className='btn btn-xs bg-red-500 text-white'>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorList;
