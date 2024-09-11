import React, { useContext } from "react";
//----------Components
import TitleBox from "../../../components/Common/TitleBox";
import ProductCard from "./ProductCard";
import { ProductsContext } from "../../../utils/providers/ProductsProvider";
import ErrorBox from "../../../components/Common/ErrorBox";
import PendingBox from "../../../components/Common/PendingBox";
//----------Contexts
import CartProvider from "../../../utils/providers/CartProvider";
//----------Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function BestSelling() {
  const { bestSelling, error, isPending } = useContext(ProductsContext);
  return (
    <CartProvider>
      <section className="pt-8 md:pt-16 lg:pt-24">
        <div className="container">
          <TitleBox
            title="محصولات پرفروش"
            subTitle="پرفروش ترین محصولات به انتخاب شما عزیزان"
          />
          {error && <ErrorBox />}
          {isPending && <PendingBox />}
          {!error && !isPending && (
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
                {bestSelling.map((product) => {
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
          )}
        </div>
      </section>
    </CartProvider>
  );
}
