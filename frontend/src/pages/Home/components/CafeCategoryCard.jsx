import React, { useState } from "react";
//----------Components
import ImageLoader from "../../../components/Common/ImageLoader";
//----------Icons
import { GiCoffeeCup } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export default function CafeCategoryCard({ title, subtitle, image, icon }) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  return (
    <>
      <figure className="bg-white dark:bg-zinc-700  shadow-custom rounded-md border-b-2 border-orange-300">
        <div className={isImgLoaded ? "relative" : "hidden"}>
          <img
            // loading="lazy"
            className="w-full h-36 md:h-64 mx-auto rounded-md border-b-4 border-orange-300"
            src={image}
            alt=""
            onLoad={() => setIsImgLoaded(true)}
          />
        </div>
        {!isImgLoaded && <ImageLoader style="h-36 md:h-64" />}
        <figcaption className=" p-2 md:p-5">
          <div className="flex items-start justify-between pt-2 ">
            <h5 className="text-regular md:text-subtitle line-clamp-2 mt-2 mb-1.5 md:mt-5 min-h-[40px] md:min-h-[56px] text-zinc-700 dark:text-white">
              {title}
            </h5>
            <img src={icon} alt="" className="icon-md md:icon" />
          </div>
          <h6 className="text-link leading-6 md:text-regular md:leading-9 line-clamp-2 text-zinc-700 dark:text-white my-2">
            {subtitle}
          </h6>
          <div className="flex items-end justify-end mt-3 text-zinc-700 dark:text-orange-300">
            <NavLink
              to="/cafe/1"
              className="flex items-end gap-2 btn-gradient shadow-md"
            >
              <span className="text-link">مشاهده منو</span>
              <GiCoffeeCup className="icon-sm md:icon-md" />
            </NavLink>
          </div>
        </figcaption>
      </figure>
    </>
  );
}
