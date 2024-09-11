import React from "react";
import { Link } from "react-router-dom";
//----------Icons
import { HiOutlineTrash } from "react-icons/hi2";

export default function CartCard(props) {
  return (
    <figure className="flex items-center gap-2.5 py-4">
      <img className="w-28 h-28" src={props.image} alt="product" />
      <figcaption className="grid grid-rows-2 py-2 w-full">
        <Link to={`/products/${props.productID}`}>
          <h4 className="text-regular text-zinc-700 dark:text-white">
            {props.title}
          </h4>
        </Link>
        <div className="flex flex-col gap-2 xs:flex-row xs:items-end xs:justify-between">
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
          <div className="flex gap-2">
            <button
              type="submit"
              className={`btn-gradient flex-center gap-2 text-link text-zinc-700 dark:text-orange-300 dark:hover:text-zinc-700`}
              disabled={false}
              onClick={props.removeProductHandler}
            >
              <span className="hidden sm:block">حذف از سبد خرید</span>
              <HiOutlineTrash className="icon-sm" />
            </button>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
