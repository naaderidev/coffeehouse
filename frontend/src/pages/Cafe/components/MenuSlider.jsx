import React from "react";
import MenuCard from "./MenuCard";
//----------Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

export default function MenuSlider({menu}) {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper h-[420px]"
      style={{
        "--swiper-pagination-color": "#115e59",
        "--swiper-pagination-bullet-inactive-color": "#d4d4d8",
        "--swiper-pagination-bullet-size": "20px",
      }}
    >
      {menu.map((item) => {
        return (
          <SwiperSlide
            key={item._id}
            className="bg-transparent text-center flex-center slider-height"
          >
            <MenuCard
              image={`/${item.image}`}
              title={item.title}
              price={item.price}
              firstTag={item.firstTag}
              secondTag={item.secondTag}
              ingredientArray={item.ingredient.split("،")}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
