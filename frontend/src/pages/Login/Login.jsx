import React from "react";
import { Outlet } from "react-router-dom";

export default function Login() {
  return (
    <div className="bg-contact-baner baner flex-center h-screen">
      <Outlet />
    </div>
  );
}
