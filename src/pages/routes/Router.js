import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../home/Home/Home";
import Login from "../login/Login";

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
                path : "/login",
                element : <Login></Login>
            }
        ]
    }
])