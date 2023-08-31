import React from 'react';
import { NavLink } from 'react-router-dom';
import { FingerPrintIcon, UserPlusIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import useAdmin from '../Shared/hooks/useAdmin';
import { useContext } from 'react';
import { ContextAuth } from '../../ContextApi/ContextProvider';

const UserMenu = () => {
  const {user} = useContext(ContextAuth)
  const [isAdmin] = useAdmin(user?.email)
    return (
        <>
        <NavLink
          to="my-appointment"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
            }`
          }
        >
          <FingerPrintIcon className="w-5 h-5" />
  
          <span className="mx-4 font-medium">My Appointment</span>
        </NavLink>
        {
          isAdmin && <><NavLink
          to="allUsers"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
            }`
          }
        >
          <UserGroupIcon className="w-5 h-5" />
  
          <span className="mx-4 font-medium">All Users</span>
        </NavLink></>
        }
  
        <NavLink
          to="become-host"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
            }`
          }
        >
          <UserPlusIcon className="w-5 h-5" />
  
          <span className="mx-4 font-medium">Become A Host</span>
        </NavLink>
      </>
    );
};

export default UserMenu;