import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Speener from '../../../Speener/Speener';
import { toast } from 'react-hot-toast';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ["allUsers"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/allUsers")
            
          const data = await res.json();
          return data;
        },
      });

      const handleSubmit = (id)=>{
        fetch(`http://localhost:5000/users/${id}`,{
            method : "PUT"
        })
        .then( res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success("admin role created")
                refetch()
            }
        })
      }
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
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
                  <td>{user?.role !== "admin" ? <button onClick={()=> handleSubmit(user._id)} className='btn btn-xs bg-blue-500 text-white'>Make Admin</button> : "Admin"}</td>
                  <td><button className='btn btn-xs bg-red-500 text-white'>Delete</button></td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    );
};

export default AllUsers;