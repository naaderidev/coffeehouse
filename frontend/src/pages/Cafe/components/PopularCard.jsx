import React, { useState } from "react";
//----------Components
import ImageLoader from "../../../components/Common/ImageLoader";
//----------Icons
import { HiCheckBadge } from "react-icons/hi2";

export default function PopularCard({ image, title, angle }) {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  return (
    <div
      className={`relative bg-orange-200/85 rounded-b-md w-48 h-60 m-auto ${
        angle === "right"
          ? "rounded-tr-[100px] rounded-tl-md"
          : "rounded-tl-[100px] rounded-tr-md"
      }`}
    >
      <img
        src="/images/icons/logo-black.svg"
        alt=""
        className={`icon-md absolute ${
          angle === "right" ? "left-0" : "right-0"
        }`}
      />
      {/* <h6
        className={`text-regular text-teal-800 absolute top-2 ${
          angle === "right" ? "left-2" : "right-2"
        }`}
      >
        235
      </h6> */}
      <div className={isImgLoaded ? "block" : "hidden"}>
        <img
          src={image}
          alt=""
          className={`rounded-full w-44 h-44 absolute top-0 ${
            angle === "right" ? "left-3.5" : "right-3.5"
          }`}
          onLoad={() => setIsImgLoaded(true)}
        />
      </div>
      {!isImgLoaded && <ImageLoader style="w-44 h-44" />}
      <div className="absolute bottom-0 right-1 left-0 pb-3 flex items-center justify-start gap-1">
        <HiCheckBadge className="icon-sm text-teal-800" />
        <span className="text-md tracking-tight font-MorabbaMedium text-zinc-700">
          {title}
        </span>
      </div>
    </div>
  );
}
