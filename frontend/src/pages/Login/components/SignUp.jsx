import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { apiRequest } from "../../../api/axios/config";
import registerFormSchema from "../../../utils/validation/registerFormSchema";
import { useFormik } from "formik";

//----------Hooks
import useSwalModal from "../../../utils/hooks/useSwalModal";
//----------Icons
import {
  HiMiniDevicePhoneMobile,
  HiOutlineUser,
  HiOutlineAtSymbol,
  HiOutlineKey,
  HiOutlineMapPin,
} from "react-icons/hi2";

export default function SignUp() {
  const navigate = useNavigate();
  const Modal = useSwalModal();

  const registerForm = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      zip: "",
    },
    validationSchema: registerFormSchema,
    onSubmit: async (values) => {
      try {
        const res = await apiRequest.post("/auth/register", values, {
          withCredentials: true,
        });
        if (res.status === 201) {
          Modal.fire({
            title: "خوش آمدید",
            text: "ثبت نام شما با موفقیت انجام شد",
            confirmButtonText: "صفحه اصلی",
            icon: "success",
            iconColor: "#0f766e",
          }).then(() => {
            navigate("/");
            location.reload();
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
      } catch (error) {
        // console.error("Registration error:", error);
        Modal.fire({
          title: "خطا",
          text: "متاسفانه، خطا در ثبت نام رخ داد.",
          confirmButtonText: "تلاش مجدد",
          icon: "error",
          iconColor: "#b91c1c",
        });
      }
    },
  });

  return (
    <div className="max-w-[600px] p-8 md:pb-36 z-0">
      <h1 className="text-title text-white text-center mb-4">ثبت نام</h1>
      <div className="text-link text-white flex-center gap-2">
        <h5>قبلا ثبت نام کرده اید؟</h5>
        <NavLink to="/login/email" className="text-orange-300 cursor-pointer">
          ورود
        </NavLink>
      </div>
      <form
        action=""
        className="flex flex-col gap-2 mt-4 text-white"
        onSubmit={registerForm.handleSubmit}
      >
        <div className="flex items-center justify-between form-input">
          <input
            type="text"
            placeholder="نام و نام خانوداگی"
            name="name"
            className="bg-transparent outline-none w-full"
            value={registerForm.values.name}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
          />
          <HiOutlineUser />
        </div>
        {registerForm.errors.name && registerForm.touched.name && (
          <span className="text-xs font-Dana text-rose-900">
            {registerForm.errors.name}
          </span>
        )}
        <div className="flex items-center justify-between form-input">
          <input
            className="bg-transparent outline-none w-full"
            type="text"
            placeholder="نام کاربری"
            name="username"
            value={registerForm.values.username}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
          />
          <HiOutlineUser />
        </div>
        {registerForm.errors.username && registerForm.touched.username && (
          <span className="text-xs font-Dana text-rose-900">
            {registerForm.errors.username}
          </span>
        )}
        <div className="flex items-center justify-between form-input">
          <input
            className="bg-transparent outline-none w-full"
            type="text"
            placeholder="تلفن همراه"
            name="phone"
            value={registerForm.values.phone}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
          />
          <HiMiniDevicePhoneMobile />
        </div>
        {registerForm.errors.phone && registerForm.touched.phone && (
          <span className="text-xs font-Dana text-rose-900">
            {registerForm.errors.phone}
          </span>
        )}
        <div className="flex items-center justify-between form-input">
          <input
            className="bg-transparent outline-none w-full"
            type="email"
            placeholder="ایمیل معتبر"
            name="email"
            value={registerForm.values.email}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
          />
          <HiOutlineAtSymbol />
        </div>
        {registerForm.errors.email && registerForm.touched.email && (
          <span className="text-xs font-Dana text-rose-900">
            {registerForm.errors.email}
          </span>
        )}
        <div className="flex items-center justify-between form-input">
          <input
            className="bg-transparent outline-none w-full"
            type="password"
            placeholder="رمز عبور"
            name="password"
            value={registerForm.values.password}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
          />
          <HiOutlineKey />
        </div>
        {registerForm.errors.password && registerForm.touched.password && (
          <span className="text-xs font-Dana text-rose-900">
            {registerForm.errors.password}
          </span>
        )}
        <div className="flex items-center justify-between form-input">
          <input
            className="bg-transparent outline-none w-full"
            type="text"
            placeholder="کد پستی"
            name="zip"
            value={registerForm.values.zip}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
          />
          <HiOutlineMapPin />
        </div>
        {registerForm.errors.zip && registerForm.touched.zip && (
          <span className="text-xs font-Dana text-rose-900">
            {registerForm.errors.zip}
          </span>
        )}
        <div className="flex items-center justify-between form-input">
          <textarea
            placeholder="آدرس محل دریافت بسته"
            className="bg-transparent outline-none w-full"
            cols={10}
            rows={3}
            name="address"
            value={registerForm.values.address}
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
          />
        </div>
        {registerForm.errors.address && registerForm.touched.address && (
          <span className="text-xs font-Dana text-rose-900">
            {registerForm.errors.address}
          </span>
        )}
        <button
          type="submit"
          disabled={registerForm.isSubmitting}
          className="btn-form"
        >
          <span>
            {registerForm.isSubmitting ? "درحال پردازش..." : "ثبت نام"}
          </span>
        </button>
      </form>
    </div>
  );
}
