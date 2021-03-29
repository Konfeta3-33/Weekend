import React from "react";
import { baseUrl } from "../../constants";
import heart from "./images/main/heart.svg";
import heartFull from "./images/main/heartFull.svg";
import img from "./images/Group 1169.png";

const CategoryItem = ({
    item: { id, name, image, isActive },
    toggleFavorites,
    favorites,
    redirectToService,
  }) => {
  return isActive ? (
    <div onClick={redirectToService}
         className="flex flex-col w-34 s:w-40 md:w-40 mb-7 md:mr-4 cursor-pointer relative">
      <img src={`${baseUrl}/images/${image}`} className="mb-2.5 rounded-xl"
           style={{ width: 160, height: 120 }}/>
      {/*<img src={img} className="mb-2.5 rounded-xl svg-category-small s:svg-category-big"/>*/}
      <button onClick={(event) => toggleFavorites(event)}
              className="absolute top-16 right-2 s:top-18 s:right-2 focus:outline-none">
        <img src={favorites?.includes(id) ? heartFull : heart} style={{ width: 19, height: 17 }}/>
      </button>
      <h2 className="text-white w-full text-xs md:text-base font-medium">{name}</h2>
    </div>) : null;
};

export default CategoryItem;
