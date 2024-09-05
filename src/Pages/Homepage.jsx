import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const Homepage = () => {
  return (
    <div className="text-violet-50 dark:text-violet-950 font-sans text-center">
      <Navbar />
      <h1 className="text-4xl py-14 ">بهترین ها بهترین برنامه هارا دارند!</h1>
      <p className="my-10">
        بهترین اپلیکیشن توسعه فردی و برنامه ریزی ساخته شده با ❤ در everyTodos
      </p>
      <p> با بیش از هرچقدر یوزر در ماه :)))) </p>

      <p className="mt-20">
        <Link
          className=" rounded-lg hover:bg-violet-500 px-12 py-3 text-yellow-50 bg-violet-900"
          to={"todo"}
        >
          برووو بریم
        </Link>
      </p>
    </div>
  );
};

export default Homepage;
