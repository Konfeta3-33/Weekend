import React from "react";
import Specific from "../Specific";
import Carousel from "./Carousel";
import Description from "./Description";

const Service = ({ service }) => {

  return (
    <div>
      <Carousel service={service} />
      <Specific service={service}/>
      <Description service={service}/>
    </div>
  );
};

export default Service;
