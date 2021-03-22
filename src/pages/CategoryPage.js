import React from "react";
import { useState } from "react";
import SubCategories from "../components/SubCategories";
import Category from "../components/Category/Category";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import {
  getCategoryById, getServices,
  getSubCategoriesFull,
} from "../helpers/requests";

const CategoryPage = () => {
  const { id } = useParams();
  const [filteredCategory, setFilteredCategory] = useState(null);
  const [toggle, setToggle] = useState(false);

  const { data: category } = useQuery(["category", id], () => getCategoryById(id));

  const subCategoriesIds = category?.services?.map((item) => item.SubcategoryId);

  const { data: subCategories } = useQuery("subCategoriesFull", () => getSubCategoriesFull(subCategoriesIds),
    { enabled: !!subCategoriesIds });

  const { data: services } = useQuery("services", () => getServices());

  const filterForSubCategory = (item) => {
    const filtered = services.filter((el) => el.SubcategoryId === item.id);
    setToggle(!toggle);
    setFilteredCategory(filtered);
    console.log("filtered:", filtered);
  };

  return (
    <>
      <SubCategories subCategories={subCategories} filterSubCategories={filterForSubCategory}/>
      <Category category={category} filteredCategory={filteredCategory} toggle={toggle}/>
    </>
  );
};

export default CategoryPage;
