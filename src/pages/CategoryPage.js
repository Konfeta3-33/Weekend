import React from "react";
import SubCategories from "../components/SubCategories";
import Category from "../components/Category/Category";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import {
  getCategoryById, getServices,
  getSubCategoriesFull,
} from "../helpers/requests";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet";

const CategoryPage = (toggleFavorites, favorites) => {
  const { id } = useParams();
  const [filteredCategory, setFilteredCategory] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [subCatId, setSubCatId] = useState(null);

  let history = useHistory();
  const { data: category } = useQuery(["category", id], () => getCategoryById(id));

  const subCategoriesIds = category?.services?.map((item) => item.SubcategoryId);
  const uniqSubCategoriesIds = Array.from(new Set(subCategoriesIds));

  const { data: subCategories } = useQuery("subCategoriesFull", () => getSubCategoriesFull(uniqSubCategoriesIds),
    { enabled: !!subCategoriesIds });

  const { data: services } = useQuery("services", () => getServices());

  const filterForSubCategory = (item) => {
    const filtered = services.filter((el) => el.SubcategoryId === item.id);
    setFilteredCategory(filtered);
    setSubCatId(item.id);
    subCatId === item.id ? setToggle(!toggle) : setToggle(true);
  };

  useEffect(() => {
    Cookies.set("favorites", JSON.stringify(favorites), { expires: 10 });
  }, [favorites]);

  const redirectToService = (item) => {
    history.push(`/service/${item.id}`);
  };

  return (
    <>
      <Helmet>
        <title>В выходной ребенок дома? Топ лучших идей, чем можно заняться</title>
        <meta name="description" content="Все детские развлечения. Дома с ребенком"/>
      </Helmet>
      <SubCategories subCategories={subCategories} filterSubCategories={filterForSubCategory}/>
      <Category category={category} filteredCategory={filteredCategory} toggle={toggle}
                toggleFavorites={toggleFavorites} favorites={favorites}
                redirectToService={redirectToService}/>
    </>
  );
};

export default CategoryPage;
