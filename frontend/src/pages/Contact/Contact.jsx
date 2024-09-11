import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { apiRequest } from "../../api/axios/config";
//----------Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
//----------Validators
import contactFormSchema from "../../utils/validation/contactFormSchema";
//----------Hooks
import useSwalModal from "../../utils/hooks/useSwalModal";
//----------Icons
import {
  HiOutlineAtSymbol,
  HiOutlineUser,
  HiMiniDevicePhoneMobile,
  HiMiniPaperAirplane,
} from "react-icons/hi2";

export default function Contact() {
  const navigate = useNavigate();
  const Modal = useSwalModal();

  const contactForm = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      body: "",
    },
    validationSchema: contactFormSchema,
    onSubmit: async (values, { resetForm }) => {
      await apiRequest
        .post("/contact", values)
        .then(() => {
          Modal.fire({
            title: "متشکریم",
            text: "پیام شما با موفقیت ارسال شد",
            confirmButtonText: "صفحه اصلی",
            icon: "success",
            iconColor: "#0f766e",
          }).then(() => navigate("/"));
        })
        .catch(() => {
          Modal.fire({
            title: "متاسفیم",
            text: "ارسال پیام با خطا مواجه شد. لطفا دقایقی دیگر مجدد تلاش کنید",
            confirmButtonText: "صفحه اصلی",
            icon: "error",
            iconColor: "#f87171",
          }).then(() => navigate("/"));
        });
      resetForm();
    },
  });

  return (
    <>
      <Header />
      <main className="bg-[#F3F3F3] dark:bg-zinc-900">
        <div className="bg-contact-baner baner flex-center h-1/2">
          <div className="max-w-[600px] p-8 md:pt-32 z-0">
            <form
              action=""
              className="flex flex-col gap-4 my-8 text-zinc-700"
              onSubmit={contactForm.handleSubmit}
            >
              <div className="flex items-center justify-between form-input">
                <input
                  type="text"
                  name="name"
                  value={contactForm.values.name}
                  onChange={contactForm.handleChange}
                  onBlur={contactForm.handleBlur}
                  placeholder="نام و نام خانوداگی"
                  className="bg-transparent outline-none w-full"
                />
                <HiOutlineUser />
              </div>
              {contactForm.errors.name && contactForm.touched.name && (
                <span className="text-xs font-Dana text-rose-800">
                  {contactForm.errors.name}
                </span>
              )}
              <div className="flex items-center justify-between form-input">
                <input
                  type="text"
                  name="phone"
                  value={contactForm.values.phone}
                  onChange={contactForm.handleChange}
                  onBlur={contactForm.handleBlur}
                  placeholder="شماره تلفن همراه"
                  className="bg-transparent outline-none w-full"
                />
                <HiMiniDevicePhoneMobile />
              </div>
              {contactForm.errors.phone && contactForm.touched.phone && (
                <span className="text-xs font-Dana text-rose-800">
                  {contactForm.errors.phone}
                </span>
              )}
              <div className="flex items-center justify-between form-input">
                <input
                  type="text"
                  name="email"
                  value={contactForm.values.email}
                  onChange={contactForm.handleChange}
                  onBlur={contactForm.handleBlur}
                  placeholder="ایمیل معتبر"
                  className="bg-transparent outline-none w-full"
                />
                <HiOutlineAtSymbol />
              </div>
              {contactForm.errors.email && contactForm.touched.email && (
                <span className="text-xs font-Dana text-rose-800">
                  {contactForm.errors.email}
                </span>
              )}
              <div className="flex items-center justify-between form-input">
                <textarea
                  placeholder="پیام و درخواست شما..."
                  className="bg-transparent outline-none w-full"
                  rows={6}
                  cols={30}
                  name="body"
                  value={contactForm.values.message}
                  onChange={contactForm.handleChange}
                  onBlur={contactForm.handleBlur}
                />
              </div>
              {contactForm.errors.message && contactForm.touched.message && (
                <span className="text-xs font-Dana text-rose-800">
                  {contactForm.errors.message}
                </span>
              )}
              <button
                type="submit"
                disabled={contactForm.isSubmitting}
                className="btn-gradient flex-center gap-2 w-full text-orange-300 text-link md:text-regular"
              >
                <span>
                  {contactForm.isSubmitting ? "درحال پردازش..." : "ارسال"}
                </span>
                <HiMiniPaperAirplane className="icon-sm rotate-180" />
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
