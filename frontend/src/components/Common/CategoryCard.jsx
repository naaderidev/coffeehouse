import React from "react";

export default function CategoryCard({ title, img, filterHandler }) {
  return (
    <div
      className="bg-orange-200 border-b-4 border-orange-300 p-1 md:p-4 w-20 h-20 md:w-36 md:h-36 rounded-full flex flex-col items-center justify-center gap-2 transition-colors hover:bg-orange-300 cursor-pointer"
      onClick={filterHandler}
    >
      <img src={img} alt={title} className="icon" />
      <h4 className="text-regular text-center text-zinc-700 hidden md:block">
        {title}
      </h4>
    </div>
  );
}
