import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../home/Home/Home";
import Login from "../login/Login";
import Appointment from "../appointment/Appointment/Appointment";
import SignUp from "../Signup/SignUp";
import DashboardLayout from "../../layout/DashboardLayout";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import MyAppointment from "../Dashboard/MyAppointment";
import AdminRoute from "./PrivetRoute/AdminRoute";
import AllUsers from "../Dashboard/allUsers/AllUsers";
import AddDoctor from "../Dashboard/AddDoctor/AddDoctor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    // dashbord route start from herecd
    path: "/dashbord",
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: "my-appointment",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addDoctor",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
    ],
  },
]);
