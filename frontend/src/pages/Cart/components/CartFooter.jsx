import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
//----------Contexts
import { CartContext } from "../../../utils/providers/CartProvider";

export default function CartFooter(props) {
  const { totalPrice } = useContext(CartContext);
  return (
    <div
      className={`flex items-center justify-between pt-5 ${props.className}`}
    >
      <div>
        <span className="text-link text-gray-300">مبلغ قابل پرداخت</span>
        <h5 className="text-subtitle text-zinc-700 dark:text-white">
          {totalPrice}
          <span className="font-Dana text-sm mr-1">تومان</span>
        </h5>
      </div>
      <NavLink to="/cart" className="btn-teal text-link">
        ثبت سفارش
      </NavLink>
    </div>
  );
}
