import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Speener from '../../../Speener/Speener';

const AllUsers = () => {

    const { data: users, isLoading } = useQuery({
        queryKey: ["allUsers"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/allUsers")
            
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
              <th>Email</th>
              {/* <th>Date</th>
              <th>Slot</th> */}
            </tr>
          </thead>
          {isLoading ? (
            <Speener></Speener>
          ) : (
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id} className="bg-base-200">
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    );
};

export default AllUsers;