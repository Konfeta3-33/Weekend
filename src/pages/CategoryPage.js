import React from "react";
import SubCategories from "../components/SubCategories";
import Category from "../components/Category/Category";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import {
  getCategoryById, getServices,
  getSubCategoriesFull,
} from "../helpers/requests";
import Cookies from "js-cookie";

const CategoryPage = () => {
  const { id } = useParams();
  const [filteredCategory, setFilteredCategory] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [subCatId, setSubCatId] = useState(null);
  const [favorites, setFavorites] = useState(() => Cookies.getJSON("favorites") || []);

  const { data: category } = useQuery(["category", id], () => getCategoryById(id));

  const subCategoriesIds = category?.services?.map((item) => item.SubcategoryId);

  const { data: subCategories } = useQuery("subCategoriesFull", () => getSubCategoriesFull(subCategoriesIds),
    { enabled: !!subCategoriesIds });

  const { data: services } = useQuery("services", () => getServices());

  const filterForSubCategory = (item) => {
    const filtered = services.filter((el) => el.SubcategoryId === item.id);
    setFilteredCategory(filtered);
    setSubCatId(item.id);
    subCatId === item.id ? setToggle(!toggle) : setToggle(true);
  };

  const toggleFavorites = (item) => {
    const alreadyFavorite = favorites.indexOf(id) > -1;
    const newFavorites = alreadyFavorite ? favorites.filter((id) => id !== item.id) : [...favorites, item.id];
    setFavorites(newFavorites);
  };

  useEffect(() => {
    Cookies.set("favorites", JSON.stringify(favorites), { expires: 10 });
  }, [favorites]);


  return (
    <>
      <SubCategories subCategories={subCategories} filterSubCategories={filterForSubCategory}/>
      <Category category={category} filteredCategory={filteredCategory} toggle={toggle}
                toggleFavorites={toggleFavorites} favorites={favorites}/>
    </>
  );
};

export default CategoryPage;
