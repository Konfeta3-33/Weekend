import React from "react";
import Specific from "../Specific";
import Carousel from "./Carousel";
import Description from "./Description";

const Service = ({ service, toggleFavorites, favorites }) => {

  return (
    <div>
      <Carousel service={service} toggleFavorites={toggleFavorites} favorites={favorites}/>
      <Specific service={service}/>
      <Description service={service}/>
    </div>
  );
};

export default Service;
