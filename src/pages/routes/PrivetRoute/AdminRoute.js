import React, { useContext } from "react";
import { ContextAuth } from "../../../ContextApi/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";
import Speener from "../../../Speener/Speener";
import useAdmin from "../../Shared/hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(ContextAuth);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Speener></Speener>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
