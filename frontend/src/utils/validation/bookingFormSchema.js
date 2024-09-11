import * as Yup from "yup";

const bookingFormSchema = Yup.object().shape({
  name: Yup.string().trim().required("وارد کردن نام الزامی است"),
  phone: Yup.string()
    .trim()
    .required("وارد کردن شماره همراه الزامی است")
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
      "شماره وارد شده معتبر نمی باشد"
    ),
  date: Yup.string().trim().required("انتخاب تاریخ الزامی است"),
});

export default bookingFormSchema;
