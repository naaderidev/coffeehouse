import React from "react";
import ProductCard from "../../Store/components/ProductCard";
//----------Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

export default function ProductSlider({ products }) {
  return (
    <div className="px-8">
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
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "#115e59",
          "--swiper-pagination-bullet-inactive-color": "#d4d4d8",
          "--swiper-pagination-bullet-size": "20px",
        }}
      >
        {[...products]
          .reverse()
          .slice(0, 8)
          .map((product) => {
            return (
              <SwiperSlide key={product._id} className="flex-center pb-16">
                <ProductCard
                  _id={product._id}
                  isOnSale={product.isOnSale}
                  count={product.count}
                  discount={product.discount}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
