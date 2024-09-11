import React from "react";
import { homeSlogan } from "../../utils/constants";

export default function AboutUs() {
  return (
    <div className="about-us">
      <figure className="flex items-end gap-2 mb-6 md:mb-[18px]">
        <img src="/images/icons/logo.svg" alt="logo" className="icon" />
        <figcaption className="text-subtitle text-orange-200">
          خانه قهوه
        </figcaption>
      </figure>
      <p className="text-regular leading-9 text-justify">{homeSlogan}</p>
    </div>
  );
}
