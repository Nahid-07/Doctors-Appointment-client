import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../home/Home/Home";
import Login from "../login/Login";
import Appointment from "../appointment/Appointment/Appointment";

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
            }
        ]
    }
])