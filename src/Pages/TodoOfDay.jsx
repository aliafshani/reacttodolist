import React from "react";
import { useParams } from "react-router-dom";

const TodoOfDay = () => {
  const param = useParams();
  return <div>TodoOfDay{param.id}</div>;
};

export default TodoOfDay;
