import React from "react";
import { Outlet, useParams } from "react-router-dom";

const ClanDeatail = () => {
  const { id } = useParams();
  return (
    <div>
      ClanDeatail{id}
      <Outlet />
    </div>
  );
};

export default ClanDeatail;
