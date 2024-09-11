import React from "react";
//----------Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper/modules";

export default function GallerySlider({ img1, img2, img3, img4, img5 }) {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[220px] h-[320px] sm:w-[260px] sm:h-[360px] lg:w-[320px] lg:h-[420px]"
      >
        <SwiperSlide className="rounded-md border-y border-orange-300">
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="rounded-md border-y border-orange-300">
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="rounded-md border-y border-orange-300">
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="rounded-md border-y border-orange-300">
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="rounded-md border-y border-orange-300">
          <img src={img5} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
