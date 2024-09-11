import Swal from "sweetalert2";

export default function useSwalModal() {
  const Modal = Swal.mixin({
    position: "center",
    color: "#8B6E46",
    confirmButtonColor: "#8B6E46",
    customClass: {
      popup: "swal2-show text-link leading-9",
      icon: "swal2-icon-show",
    },
  });
  return Modal;
}
