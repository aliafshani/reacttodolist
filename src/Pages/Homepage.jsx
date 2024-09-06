import React from "react";
import { Navbar } from "../components/Navbar";
import Button from "../components/Button";

const Homepage = () => {
  return (
    <div className="h-dvh dark:text-violet-50 text-violet-950 font-sans text-center">
      <div className="flex sm:flex-row flex-col justify-evenly pt-10 sm:pt-20">
        <div className="text-center w-50 sm:text-right">
          <h1 className="sm:text-4xl text-2xl leading-relaxed sm:py-10 py-3 ">
            برنامه ریزی سریع و رقابت با رفقا
          </h1>
          <p className="mt-11 leading-8 px-3 ">
            شما از امروز یک وایکینگ هستید که برای اهداف شخصیتون در حال مبارزه و
            برنامه ریزی اید قبیله خوب انتخاب کنید و برای پیشرفت قبیله تلاش کنید
            تا مدال بگیرید
          </p>
          <p className="my-10 px-3 leading-8">
            بهترین اپلیکیشن توسعه فردی و برنامه ریزی ساخته شده با ❤ در TodoWars
          </p>
        </div>
        <div className="pt-10 d-flex w-50 justify-center">
          <img className="w-40 mx-auto" src="./public/logo2.png" alt="" />
          <p className="text-gray-500 font-bold text-2xl">TodoWars</p>
        </div>
      </div>
      <p className="mt-20">
        <Button
          dir={"clans"}
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
