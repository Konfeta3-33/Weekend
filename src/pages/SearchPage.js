import React from "react";
import {useParams} from 'react-router-dom';
import {useQuery} from 'react-query';
import {searchByName} from '../helpers/requests';
import SubCategories from '../components/SubCategories';

const SearchPage = () => {

  const {name} = useParams();
  const {status, data: categories} = useQuery(
      ["services", name],
      () => searchByName(name));

  return (
      <>
        {status === "loading" && <p>Fetching data...</p>}
        {console.log(categories)}
        {status === "success" && (<SubCategories subCategories={categories}/>)}
      </>
  )
}

export default SearchPage;