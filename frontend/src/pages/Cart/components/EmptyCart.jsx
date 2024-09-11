import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";

export default function EmptyCart() {
  return (
    <div id="empty-cart">
      <div className="flex flex-col items-center gap-2 p-8">
        <HiOutlineShoppingCart className="icon text-orange-300" />
        <h3 className="text-regular text-zinc-700 dark:text-white bg-transparent mb-10">
          هنوز محصولی به سبد خرید اضافه نشده
        </h3>
        <NavLink to="/store/1" className="btn-teal text-regular">
          بازگشت به فروشگاه
        </NavLink>
      </div>
    </div>
  );
}
