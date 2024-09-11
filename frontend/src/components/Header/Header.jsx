import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import HeaderLoginSetting from "./HeaderLoginSetting";
import HeaderMobileIcons from "./HeaderMobileIcons";
import HeaderMobileNavbar from "./HeaderMobileNavbar";
import HeaderNavbar from "./HeaderNavbar";
import HeaderUserCart from "../../pages/Cart/components/HeaderUserCart";
import HeaderMobileUserCart from "../../pages/Cart/components/HeaderMobileUserCart";

import CartProvider from "../../utils/providers/CartProvider";
import { HiOutlineShoppingCart, HiMiniXMark } from "react-icons/hi2";
import AuthProvider from "../../utils/providers/AuthProvider";
import ThemeSetting from "./ThemeSetting";

export default function Header() {
  const [mobileStoreMenu, setMobileStoreMenu] = useState(false);
  const [mobileCart, setMobileCart] = useState(false);

  return (
    <>
      {/* Header in Desktop Mode */}
      <header className="fixed top-9 left-0 right-0 z-50 hidden md:flex items-center w-[92%] h-24 bg-black/50 mx-auto px-10 py-5 rounded-3xl backdrop-blur">
        <div className="flex justify-between items-center w-full">
          <HeaderNavbar />
          {/* Setting */}
          <div className="flex text-orange-200 gap-1 lg:gap-6">
            <div className="flex items-center gap-x-1 lg:gap-x-5">
              <CartProvider>
                <HeaderUserCart mode="desktop" />
              </CartProvider>
              <ThemeSetting screen="desktop" />
            </div>
            <span className="block w-px h-14 bg-white/20"></span>
            <AuthProvider>
              <HeaderLoginSetting mode="desktop" />
            </AuthProvider>
          </div>
        </div>
      </header>
      {/* Header in Mobile Mode */}
      <div id="mobile-header">
        <HeaderMobileIcons
          setMobileStoreMenu={setMobileStoreMenu}
          setMobileCart={setMobileCart}
        />
        {/* Mobile Store Menu */}
        <div
          className={
            mobileStoreMenu
              ? "fixed top-0 right-0 px-4 pt-3 bg-white dark:bg-zinc-700 w-64 min-h-screen z-20 overflow-auto shadow-2xl"
              : "hidden"
          }
        >
          <HeaderMobileNavbar setMobileStoreMenu={setMobileStoreMenu} />
          {/* Setting in Mobile */}
          <div className="pt-8 px-3 mt-8 border-t border-t-gray-100 dark:border-t-white/10 text-regular text-orange-300">
            <AuthProvider>
              <HeaderLoginSetting />
            </AuthProvider>
            <ThemeSetting screen="mobile" />
            <NavLink to="/cart" className="flex items-center gap-x-2 mb-4">
              <HiOutlineShoppingCart className="icon-sm" />
              <span>سبد خرید</span>
            </NavLink>
          </div>
        </div>
        {/* Mobile Cart */}
        <CartProvider>
          <div
            className={
              mobileCart
                ? "fixed top-0 left-0 px-4 pt-3 bg-white dark:bg-zinc-700 w-64 h-full z-30 overflow-scroll shadow-2xl"
                : "hidden"
            }
          >
            <div className="flex items-center justify-between py-5 text-zinc-700 dark:text-white border-b border-b-gray-100 dark:border-b-white/10">
              <HiMiniXMark
                id="navbar-close-btn"
                className="icon-sm text-zinc-600 dark:text-white cursor-pointer"
                onClick={() => setMobileCart((prev) => !prev)}
              />
              <span className="text-link">سبد خرید</span>
            </div>
            <HeaderMobileUserCart />
          </div>
        </CartProvider>
      </div>
    </>
  );
}
