import axios from "axios";
import useSwalToast from "../../utils/hooks/useSwalToast";

export const apiRequest = axios.create({
  baseURL: "http://localhost:4000/api",
  // baseURL: "https://coffeehouse-server.liara.run/api",
  headers: {
    "Content-Type": "application/json",
  },
});

apiRequest.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    let status = err.response.status;
    const Toast = useSwalToast();
    Toast.fire({
      icon: "error",
      background: "#f87171",
      title: `خطای ${status}!`,
      text: "درخواست شما با خطا مواجه شد. لطفا دقایقی دیگر مجدد تلاش کنید",
    });
    return Promise.reject(err);
  }
);

apiRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    let status = err.response.status;
    const Toast = useSwalToast();
    if (status === 500) {
      return Toast.fire({
        icon: "error",
        background: "#f87171",
        title: `خطای ${status}!`,
        text: "درخواست شما با خطا مواجه شد. لطفا دقایقی دیگر مجدد تلاش کنید",
      });
    } else if (status === 405) {
      return Toast.fire({
        icon: "error",
        background: "#f87171",
        title: `خطای ${status}!`,
        text: "لطفا تمامی فیلدها را تکمیل کنید",
      });
    } else if (status === 422) {
      return Toast.fire({
        icon: "error",
        background: "#f87171",
        title: `خطای ${status}!`,
        text: "قبلا در سایت ثبت نام کرده اید. لطفا از فرم لاگین وارد شوید",
      });
    } else if (status === 404) {
      return Toast.fire({
        icon: "error",
        background: "#f87171",
        title: `خطای ${status}!`,
        text: "کاربری با این مشخصات یافت نشد. لطفا ثبت نام کنید",
      });
    } else if (status === 424) {
      return Toast.fire({
        icon: "error",
        background: "#f87171",
        title: `خطای ${status}!`,
        text: "ایمیل یا رمز عبور اشتباه است. لطفا دوباره تلاش کنید",
      });
    } else if (status === 401) {
      return Toast.fire({
        icon: "error",
        background: "#f87171",
        title: `خطای ${status}!`,
        text: "لطفا ابتدا وارد حساب کاربری خود شوید",
      });
    }
    return Promise.reject(err);
  }
);
