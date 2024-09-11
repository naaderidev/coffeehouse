import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
//----------Components
import ImageLoader from "../../../components/Common/ImageLoader";
//----------Context
import { CartContext } from "../../../utils/providers/CartProvider";
//----------Icons
import { FaMinus, FaPlus } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";

export default function ProductCard(props) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [qty, setQty] = useState(1);
  const { insertItemToCart, productPriceByDiscount } = useContext(CartContext);
  return (
    <>
      <figure className="bg-white dark:bg-zinc-700 p-2 md:p-5 shadow-custom rounded-2xl border-b-2 border-orange-300">
        <div className={isImgLoaded ? "relative" : "hidden"}>
          <img
            loading="eager"
            className="w-32 md:w-48 h-32 md:h-48 mx-auto"
            src={props.image}
            alt=""
            onLoad={() => setIsImgLoaded(true)}
          />
          {props.isOnSale ? (
            <span className="absolute top-0 md:top-1.5 right-0.5 md:right-1.5 block h-5 md:h-[30px] leading-5 md:leading-[35px] bg-orange-300 text-white dark:text-zinc-700 text-link md:text-regular rounded-full px-2.5 md:px-3.5">
              {props.discount}%
            </span>
          ) : (
            ""
          )}
        </div>
        {!isImgLoaded && <ImageLoader style="h-32 md:h-48" />}
        <figcaption>
          <Link to={`/products/${props._id}`}>
            <h5 className="text-link md:text-subtitle text-zinc-700 dark:text-white line-clamp-2 mt-2 mb-1.5 md:mt-5 md:mb-2.5 min-h-[40px] md:min-h-[56px]">
              {props.title}
            </h5>
          </Link>
          {!props.count ? (
            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
              <div className="text-red-400">
                <span className="font-Dana text-base md:text-xl">
                  فعلا موجود نیست
                </span>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
              <div className="text-teal-600 dark:text-emerald-500">
                <span className="text-regular md:text-subtitle">
                  {productPriceByDiscount(
                    props.price,
                    props.discount
                  ).toLocaleString()}
                </span>
                <span className="text-link mr-1">تومان</span>
              </div>
              {props.isOnSale ? (
                <div className="line-through decoration-red-400 text-slate-400">
                  <span className="text-regular">
                    {props.price.toLocaleString()}
                  </span>
                  <span className="hidden md:inline text-link mr-1">تومان</span>
                </div>
              ) : (
                ""
              )}
            </div>
          )}
          <div className="flex items-center justify-between flex-wrap gap-2 mt-2.5 md:mt-4">
            <div className="flex gap-x-2 items-center text-gray-400 rounded-xl border border-orange-300 px-2 py-1">
              <FaPlus
                className="text-sm cursor-pointer hover:text-orange-300"
                onClick={() =>
                  qty >= props.count ? qty === props.count : setQty(qty + 1)
                }
              />
              <span className="text-regular">{qty}</span>
              <FaMinus
                className="text-sm cursor-pointer hover:text-orange-300"
                onClick={() => (qty <= 1 ? qty === 0 : setQty(qty - 1))}
              />
            </div>
            <button
              type="submit"
              className={`btn-gradient flex-center gap-2 text-link text-zinc-700 dark:text-orange-300 dark:hover:text-zinc-700 ${
                !props.count ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              disabled={!props.count}
              onClick={() => {
                insertItemToCart({ ...props }, qty)
              }}
            >
              <span>افزودن به سبد خرید</span>
              <HiOutlineShoppingCart className="icon-sm" />
            </button>
          </div>
        </figcaption>
      </figure>
    </>
  );
}
