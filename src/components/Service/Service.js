import React from "react";
import Specific from "../Specific";
import Carousel from "./Carousel";

const Service = ({ service }) => {

  return (
    <div>
      <Carousel service={service} />
      <Specific service={service}/>
    </div>
  );
};

export default Service;
