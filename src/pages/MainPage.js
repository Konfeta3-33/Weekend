import React from "react";
import About from "../components/About";
import CategorySection from "../components/Category";
import Tags from "../components/Tags";
import { useQuery } from "react-query";
import { getGroups } from "../helpers/requests";
import { Helmet } from "react-helmet";

const MainPage = () => {

  const { data: groups } = useQuery("groups", () => getGroups());

  return (
    <div className="App">
      <Helmet>
        <title>Куда сходить с ребенком в выходной? Топ лучших видов досуга</title>
        <meta name="description" content="Отдых с детьми может быть разный"/>
      </Helmet>
      <About/>
      <CategorySection/>
      <Tags groups={groups}/>
    </div>
  );
};

export default MainPage;
