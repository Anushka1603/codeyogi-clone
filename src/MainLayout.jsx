import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
function MainLayout(props) {
  return (
    <div className="flex items-stretch h-screen">
      <SideBar></SideBar>
      <div className="p-5 bg-gray-100 grow">
        <Outlet />
      </div>
    </div>
  );
}
export default MainLayout;
