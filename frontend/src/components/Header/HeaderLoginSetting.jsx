import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";
import useSwalModal from "../../utils/hooks/useSwalModal";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";

export default function HeaderLoginSetting(props) {
  const [isUserSureToLogout, setIsUserSureToLogout] = useState(false);
  const AuthContext = useAuth();
  const Modal = useSwalModal();
  const navigate = useNavigate();

  const logoutHandler = () => {
    AuthContext.isLoggedIn &&
      Modal.fire({
        title: "برای خروج از حساب کاربری مطمئن اید؟",
        text: "برای ثبت سفارش باید وارد حساب کاربری خود شوید",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#0f766e",
        cancelButtonColor: "#b91c1c",
        confirmButtonText: "بله",
        cancelButtonText: "خیر",
      }).then((result) => {
        if (result.isConfirmed) {
          setIsUserSureToLogout(true);
          AuthContext.logout();
          navigate('/login/email')
        }
      });
  };

  return (
    <div
      className={`flex items-center gap-x-2 ${
        props.mode === "desktop"
          ? "text-xl tracking-tightest rounded-full px-4 lg:hover:bg-orange-300/10"
          : "mb-4 text-regular"
      }`}
    >
      <NavLink
        to={isUserSureToLogout ? "/login/email" : "/"}
        onClick={() => logoutHandler()}
      >
        <HiOutlineArrowRightOnRectangle
          className={props.mode === "desktop" ? "icon-md" : "icon-sm"}
        />
      </NavLink>
      {AuthContext.isLoggedIn ? (
        <>
          <span className="text-regular">{AuthContext.userInfo.name}</span>
        </>
      ) : (
        <>
          <NavLink
            to="/login/email"
            className={
              props.mode === "desktop"
                ? "hidden lg:inline-block text-regular"
                : ""
            }
          >
            ورود
          </NavLink>
          <span
            className={props.mode === "desktop" ? "hidden lg:inline-block" : ""}
          >
            {" "}
            |{" "}
          </span>
          <NavLink
            to="/login/signup"
            className={
              props.mode === "desktop"
                ? "hidden lg:inline-block text-regular"
                : ""
            }
          >
            ثبت نام
          </NavLink>
        </>
      )}
    </div>
  );
}
