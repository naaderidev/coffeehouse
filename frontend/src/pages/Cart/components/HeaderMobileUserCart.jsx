import React, { useContext } from "react";
//----------Components
import EmptyCart from "./EmptyCart";
import CartHeader from "./CartHeader";
import CartFooter from "./CartFooter";
import CartBody from "./CartBody";
//----------Contexts
import { CartContext } from "../../../utils/providers/CartProvider";

export default function UserCartHeadMob(props) {
  const { userCart } = useContext(CartContext);
  return (
    <div className="border-b border-b-gray-300 dark:border-b-white/10 divide-y divide-gray-100 dark:divide-white/10">
      {userCart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          {props.mode === "desktop" ? <CartHeader /> : ""}
          <CartBody />
          <CartFooter className={props.mode === "desktop" ? "mb-24" : "mb-8"} />
        </>
      )}
    </div>
  );
}
