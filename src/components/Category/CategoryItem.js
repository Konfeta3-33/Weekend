import React from "react";
import { baseUrl } from "../../constants";
import heart from "./images/main/heart.svg";
import heartFull from "./images/main/heartFull.svg";

const CategoryItem = ({
  item: { id, name, isActive, Images },
  toggleFavorites,
  favorites,
  redirectToService,
}) => {
  const image = Images.find((item) => item.type === "primary");

  return isActive ? (
    <div onClick={redirectToService}
         className="flex flex-col w-34 s:w-40 md:w-40 mb-7 md:mr-4 cursor-pointer relative">
      <img src={`${baseUrl}/images/${image.name}`}
           className="mb-2.5 rounded-xl svg-category-small s:svg-category-big shadow-dropItem"
           style={{ width: 160, height: 120 }}/>
      <button onClick={(event) => toggleFavorites(event)}
              className="absolute top-24 right-2 s:top-24 s:right-2 focus:outline-none">
        <img src={favorites?.includes(id) ? heartFull : heart} style={{ width: 19, height: 17 }}/>
      </button>
      <h2 className="text-white w-full text-base md:text-base font-medium">{name}</h2>
    </div>) : null;
};

export default CategoryItem;
