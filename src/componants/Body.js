import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <>
      <div>
        <div className="w-screen h-20">
          <Header />
        </div>

        <Outlet />
      </div>
    </>
  );
};
export default Body;
