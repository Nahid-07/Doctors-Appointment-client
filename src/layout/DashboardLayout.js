import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="md:flex relative min-h-screen">
      <Sidebar></Sidebar>
      <div className="flex-1 ">
        <div className="p-5 md:ml-64">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
