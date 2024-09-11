import React, { useContext } from "react";
//----------Components
import EmptyCart from "./EmptyCart";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
import CartBody from "./CartBody";
//----------Contexts
import { CartContext } from "../../../utils/providers/CartProvider";
import { HiOutlineShoppingCart } from "react-icons/hi2";

export default function UserCartHeadDesk(props) {
  const { userCart } = useContext(CartContext);
  return (
    <div className="relative group">
      <div className="py-3 cursor-pointer">
        <HiOutlineShoppingCart className="icon-md" />
      </div>
      <div className="absolute left-0 w-96 h-screen text-zinc-700 dark:text-white tracking-normal submenu-box overflow-scroll">
        {userCart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            {props.mode === "desktop" ? <CartHeader /> : ""}
            <CartBody />
            <CartFooter
              className={props.mode === "desktop" ? "mb-24" : "mb-8"}
            />
          </>
        )}
      </div>
    </div>
  );
}
