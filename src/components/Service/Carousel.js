import React from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./style.css";
import { baseUrl } from "../../constants";
import heartFull from "../Category/images/main/heartFull.svg";
import heart from "../Category/images/main/heart.svg";

SwiperCore.use([Pagination]);
const Carousel = ({ service, toggleFavorites, favorites }) => {
  const { id, Images } = service;

  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      wrapperTag="div"
    >
      {Images.map((item, idx) => (
        <SwiperSlide
          key={idx}
          virtualIndex={idx}
        >
          <img
            className="object-contain md:object-scale-down m-auto"
            src={`${baseUrl}/images/${item.name}`}
            alt={item.name}
          />
          <button onClick={(event) => toggleFavorites(event, service)}
                  className="absolute top-40 right-2 s:top-48 s:right-2 focus:outline-none md:right-14 md:top-96">
            <img src={favorites?.includes(id) ? heartFull : heart}
                 style={{ width: 19, height: 17 }}/>
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
