import React from "react";
import About from "../components/About";
import CategorySection from "../components/Category";
import Tags from "../components/Tags";
import { useQuery } from "react-query";
import { getGroups } from "../helpers/requests";

const MainPage = () => {

  const { data: groups } = useQuery("groups", () => getGroups());

  return (
    <div className="App">
      <About/>
      <CategorySection/>
      <Tags groups={groups} />
    </div>
  );
};

export default MainPage;
