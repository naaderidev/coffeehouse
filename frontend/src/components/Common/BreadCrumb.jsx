import React from "react";
import { NavLink } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi2";

export default function Breadcrumb({ link, sublink }) {
  function toPascalCase(str) {
    return (" " + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => {
      return chr.toUpperCase();
    });
  }

  return (
    <div className="container hidden xs:flex flex-col mt-24 px-8">
      <nav className="flex items-center justify-start gap-x-2 mb-8 text-regular sm:text-subtitle text-zinc-700 dark:text-orange-200">
        <NavLink to="/" className=" hover:text-orange-300">
          صفحه اصلی
        </NavLink>
        <HiChevronLeft className="icon-sm" />
        <NavLink to={link} className="hover:text-orange-300">
          <span>{link === "/blog/1" ? "مجله" : "فروشگاه"}</span>
        </NavLink>
        <HiChevronLeft className="icon-sm" />
        <h3>{sublink}</h3>
      </nav>
    </div>
  );
}
