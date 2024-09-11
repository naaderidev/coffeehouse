import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { apiRequest } from "../../../api/axios/config";
//----------Validators
import emailLoginFormSchema from "../../../utils/validation/emailLoginFormSchema";
//----------Hooks
import useSwalModal from "../../../utils/hooks/useSwalModal";
//----------Icons
import { HiOutlineAtSymbol, HiOutlineKey } from "react-icons/hi2";

export default function EmailLogin() {
  const navigate = useNavigate();
  const Modal = useSwalModal();

  const emailLoginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: emailLoginFormSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await apiRequest.post("/auth/login-email", values, {
          withCredentials: true,
        });
        if (res.status === 200) {
          Modal.fire({
            title: "خوش آمدید",
            text: "با موفقیت وارد سایت شدید",
            confirmButtonText: "صفحه اصلی",
            icon: "success",
            iconColor: "#0f766e",
          }).then(() => {
            navigate("/")
            location.reload()
          });
        } else if (res.status === 500) {
          Modal.fire({
            title: "درحال حاضر ثبت نام در سایت مقدور نمی باشد",
            text: "لطفا ساعاتی دیگر مجدد تلاش کنید",
            confirmButtonText: "صفحه اصلی",
            icon: "error",
            iconColor: "#b91c1c",
          }).then(() => navigate("/"));
        }
        resetForm();
      } catch (error) {
        Modal.fire({
          title: "خطا",
          text: "متاسفانه، خطا در لاگین رخ داد.",
          confirmButtonText: "تلاش مجدد",
          icon: "error",
          iconColor: "#b91c1c",
        });
      }
    },
  });

  return (
    <div className="max-w-[600px] pb-24 z-0">
      <h1 className="text-title text-white text-center mb-4">ورود</h1>
      <div className="text-link text-white flex-center gap-2">
        <h5>حساب کاربری ندارید؟</h5>
        <NavLink to="/login/signup" className="text-orange-300 cursor-pointer">
          ثبت نام
        </NavLink>
      </div>
      <form
        action=""
        className="flex flex-col gap-4 mt-4 text-gray-300"
        onSubmit={emailLoginForm.handleSubmit}
      >
        <div className="flex items-center justify-between form-input">
          <input
            type="email"
            className="bg-transparent outline-none w-full"
            placeholder="ایمیل"
            name="email"
            value={emailLoginForm.values.email}
            onChange={emailLoginForm.handleChange}
            onBlur={emailLoginForm.handleBlur}
          />
          <HiOutlineAtSymbol />
        </div>
        {emailLoginForm.errors.email && emailLoginForm.touched.email && (
          <span className="text-xs font-Dana text-rose-900">
            {emailLoginForm.errors.email}
          </span>
        )}
        <div className="flex items-center justify-between form-input">
          <input
            type="password"
            className="bg-transparent outline-none w-full"
            placeholder="رمز عبور"
            name="password"
            value={emailLoginForm.values.password}
            onChange={emailLoginForm.handleChange}
            onBlur={emailLoginForm.handleBlur}
          />
          <HiOutlineKey />
        </div>
        {emailLoginForm.errors.password && emailLoginForm.touched.password && (
          <span className="text-xs font-Dana text-rose-900">
            {emailLoginForm.errors.password}
          </span>
        )}
        <button
          type="submit"
          disabled={emailLoginForm.isSubmitting}
          className="btn-form"
        >
          <span>
            {emailLoginForm.isSubmitting ? "درحال پردازش..." : "ورود"}
          </span>
        </button>
      </form>
      <h5 className="text-link text-orange-300 mt-4 cursor-pointer text-end">
        فراموشی رمز عبور
      </h5>
    </div>
  );
}
