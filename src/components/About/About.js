import React from "react";
import MainImg from "./MainImg";
import RectLeft from "../../images/icons/RectLeft";
import RectRight from "../../images/icons/RectRight";

const About = () => {
  return (
    <div className="min-w-320 s:w-full sm:w-full md:w-full xl:w-full mx-auto flex flex-col text-center mb-7">
      <MainImg/>
      <div className="flex justify-center items-center w-72 mb-5 mx-auto">
        <RectLeft/>
        <h1 className="text-Sea w-full text-xl font-bold px-5">Weekend c детьми</h1>
        <RectRight/>
      </div>
      <span className="w-full px-5 text-base mb-5 text-justify">
        Это уникальный сервис по поиску различных вариантов досуга с детьми, который приятно удивит
        Вас своей простотой и информативностью.
      </span>
    </div>
  );
};

export default About;
