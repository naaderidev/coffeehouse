import React from "react";
import { HiOutlineShoppingCart, HiBars3 } from "react-icons/hi2";

export default function HeaderMobileIcons({
  setMobileStoreMenu,
  setMobileCart,
}) {
  return (
    <div
      id="mobile-logo"
      className="flex md:hidden items-center justify-between bg-white dark:bg-zinc-700 h-16 px-4"
    >
      <HiBars3
        className="icon-md text-zinc-700 dark:text-orange-200"
        onClick={() => setMobileStoreMenu((prev) => !prev)}
      />
      <figure>
        <img src="/images/icons/logo.svg" alt="logo" className="icon" />
      </figure>
      <HiOutlineShoppingCart
        className="icon-md text-zinc-700 dark:text-orange-200"
        onClick={() => setMobileCart((prev) => !prev)}
      />
    </div>
  );
}
