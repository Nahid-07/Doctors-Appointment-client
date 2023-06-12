import React from "react";
import { Bars } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

const Speener = () => {
  const location = useLocation();
  return (
    <div
      className={`flex justify-center  ${
        location.pathname === "/dashbord"
          ? "h-screen items-center"
          : "h-0 mt-10"
      }`}
    >
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Speener;
