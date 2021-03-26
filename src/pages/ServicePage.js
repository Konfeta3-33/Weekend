import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getServiceById } from "../helpers/requests";
import Specific from "../components/Specific";

const ServicePage = () => {
  const { id } = useParams();
  const { data: service } = useQuery(["service", id], () => getServiceById(id));
  
  if (!service) return null;
  console.log("service: ", service);

  const { name, Adresses, price, worktime, limits, Tags, description } = service;

  return (
    <>
      <h2 className="px-16 mb-5 text-xl font-semibold text-center">{name}</h2>
      <Specific Adresses={Adresses} price={price} worktime={worktime} limits={limits} Tags={Tags}/>
    </>
  );
};

export default ServicePage;
