import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../contexs/AppContext";
import { MoonNav } from "./MoonNav";
import SunNav from "./SunNav";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(Context);

  return (
    <nav className="navbar shadow-2xl bg-sky-700 dark:bg-violet-950">
      <ul>
        <li
          className="cursor-pointer text-white"
          onClick={() => {
            toggleTheme();
            console.log(theme);
          }}
        >
          {theme === "dark" ? <SunNav /> : <MoonNav />}
        </li>
        <li>
          <NavLink
            className={
              "focus:underline  hover:text-sky-300 transition ease-in-out delay-300 font-normal"
            }
            to={"/"}
          >
            خانه
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              "focus:underline  hover:text-sky-300 transition ease-in-out delay-300 font-normal"
            }
            to={"/clans"}
          >
            قبیله ها
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              " focus:underline hover:text-sky-300 transition ease-in-out delay-300  font-normal"
            }
            to={"profiles"}
          >
            یوزرها
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              "focus:underline  hover:text-sky-300 transition ease-in-out delay-300 font-normal "
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
