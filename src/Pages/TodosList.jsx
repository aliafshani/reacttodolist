import React from "react";
import { Outlet } from "react-router-dom";

const TodosList = () => {
  return (
    <div>
      TodosList
      <Outlet />
    </div>
  );
};

export default TodosList;
