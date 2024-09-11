import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
//----------Contexts
import { CartContext } from "../../../utils/providers/CartProvider";
//----------Icons
import { HiChevronRight } from "react-icons/hi2";

export default function CartHeader() {
  const { userCart } = useContext(CartContext);
  return (
    <div className="flex items-center justify-between text-link">
      <span className="text-gray-300">{userCart.length} مورد</span>
      <NavLink to="/cart" className="flex items-center text-orange-300">
        <span>مشاهده سبد خرید</span>
        <HiChevronRight className="icon-sm rotate-180" />
      </NavLink>
    </div>
  );
}
