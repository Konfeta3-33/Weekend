import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getServiceById } from "../helpers/requests";
import Specific from "../components/Specific";
import Service from "../components/Service";

const ServicePage = () => {
  const { id } = useParams();
  const { data: service } = useQuery(["service", id], () => getServiceById(id));

  if (!service) return null;
  const { name } = service;

  return (
    <>
      <h2 className="px-16 mb-5 text-xl font-semibold text-center">{name}</h2>
      <Service service={service}/>
    </>
  );
};

export default ServicePage;
