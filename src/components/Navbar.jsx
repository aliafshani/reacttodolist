import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../contexs/AppContext";
import { MoonNav } from "./MoonNav";
import SunNav from "./SunNav";

export const Navbar = () => {
  const { dark, darkModeHandler } = useContext(Context);
  console.log(dark);

  return (
    <nav className="navbar shadow-2xl bg-violet-950">
      <ul>
        <li
          className="cursor-pointer text-white"
          onClick={() => darkModeHandler()}
        >
          {dark ? <SunNav /> : <MoonNav />}
        </li>
        <li>
          <NavLink
            className={
              " bg-pink-600 active:bg-pink-700 focus:outline-none focus:ring focus:ring-violet-300 "
            }
            to={"/"}
          >
            خانه
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              " bg-pink-600 active:bg-pink-700 focus:outline-none focus:ring focus:ring-violet-300 "
            }
            to={"/todo"}
          >
            تودو لیست
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              " bg-pink-600 active:bg-pink-700 focus:outline-none focus:ring focus:ring-violet-300 "
            }
            to={"profiles"}
          >
            یوزرها
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              " bg-pink-600 active:bg-pink-700 focus:outline-none focus:ring focus:ring-violet-300 "
            }
            to={"about-us"}
          >
            درباره ما
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
