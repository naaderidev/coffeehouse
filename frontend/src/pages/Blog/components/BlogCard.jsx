import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
//----------Components
import ImageLoader from "../../../components/Common/ImageLoader";
//----------Icons
import { HiChevronRight } from "react-icons/hi2";

export default function BlogCard({ id, image, title, date, month, year }) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  return (
    <>
      <figure className="group flex flex-col gap-3 md:gap-2.5 bg-white dark:bg-zinc-700 shadow-custom rounded-md border-b-2 border-orange-300">
        <div
          className={
            isImgLoaded
              ? "relative rounded-md rounded-bl-4xl overflow-hidden md:pb-2"
              : "hidden"
          }
        >
          <img
            // loading="lazy"
            className="w-full h-36 md:h-52"
            src={image}
            alt=""
            onLoad={() => setIsImgLoaded(true)}
          />
          <div className="absolute inset-0 hidden md:flex-center invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-gradient-to-r from-zinc-700/50 to-zinc-800/50 transition-all">
            <figure className="flex items-end gap-2">
              <img src="/images/icons/logo.svg" alt="" className="icon" />
              <figcaption className="text-subtitle text-orange-200">
                خانه قهوه
              </figcaption>
            </figure>
          </div>
        </div>
        {!isImgLoaded && <ImageLoader style="h-36 md:h-52" />}
        <figcaption className="flex flex-col justify-between mb-4 md:mb-0 md:flex-row md:justify-between p-4">
          <Link to={`/articles/${id}`} className="ml-2 pb-2">
            <p className="text-zinc-700 dark:text-white text-link md:text-lg leading-6 line-clamp-2">
              {title}
            </p>
          </Link>
          <div className="flex flex-col md:flex-row gap-5">
            <span className="block bg-gray-100 dark:bg-white/10 w-full h-px md:w-px md:h-[61px]"></span>
            <div className="flex flex-row items-center justify-between flex-wrap gap-2">
              <div className="flex flex-row md:flex-col md:ml-[18px] text-teal-600 dark:text-emerald-500 text-left">
                <span className="text-link md:text-subtitle">{date}</span>
                <span className="text-link">{month}</span>
                <span className="text-link">{year}</span>
              </div>
              <NavLink
                to="/articles/"
                className="flex items-center gap-2 md:hidden text-orange-300 rounded-full pr-2 hover:bg-orange-200/20"
              >
                <span className="text-link">مطالعه</span>
                <HiChevronRight className="icon-sm rotate-180" />
              </NavLink>
            </div>
          </div>
        </figcaption>
      </figure>
    </>
  );
}
