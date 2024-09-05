import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children }) => {
  return (
    <Link to={"/profiles"} className="px-4 bg-emerald-700 rounded-lg py-2">
      {children}
    </Link>
  );
};

export default Button;
