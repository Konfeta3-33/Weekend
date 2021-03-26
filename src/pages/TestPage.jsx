import React, { useState } from "react"
import picture from "./index.png"
import { Swiper, SwiperSlide } from "swiper/react"
import "./style.css"
import "swiper/swiper-bundle.css"
const initalState = [
    { id: 1, src: picture, name: "Картинка" },
    { id: 2, src: picture, name: "Картинка" },
    { id: 3, src: picture, name: "Картинка" },
    { id: 4, src: picture, name: "Картинка" },
]

const TestPage = () => {
    const [images, setImages] = useState(initalState)

    return (
        <>
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                tag="section"
                loop
                centeredSlides
                centerInsufficientSlides
                wrapperTag="div"
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {images.map((item, idx) => (
                    <SwiperSlide
                        zoom
                        key={item.id}
                        tag="figure"
                        virtualIndex={idx}
                        direction="horizontal"
                    >
                        <img
                            src={item.src}
                            alt={item.name}
                            height="200"
                            width="300"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default React.memo(TestPage)
