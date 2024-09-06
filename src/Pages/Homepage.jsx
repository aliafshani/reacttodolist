import React from "react";
import { Navbar } from "../components/Navbar";
import Button from "../components/Button";

const Homepage = () => {
  return (
    <div className="h-dvh dark:text-violet-50 text-violet-950 font-sans text-center">
      <Navbar />
      <div className="flex sm:flex-row flex-col justify-evenly pt-10 sm:pt-20">
        <div className="text-center sm:text-right">
          <h1 className="text-4xl leading-relaxed py-10 ">
            برنامه ریزی سریع و رقابت با رفقا
          </h1>
          <p className="my-10">
            بهترین اپلیکیشن توسعه فردی و برنامه ریزی ساخته شده با ❤ در
            everyTodos
          </p>
          <p> با بیش از هرچقدر یوزر در ماه :)))) </p>
        </div>
        <div className="pt-10 d-flex justify-center">
          <img className="w-40 mx-auto" src="./public/logo2.png" alt="" />
          <p className="text-gray-500 font-bold text-2xl">everyTodo</p>
        </div>
      </div>
      <p className="mt-20">
        <Button
          dir={"todo"}
          style={
            " rounded-lg hover:bg-violet-500 px-12 py-3 text-yellow-50 bg-violet-900"
          }
        >
          برو بریم
        </Button>
      </p>
    </div>
  );
};

export default Homepage;
