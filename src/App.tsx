import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Auth/Login";
import FogotPassword from "./pages/Auth/FogotPassword";
import HomePage from "./pages/Home/HomePage";
import Profile from "./pages/Home/Profile/Profile";
import Income from "./pages/Home/Income/Income";
import Project from "./pages/Home/Project/Project";
import TimeSheet from "./pages/Home/Timesheet/TimeSheet";
import TimeSheetCheckOut from "./pages/Home/Timesheet/TimeSheetCheckOut";
import Signup from "./layouts/signup/Signup";
import SignupNext from "./layouts/signup/SignupNext";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="login" element={<Login />} />
          <Route path="login/fogotpassword" element={<FogotPassword />} />
          <Route path='signup' element={<Signup />} />
          <Route path="signup/signupnext" element={<SignupNext />} />
        </Route>
        <Route path="/" element={<HomePage />}>
            <Route path="profile" element={<Profile />} />
            <Route path="income"  element={<Income />} />
            <Route path="project"  element={<Project />} />
            <Route path="timesheet"  element={<TimeSheet />} />
            <Route path="timesheet/checkout" element={<TimeSheetCheckOut />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
