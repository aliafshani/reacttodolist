import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, style, dir }) => {
  return (
    <Link to={`${dir}`} className={`${style}`}>
      {children}
    </Link>
  );
};

export default Button;
