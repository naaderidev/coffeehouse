import Swal from "sweetalert2";

export default function useSwalToast() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-start",
    iconColor: "white",
    color: "white",
    customClass: {
      popup: "swal2-show text-link sm:text-regular",
      text: "text-link",
    },
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
  });
  return Toast;
}
