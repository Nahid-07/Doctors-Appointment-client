import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../home/Home/Home";
import Login from "../login/Login";
import Appointment from "../appointment/Appointment/Appointment";
import SignUp from "../Signup/SignUp";
import DashboardLayout from "../../layout/DashboardLayout";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import MyAppointment from "../Dashboard/MyAppointment";

export const router = createBrowserRouter([
    {
        path:'/',
        element : <Main></Main>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/appointment",
                element : <Appointment></Appointment>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/signup",
                element : <SignUp></SignUp>
            }
        ]
    },
    {
        path : '/dashbord',
        element: <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
        children:[
            {
                path : 'myappointment',
                element: <MyAppointment></MyAppointment>
            }
        ]
    }
])