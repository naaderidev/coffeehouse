import React from "react";
import { useFormik } from "formik";
import { apiRequest } from "../../api/axios/config";
import { convertInputDateToJalali } from "../../utils/helpers";
//----------Validators
import bookingFormSchema from "../../utils/validation/bookingFormSchema";
//----------Hooks
import useDateFa from "../../utils/hooks/useDateFa";
import useSwalToast from "../../utils/hooks/useSwalToast";
//----------Icons
import { TbArmchair } from "react-icons/tb";
import { HiOutlineUser, HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { cafeSlogan } from "../../utils/constants";

export default function Booking() {
  const Toast = useSwalToast();

  const bookingForm = useFormik({
    initialValues: {
      name: "",
      phone: "",
      date: "",
    },
    validationSchema: bookingFormSchema,
    onSubmit: async (values, { resetForm }) => {
      const dateDetails = convertInputDateToJalali(values.date);
      const reserve = {
        name: values.name,
        phone: values.phone,
        dateDay: dateDetails.day,
        dateMonth: dateDetails.month,
        dateYear: dateDetails.year,
      };
      await apiRequest
        .post("/reserve", reserve)
        .then(() => {
          Toast.fire({
            icon: "success",
            background: "#0f766e",
            title: "رزرو میز با موفقیت انجام شد",
          });
        })
        .catch(() => {
          Toast.fire({
            icon: "error",
            background: "#f87171",
            title: "رزرو میز با خطا مواجه شد",
          });
        });
      resetForm();
    },
  });

  return (
    <section className="pt-8 md:pt-16 lg:pt-24">
      <div className="container">
        <div className="flex flex-col justify-between sm:flex-row sm:items-center gap-5 p-8">
          <div className="max-w-[600px]">
            <h3 className="section-title">رزرو میز</h3>
            <h4 className="section-subtitle">
              معجزه در جلسات کاری و آکادمیک با یک فنجان قهوه
            </h4>
            <p className="text-zinc-700 dark:text-white text-justify text-link leading-7 md:text-regular md:leading-9 my-6">
              {cafeSlogan}
            </p>
            <form
              action=""
              className="flex flex-col gap-4 my-8"
              onSubmit={bookingForm.handleSubmit}
            >
              <div className="flex items-center justify-between form-input">
                <input
                  type="text"
                  name="name"
                  value={bookingForm.values.name}
                  onChange={bookingForm.handleChange}
                  onBlur={bookingForm.handleBlur}
                  placeholder="نام و نام خانوداگی"
                  className="bg-transparent outline-none w-full"
                />
                <HiOutlineUser />
              </div>
              {bookingForm.errors.name && bookingForm.touched.name && (
                <span className="text-xs font-Dana text-rose-800">
                  {bookingForm.errors.name}
                </span>
              )}
              <div className="flex items-center justify-between form-input">
                <input
                  type="text"
                  name="phone"
                  value={bookingForm.values.phone}
                  onChange={bookingForm.handleChange}
                  onBlur={bookingForm.handleBlur}
                  placeholder="شماره تلفن همراه"
                  className="bg-transparent outline-none w-full"
                />
                <HiMiniDevicePhoneMobile />
              </div>
              {bookingForm.errors.phone && bookingForm.touched.phone && (
                <span className="text-xs font-Dana text-rose-800">
                  {bookingForm.errors.phone}
                </span>
              )}
              <div className="flex items-center justify-between form-input">
                <input
                  type="date"
                  name="date"
                  value={bookingForm.values.date}
                  onChange={bookingForm.handleChange}
                  onBlur={bookingForm.handleBlur}
                  className="bg-transparent outline-none w-full"
                />
              </div>
              {bookingForm.errors.date && bookingForm.touched.date && (
                <span className="text-xs font-Dana text-rose-800">
                  {bookingForm.errors.date}
                </span>
              )}
              <button
                type="submit"
                disabled={bookingForm.isSubmitting}
                className="btn-gradient flex-center gap-2 w-fit text-orange-300 text-link md:text-regular"
              >
                <span>
                  {bookingForm.isSubmitting ? "درحال پردازش..." : "رزرو میز"}
                </span>
                <TbArmchair className="icon-sm" />
              </button>
            </form>
            {/* <Button
              type="submit"
              className="btn-gradient flex-center gap-2 w-fit text-orange-300 text-link md:text-regular"
              disabled={!formState.isFormValid}
              onClick={reservationHandler}
            >
              <span> رزرو میز</span>
              <TbArmchair className="icon-sm" />
            </Button> */}
          </div>
          <img
            className="w-[700px] h-[400px] min-w-[500px] rounded-xl border-r-4 border-orange-300 hidden lg:block"
            src="/images/baners/15.jpg"
            alt="contact-img"
          />
        </div>
      </div>
    </section>
  );
}
