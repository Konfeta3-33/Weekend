import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getServiceById } from "../helpers/requests";
import Service from "../components/Service";

const ServicePage = (toggleFavorites, favorites) => {
  const { id } = useParams();
  const { data: service } = useQuery(["service", id], () => getServiceById(id));

  if (!service) return null;
  const { name } = service;

  return (
    <>
      <h2 className="px-16 mb-5 text-xl font-semibold text-center">{name}</h2>
      <Service service={service} toggleFavorites={toggleFavorites} favorites={favorites}/>
    </>
  );
};

export default ServicePage;
