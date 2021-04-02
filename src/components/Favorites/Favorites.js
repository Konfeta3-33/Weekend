import React, { useState } from "react";
import { useQuery } from "react-query";
import { getServices } from "../../helpers/requests";
import { useHistory } from "react-router-dom";
import FavoritesEmpty from "./FavoritesEmpty";
import CategoryItem from "../Category/CategoryItem";
import { Helmet } from "react-helmet";

const Favorites = ({ toggleFavorites, favorites }) => {
  const [count, setCount] = useState(4);
  const { data: services } = useQuery("services", () => getServices());
  let history = useHistory();

  const favoriteFilter = services?.filter(({ id }) => favorites?.includes(id));

  const onOpen = () => {
    if (count < favoriteFilter.length) {
      setCount(count + 4);
    }
  };

  const redirectToService = (item) => {
    history.push(`/service/${item.id}`);
  };

  return (
    <>
      <Helmet>
        <title>Топ мест отдыха с детьми</title>
        <meta name="description" content="Избранные места отдыха"/>
      </Helmet>
      <div
        className="min-w-320 s:w-full sm:w-full md:w-full xl:w-full mx-auto flex flex-col text-center -mb-2.5">
        <div className="bg-category sm:bg-Sea bg-no-repeat bg-cover bg-center">
          <div className="flex flex-wrap justify-center flex-col p-4">
            <div className="flex justify-center items-center w-60 mb-5 mx-auto mt-4">
              <div>
                <svg width="18" height="40" viewBox="0 0 18 40" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.29861 0.676131C11.9011 -0.845163 18 0.676131 18 0.676131C18 0.676131 10.5 6.22222 8.29861 9.77778C4.22439 16.3582 4.23094 23.5299 8.29861 30.2222C11 34.6667 18 39.3239 18 39.3239C18 39.3239 11.9011 40.8452 8.29861 39.3239C-2.7662 34.6513 -2.7662 5.34868 8.29861 0.676131Z"
                    fill="white"/>
                </svg>
              </div>
              <h1
                className="text-white w-full text-xl font-semibold px-5 flex-shrink-0">Избранное</h1>
              <div>
                <svg width="18" height="40" viewBox="0 0 18 40" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.70139 39.3239C6.09889 40.8452 0 39.3239 0 39.3239C0 39.3239 7.5 33.7778 9.70139 30.2222C13.7756 23.6418 13.7691 16.4701 9.70139 9.77777C7 5.33333 0 0.676132 0 0.676132C0 0.676132 6.09889 -0.845161 9.70139 0.676132C20.7662 5.34867 20.7662 34.6513 9.70139 39.3239Z"
                    fill="white"/>
                </svg>
              </div>
            </div>
            <div>
              <div className={`flex flex-wrap ${favorites.length === 0 ? "justify-center" : "justify-between"}`}>
                {favorites.length !== 0 ? favoriteFilter?.slice(0, count).map((item, id) => (
                  <CategoryItem item={item} key={id} favorites={favorites}
                                redirectToService={() => redirectToService(item)}
                                toggleFavorites={(event) => toggleFavorites(event, item)}/>
                )) : (<FavoritesEmpty/>)}
              </div>
              <div>
                <button onClick={onOpen}
                        className="focus:outline-none rounded-xl border border-gray-50 w-20 text-center py-2.5 font-medium text-base text-gray-50">Еще
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;

