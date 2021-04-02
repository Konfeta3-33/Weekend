import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import RectLeftWhite from '../components/Category/images/main/RectLeftWhite';
import RectRightWhite from '../components/Category/images/main/RectRightWhite';
import {useQuery} from 'react-query';
import {searchByName} from '../helpers/requests';
import CategoryItem from '../components/Category/CategoryItem';

const SearchPage = (toggleFavorites, favorites) => {

  const [isResult, setIsResult] = useState(false);
  let history = useHistory();
  const {name} = useParams();
  const {status, data: services} = useQuery(["services", name], () => searchByName(name));

  useEffect(() => {
    if (status === "success" && services.length === 0) {
      setIsResult(false);
    } else {
      setIsResult(true)
    }
  }, [services])

  const redirectToService = (item) => {
    history.push(`/service/${item.id}`);
  };

  return (
      <>
        <div className="min-w-320 s:w-full sm:w-full md:w-full xl:w-full mx-auto flex flex-col text-center -mb-2.5">
          <div className="bg-category bg-no-repeat bg-cover bg-center">
            <div className="flex flex-wrap justify-center flex-col p-4">
              <div className="flex justify-center items-center w-60 mb-5 mx-auto mt-4">
                <RectLeftWhite/>
                <h1 className="text-white w-full text-xl font-bold px-5 flex-shrink-0">
                  {name}
                </h1>
                <RectRightWhite/>
              </div>
              <div className="flex flex-wrap justify-between">
                {status === "loading" && ""}
                {isResult ? services?.map((item, idx) => (
                    <CategoryItem key={idx} item={item}
                                  toggleFavorites={(event) => toggleFavorites(event, item)}
                                  favorites={favorites}
                                  redirectToService={() => redirectToService(item)}/>
                )) : <h1 className="m-auto"> Ничего не найдено! </h1>}
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default SearchPage;
