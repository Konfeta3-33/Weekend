import React from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../../pages/style.css";
import img from "./img/img.png";

SwiperCore.use([Pagination]);
const Carousel = ({ service }) => {
  const { Images } = service;

  return (
    <div className="text-center">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        // tag="service"
        pagination={{ clickable: true }}
        // centeredSlides
        // centerInsufficientSlides
        wrapperTag="div"
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide direction="horizontal"><img src={img}/></SwiperSlide>
        <SwiperSlide direction="horizontal"><img src={img}/></SwiperSlide>
        <SwiperSlide direction="horizontal"><img src={img}/></SwiperSlide>
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
    </div>
  );
};

export default React.memo(Carousel);
