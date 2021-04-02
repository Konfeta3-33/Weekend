import React from "react";
import { baseUrl } from "../../constants";
import { Link } from "react-router-dom";

const CategorySectionItem = ({ item: { id, name, image, isActive } }) => {
  return isActive ? (
    <Link to={`/categories/${id}`} className="flex flex-col w-34 s:w-40 md:w-40 mb-7 md:mr-4 cursor-pointer">
      <img src={`${baseUrl}/images/${image}`} className="svg-categorySection-small s:svg-categorySection-big mb-2.5 rounded-xl"/>
      <h2 className="text-white w-full text-lg md:text-base font-medium">{name}</h2>
    </Link>) : null;
};

export default CategorySectionItem;
