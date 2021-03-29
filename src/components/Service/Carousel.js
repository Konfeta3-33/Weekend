import React from "react";
import SwiperCore, { Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./style.css";
import img from "./img/img.png";

SwiperCore.use([Pagination, Scrollbar]);
const Carousel = ({ service }) => {
  const { Images } = service;

  return (
    <Swiper
      slidesPerView={1}
      pagination={{ clickable: true }}
      wrapperTag="div"
    >
      <SwiperSlide direction="horizontal"><img className="img" src={img}/></SwiperSlide>
      <SwiperSlide direction="horizontal"><img className="img" src={img}/></SwiperSlide>
      <SwiperSlide direction="horizontal"><img className="img" src={img}/></SwiperSlide>
      {/*{Images.map((item, idx) => (*/}
      {/*  <SwiperSlide*/}
      {/*    zoom*/}
      {/*    key={idx}*/}
      {/*    tag="image"*/}
      {/*    virtualIndex={idx}*/}
      {/*    direction="horizontal"*/}
      {/*  >*/}
      {/*    <img*/}
      {/*      src={item.src}*/}
      {/*      alt={item.name}*/}
      {/*      height="200"*/}
      {/*      width="300"*/}
      {/*    />*/}
      {/*  </SwiperSlide>*/}
      {/*))}*/}
    </Swiper>
  );
};

export default React.memo(Carousel);
