import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import PopUp from "../components/PopUp";
import About from "../components/About";
import CategorySection from "../components/Category";
import Tags from "../components/Tags";
import { useQuery } from "react-query";
import { getGroups } from "../helpers/requests";
import Cookies from "js-cookie";

const MainPage = () => {
  const [modalActive, setModalActive] = useState(false);
  
  const [city, setCity] = useState(null);

  useEffect(() => {
    if (Cookies.get("city") === void 0) {
      setModalActive(true);
    } else {
      setCity(Cookies.get("city"));
    }
  }, []);

  useEffect(() => {
    if (city !== null) {
      Cookies.set("city", city, { expires: 10 });
    }
  }, [city]);

  const { data: groups } = useQuery("groups", () => getGroups());

  return (
    <div className="App">
      <button
        className="p-1 text-xs focus:outline-none"
        onClick={() => setModalActive(true)}
      >
        Город: {city}
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <PopUp setActive={setModalActive} setCity={setCity}/>
      </Modal>
      <About/>
      <CategorySection/>
      <Tags groups={groups} />
    </div>
  );
};

export default MainPage;
