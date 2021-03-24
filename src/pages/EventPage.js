import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getServiceById } from "../helpers/requests";
import Specific from "../components/Specific";

const EventPage = () => {
  const { id } = useParams();
  const { data: services } = useQuery(["services", id], () => getServiceById(id));
  
  if (!services) return null;
  console.log("services: ", services);

  const { name, Adresses, price, worktime, limits, Tags, description } = services;

  return (
    <>
      <Specific Adresses={Adresses} price={price} worktime={worktime} limits={limits} Tags={Tags}/>
    </>
  );
};

export default EventPage;
