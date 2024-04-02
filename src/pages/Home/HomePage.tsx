import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="content" style={{ display: "flex" }}>
        <Sidebar />
        <div className="outlet__content">
        <Outlet />
        </div>
     
      </div>
    </>
  );
};

export default HomePage;
