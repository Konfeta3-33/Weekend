import React from "react";
import RectLeftWhite from "./images/main/RectLeftWhite";
import RectRightWhite from "./images/main/RectRightWhite";
import CategoryItem from "./CategoryItem";

const Category = ({ category, filteredCategory, toggle, toggleFavorites, favorites, redirectToService }) => {
  if (!category) return null;
  const { name, services } = category;

  return (
    <div className="min-w-320 s:w-full sm:w-full md:w-full xl:w-full mx-auto flex flex-col text-center -mb-2.5">
      <div className="bg-category bg-no-repeat bg-cover bg-center">
        <div className="flex flex-wrap justify-center flex-col p-4">
          <div className="flex justify-center items-center w-60 mb-5 mx-auto mt-4">
            <RectLeftWhite/>
            <h1
              className="text-white w-full text-xl font-bold px-5 flex-shrink-0">{name}</h1>
            <RectRightWhite/>
          </div>
          <div className="flex flex-wrap justify-between">
            {toggle ? filteredCategory.map((item, idx) => (
              <CategoryItem item={item} key={idx} favorites={favorites} toggleFavorites={(event) => toggleFavorites(event, item)} redirectToService={() => redirectToService(item)}/>
            )) : services?.map((item, idx) => (
              <CategoryItem item={item} key={idx} favorites={favorites} toggleFavorites={(event) => toggleFavorites(event, item)} redirectToService={() => redirectToService(item)}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
