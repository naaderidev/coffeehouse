import React from "react";

export default function BasketCard(props) {
  return (
    <figure className="flex items-center gap-2.5 py-4">
      <img className="w-28 h-28" src={props.image} alt="product" />
      <figcaption className="grid grid-rows-2 py-2">
        <h4 className="text-regular text-zinc-700 dark:text-white leading-8 line-clamp-2">
          {props.title}
        </h4>
        <div className="space-y-2">
        <span className="text-sm text-link text-zinc-700 dark:text-white">
              تعداد : {props.qty} عدد
            </span>
            <span className="text-zinc-700 dark:text-white"> | </span>
            <span className="text-link text-teal-600 dark:text-emerald-500">
              تخفیف : {props.discount} %
            </span>
          <h5 className="text-regular text-zinc-700 dark:text-white">
            {props.price}
            <span className="font-Dana text-sm mr-1">تومان</span>
          </h5>
        </div>
      </figcaption>
    </figure>
  );
}
