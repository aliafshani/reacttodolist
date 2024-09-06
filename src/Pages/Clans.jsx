import React from "react";
import { Outlet } from "react-router-dom";

const Clans = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl mt-40">انتخاب کلن</h1>
      <Outlet />
    </div>
  );
};

export default Clans;
