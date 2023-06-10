import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../home/Home/Home";
import Login from "../login/Login";
import Appointment from "../appointment/Appointment/Appointment";
import SignUp from "../Signup/SignUp";
import Dashbord from "../Dashboard/Dashbord";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

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
        path  : '/dashbord',
        element : <PrivetRoute><Dashbord></Dashbord></PrivetRoute>
    }
])