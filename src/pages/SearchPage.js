import React from "react";
import {useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import {searchByName} from '../helpers/requests';
import CategoryItem from '../components/Category/CategoryItem';

const SearchPage = () => {

  const {name} = useParams();
  const {status, data: services} = useQuery(
      ["services", name],
      () => searchByName(name));

  return (
      <>
        {status === "loading" && <p>Fetching data...</p>}
        {status === "success" && services?.map((item, idx) => (
            <CategoryItem key={idx} item={item}/>
        ))}
      </>
  )
}

export default SearchPage;
