import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Speener from '../../../Speener/Speener';
import { toast } from 'react-hot-toast';
import { ContextAuth } from '../../../ContextApi/ContextProvider';

const AllUsers = () => {

    const {user} = useContext(ContextAuth)
    const {email} = user;

    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ["allUsers"],
        queryFn: async () => {
          const res = await fetch("http://localhost:5000/allUsers")
            
          const data = await res.json();
          return data;
        },
      });

      const handleSubmit = (id, email)=>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method : "PUT",
            headers :{
                "content-type": "application/json"
            },
            body : JSON.stringify({email : email})
        })
        .then( res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success("admin role created")
                refetch()
            }
        })
      }
      const handleDelete = (id)=>{
        fetch(`http://localhost:5000/deleteuser/${id}`,{
          method : "DELETE",
        }).then(res => res.json()).then(data => {
          console.log(data);
          refetch()
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
                  <td>{user?.role !== "admin" ? <button onClick={()=> handleSubmit(user._id,email)} className='btn btn-xs bg-blue-500 text-white'>Make Admin</button> : "Admin"}</td>
                  <td><button onClick={()=>handleDelete(user._id)} className='btn btn-xs bg-red-500 text-white'>Delete</button></td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    );
};

export default AllUsers;