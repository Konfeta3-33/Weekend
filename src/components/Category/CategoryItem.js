import React from "react";
import { baseUrl } from "../../constants";
import { Link } from "react-router-dom";
import heart from "./images/main/heart.svg";
import heartFull from "./images/main/heartFull.svg";
import img from "./images/Group 1169.png"

const CategoryItem = ({ item: { id, name, image, isActive }, toggleFavorites, favorites }) => {
  return isActive ? (
    <Link to={`/event/${id}`}
          className="flex flex-col w-40 mb-7 md:mr-4 cursor-pointer relative">
      {/*<img src={`${baseUrl}/images/${image}`} className="mb-2.5 rounded-xl"*/}
      {/*     style={{ width: 160, height: 120 }}/>*/}
      <img src={img} className="mb-2.5 rounded-xl"
           style={{ width: 160, height: 120 }}/>
      <img src={favorites?.includes(id) ? heartFull : heart} style={{ width: 19, height: 17 }}
           onClick={toggleFavorites} className="absolute top-24 right-2"/>
      <h2 className="text-white w-full text-xs md:text-base font-medium">{name}</h2>
    </Link>) : null;
};

export default CategoryItem;
