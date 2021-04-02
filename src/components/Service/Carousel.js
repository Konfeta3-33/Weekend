import React from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./style.css";
import img from "./img/img.png"
import { baseUrl } from "../../constants";

SwiperCore.use([Pagination]);
const Carousel = ({ service }) => {
  const { Images } = service;

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
            className="img"
            src={`${baseUrl}/images/${item.name}`}
            alt={item.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
