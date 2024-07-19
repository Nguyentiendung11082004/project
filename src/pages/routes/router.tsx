import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../layouts/main";
import Profile from "../Home/Profile/Profile";
import Income from "../Home/Income/Income";
import Project from "../Home/Project/Project";
import TimeSheet from "../Home/Timesheet/TimeSheet";
import TimeSheetCheckOut from "../Home/Timesheet/TimeSheetCheckOut";
import { LoginLayout } from "../../layouts";
import Login from "../Auth/Login";
import FogotPassword from "../Auth/FogotPassword";
import Signup from "../Auth/Signup";
import SignupNext from "../Auth/SignupNext";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "income",
                element: <Income />
            },
            {
                path: "project",
                element: <Project />
            },
            {
                path: "timesheet",
                element: <TimeSheet />
            },
            {
                path: "timesheet/checkout",
                element: <TimeSheetCheckOut />
            }
        ]
    },
    {
        path: '/login',
        element: <LoginLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/login/fogotpassword',
                element: <FogotPassword />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'signup/signupnext',
                element: <SignupNext />
            }
        ]
    }
])

export default routers