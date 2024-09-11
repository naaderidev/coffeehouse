import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderNavbar() {
  return (
    <nav className="flex items-center gap-x-2 lg:gap-x-9 h-10">
      <figure>
        <img src="/images/icons/logo.svg" alt="logo" className="icon" />
      </figure>
      <div className="flex items-center gap-x-4 lg:gap-x-9 h-full">
        <NavLink
          to="/"
          className={(link) =>
            link.isActive ? "nav-link text-orange-200" : "nav-link"
          }
        >
          صفحه اصلی
        </NavLink>
        <NavLink
          to="/store/1"
          className={(link) =>
            link.isActive ? "nav-link text-orange-200" : "nav-link"
          }
        >
          فروشگاه
        </NavLink>
        <NavLink
          to="/cafe/1"
          className={(link) =>
            link.isActive ? "nav-link text-orange-200" : "nav-link"
          }
        >
          کافه
        </NavLink>
        <NavLink
          to="/blog/1"
          className={(link) =>
            link.isActive ? "nav-link text-orange-200" : "nav-link"
          }
        >
          بلاگ
        </NavLink>
        <NavLink
          to="/contact"
          className={(link) =>
            link.isActive ? "nav-link text-orange-200" : "nav-link"
          }
        >
          تماس با ما
        </NavLink>
      </div>
    </nav>
  );
}
