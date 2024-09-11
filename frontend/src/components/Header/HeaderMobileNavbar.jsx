import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiChevronRight,
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineBookOpen,
  HiOutlineChatBubbleLeftRight,
  HiMiniXMark,
} from "react-icons/hi2";
import { BsCupHot } from "react-icons/bs";

export default function HeaderMobileNavbar({ setMobileStoreMenu }) {
  const [mobileStoreSubmenu, setMobileStoreSubmenu] = useState(false);
  return (
    <>
      <div className="flex items-end justify-between pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10">
        <figure className="flex items-end gap-2 text-zinc-700 dark:text-orange-200">
          <img src="/images/icons/logo.svg" alt="logo" className="icon-md" />
          <figcaption className="text-link">فروشگاه قهوه</figcaption>
        </figure>
        <HiMiniXMark
          id="navbar-close-btn"
          className="icon-sm text-zinc-600 dark:text-white cursor-pointer"
          onClick={() => setMobileStoreMenu((prev) => !prev)}
        />
      </div>
      <nav className="child:py-2 text-base text-zinc-600 dark:text-white space-y-4 transition-colors">
        <NavLink
          to="/"
          className={(link) =>
            link.isActive ? "mobile-navlink active" : "mobile-navlink"
          }
        >
          <HiOutlineHome className="icon-sm" />
          <span>صفحه اصلی</span>
        </NavLink>
        <div>
          <div className="flex items-center justify-between">
            <NavLink
              to="/store/1"
              className={(link) =>
                link.isActive ? "mobile-navlink active" : "mobile-navlink"
              }
            >
              <HiOutlineShoppingBag className="icon-sm" />
              <span>فروشگاه</span>
            </NavLink>
            <HiChevronRight
              className="icon-sm rotate-90"
              onClick={() => setMobileStoreSubmenu((prev) => !prev)}
            />
          </div>
          <div
            id="mobile-store-submenu"
            className={
              mobileStoreSubmenu
                ? "flex flex-col gap-2 py-4 pr-10 text-sm"
                : "hidden"
            }
          >
            <NavLink to="/store/1">دانه قهوه</NavLink>

            <NavLink to="/store/1">پودر قهوه</NavLink>

            <NavLink to="/store/1">کپسول قهوه</NavLink>

            <NavLink to="/store/1">نورسکا</NavLink>

            <NavLink to="/store/1">پودرهای ترکیبی</NavLink>
          </div>
        </div>
        <NavLink
          to="/cafe/1"
          className={(link) =>
            link.isActive ? "mobile-navlink active" : "mobile-navlink"
          }
        >
          <BsCupHot className="icon-sm" />
          <span>کافه</span>
        </NavLink>
        <NavLink
          to="/blog/1"
          className={(link) =>
            link.isActive ? "mobile-navlink active" : "mobile-navlink"
          }
        >
          <HiOutlineBookOpen className="icon-sm" />
          <span>بلاگ</span>
        </NavLink>
        <NavLink
          to="/contact"
          className={(link) =>
            link.isActive ? "mobile-navlink active" : "mobile-navlink"
          }
        >
          <HiOutlineChatBubbleLeftRight className="icon-sm" />
          <span>تماس با ما</span>
        </NavLink>
      </nav>
    </>
  );
}
