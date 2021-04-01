import React from "react";
import RectLeftWhite from "../components/Category/images/main/RectLeftWhite";
import RectRightWhite from "../components/Category/images/main/RectRightWhite";
import CategoryItem from "../components/Category/CategoryItem";
import { useQuery } from "react-query";
import { useParams, useHistory } from "react-router-dom";
import { getTagById } from "../helpers/requests";

const TagsPage = (toggleFavorites, favorites) => {
  
  let history = useHistory();

  const { id } = useParams();
  const { data: tag } = useQuery(["tag", id], () => getTagById(id));

  if (!tag) return null;
  const { name, Services, Group: { color } } = tag;

  const redirectToService = (item) => {
    history.push(`/service/${item.id}`);
  };

  return (
    <>
      <div
        className="min-w-320 s:w-full sm:w-full md:w-full xl:w-full mx-auto -mb-2.5 flex flex-col text-center">
        <div
          className="p-4 bg-no-repeat bg-cover bg-center color" style={{ backgroundColor: color }}
        >
          <div className="flex flex-wrap justify-center flex-col">
            <div className="w-64 mt-4 mb-5 mx-auto flex justify-center items-center">
              <RectLeftWhite/>
              <h1 className="text-white w-full text-xl font-semibold flex-shrink-0">
                {name}
              </h1>
              <RectRightWhite/>
            </div>
            <div className="flex flex-wrap justify-between">
              {Services.map((item, idx) => (
                <CategoryItem item={item} key={idx} favorites={favorites} toggleFavorites={(event) => toggleFavorites(event, item)} redirectToService={() => redirectToService(item)}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TagsPage;
