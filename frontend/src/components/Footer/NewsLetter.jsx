import React from "react";
import { apiRequest } from "../../api/axios/config";
import { useFormik } from "formik";
import newsletterFormSchema from "../../utils/validation/newsletterFormSchema";
import useSwalToast from "../../utils/hooks/useSwalToast";
import { FaBullhorn } from "react-icons/fa6";
import { HiOutlineAtSymbol } from "react-icons/hi2";

export default function NewsLetter() {
  const Toast = useSwalToast();

  const newsletterForm = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: newsletterFormSchema,
    onSubmit: async (values, { resetForm }) => {
      apiRequest
        .post("/newsletter", values)
        .then(() => {
          Toast.fire({
            icon: "success",
            background: "#0f766e",
            title: "عضویت در خبرنامه با موفقیت انجام شد",
          });
        })
        .catch(() => {
          Toast.fire({
            icon: "success",
            background: "#f87171",
            title: "عضویت در خبرنامه با خطا مواجه شد",
          });
        });
      resetForm();
    },
  });

  return (
    <div className="news-letter max-w-[378px] lg:w-auto">
      <h5 className="text-subtitle mt-5 md:mb-[28px]">عضویت در خبرنامه</h5>
      <h6 className="text-regular my-5">اطلاع از رویدادها و تخفیف ها</h6>
      <form
        className="flex flex-col gap-4"
        onSubmit={newsletterForm.handleSubmit}
      >
        <div className="flex items-center justify-between form-input">
          <input
            id="email"
            type="text"
            name="email"
            className="bg-transparent outline-none w-full text-white"
            placeholder="ایمل خود را وارد کنید"
            value={newsletterForm.values.email}
            onChange={newsletterForm.handleChange}
            onBlur={newsletterForm.handleBlur}
          />
          <HiOutlineAtSymbol className="text-orange-300" />
        </div>
        {newsletterForm.errors.email && newsletterForm.touched.email && (
          <span className="text-xs font-Dana text-rose-800">
            {newsletterForm.errors.email}
          </span>
        )}
        <button
          type="submit"
          disabled={newsletterForm.isSubmitting}
          className="btn-gradient flex-center gap-2 w-48 text-orange-300 text-link md:text-regular cursor-pointer"
        >
          <span>
            {newsletterForm.isSubmitting
              ? "درحال پردازش..."
              : "عضویت در خبرنامه"}
          </span>
          <FaBullhorn className="icon-sm" />
        </button>
      </form>
    </div>
  );
}
