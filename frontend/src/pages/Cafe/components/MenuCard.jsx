import React, { useState } from "react";
//----------Components
import ImageLoader from "../../../components/Common/ImageLoader";
//----------Icons
import { HiPlus, HiOutlineHeart, HiCheckBadge } from "react-icons/hi2";

export default function MenuCard({
  _id,
  image,
  title,
  price,
  firstTag,
  secondTag,
  ingredientArray,
}) {
  const [isIngredientVisible, setIsIngredientVisible] = useState(false);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  return (
    <figure className="bg-white dark:bg-zinc-700 rounded-xl mb-4 overflow-hidden relative min-h-[340px]">
      <div className={isImgLoaded ? "relative" : "hidden"}>
        <img
          className="w-full h-[210px] rounded-br-[48px]"
          src={image}
          alt=""
          onLoad={() => setIsImgLoaded(true)}
        />
        <HiOutlineHeart className="icon-lg bg-orange-200/85 text-orange-500 font-extrabold p-2 rounded-full  absolute right-2 top-2 hover:fill-orange-500" />
      </div>
      {!isImgLoaded && <ImageLoader style="h-[210px]" />}
      <figcaption className="p-4">
        <div
          className={`flex items-center justify-between ${
            isIngredientVisible ? "mb-2" : "mb-12"
          }`}
        >
          <h3 className="text-regular lg:text-subtitle text-start text-zinc-700 dark:text-orange-300">
            {title}
          </h3>
          <h4 className="text-link lg:text-regular text-orange-300">{price}</h4>
        </div>
        <div className="bg-orange-200/85 hover:bg-teal-800 text-zinc-700 hover:text-orange-300 absolute right-0 bottom-0 rounded-tl-2xl p-3">
          <HiPlus
            className="icon-sm "
            onClick={() => setIsIngredientVisible((prev) => !prev)}
          />
        </div>
        <div className="flex-center flex-col sm:flex-row gap-1 absolute left-3 bottom-1 sm:bottom-3">
          <span className="px-2 py-0.5 bg-orange-200/85 text-zinc-700 rounded-full text-link">
            {firstTag}
          </span>
          <span className="px-2 py-0.5 bg-orange-200/85 text-zinc-700 rounded-full text-link">
            {secondTag}
          </span>
        </div>
        <div
          className={
            isIngredientVisible
              ? "bg-orange-200/75 absolute left-0 top-0 bottom-0 w-2/3 rounded-br-[48px] py-2.5 pr-6 transition-all"
              : "hidden"
          }
        >
          <figure className="flex items-end gap-2 mb-4">
            <img
              src="/images/icons/logo-black.svg"
              alt="logo"
              className="icon"
            />
            <figcaption className="hidden xl:block text-subtitle text-zinc-700">
              خانه قهوه
            </figcaption>
          </figure>
          <ul className="flex flex-col justify-center text-link text-zinc-700">
            <>
              {ingredientArray.map((item, index) => {
                return (
                  <li key={index} className="mb-1 flex items-center gap-2">
                    <HiCheckBadge className="icon-sm" />
                    <span>{item}</span>
                  </li>
                );
              })}
            </>
          </ul>
        </div>
      </figcaption>
    </figure>
  );
}
