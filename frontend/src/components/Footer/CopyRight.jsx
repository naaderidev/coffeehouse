import React from "react";

export default function CopyRight() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-y-4 text-regular text-gray-300 lg:w-[90%] px-4 lg:px-0 mx-auto pt-11 border-t border-white/10">
      <div className="flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-300"></span>
        </span>
        <p>
          تمام حقوق این پروژه متعلق به{" "}
          <span className="text-orange-300">خانه قهوه</span> می باشد و استفاده
          از آن پیگرد قانونی دارد.
        </p>
      </div>
      <p className="text-left">
        Copyright © 2023 <span className="text-orange-300">Coffee House</span>.
        All rights reserved
      </p>
    </div>
  );
}
