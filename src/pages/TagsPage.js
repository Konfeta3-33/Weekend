import React from "react";
import RectLeftWhite from "../components/Category/images/main/RectLeftWhite";
import RectRightWhite from "../components/Category/images/main/RectRightWhite";
import CategoryItem from "../components/Category/CategoryItem";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getTagById, getGroups } from "../helpers/requests";

const TagsPage = () => {
  const { id } = useParams();
  const { data: tag } = useQuery(["tag", id], () => getTagById(id));

  const { data: groups } = useQuery("groups", () => getGroups()); 
  console.log("groups: ", groups);

  if (!tag) return null;
  const { name, Services } = tag;

  console.log("tag: ", tag);

  return (
    <>
      <div className="w-95 md:w-full xl:w-full mx-auto -mb-2.5 flex flex-col text-center">
        <div className="p-4 bg-tagsBlue bg-no-repeat bg-cover bg-center">
        {/* bg-category tagsOrange */}
          <div className="flex flex-wrap justify-center flex-col">
            <div className="w-60 mt-4 mb-5 mx-auto flex justify-center items-center">
              <RectLeftWhite />
              <h1 className="text-white w-full text-xl font-semibold flex-shrink-0">
                {name}
              </h1>
              <RectRightWhite />
            </div>
            <div className="flex flex-wrap justify-between">
              {Services.map((item, idx) => (
                <CategoryItem item={item} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TagsPage;
