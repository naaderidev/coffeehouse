import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { insertOrder } from "../../../api/axios/requests/CartRequests";
//----------Components
import CartCard from "./CartCard";
import EmptyCart from "./EmptyCart";
//----------Contexts
import { CartContext } from "../../../utils/providers/CartProvider";
//----------Hooks
import useSwalModal from "../../../utils/hooks/useSwalModal";
import useAuth from "../../../utils/hooks/useAuth";

export default function UserCart() {
  const { userCart, totalPrice, cartRemoveHandler } = useContext(CartContext);
  const Modal = useSwalModal();
  const navigate = useNavigate();
  const AuthContext = useAuth();

  const confirmShoppingHandler = () => {
    Modal.fire({
      title: "آیا از پرداخت هزینه مطمئن هستید؟",
      text: "با انتخاب تایید سفارش شما ثبت می شود.",
      confirmButtonText: "تایید",
      cancelButtonText: "ادامه خرید",
      icon: "question",
      iconColor: "#0f766e",
      showCancelButton: true,
      showCloseButton: true,
    }).then(() => {
      let newOrder = {
        userId: AuthContext.userInfo._id,
        totalPrice,
        basket: userCart,
      };
      insertOrder(newOrder).then(() => {
        localStorage.removeItem("cart");
        navigate("/");
      });
    });
  };

  return (
    <>
      <div className="px-8 lg:px-36">
        {userCart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className="border-b border-b-gray-300 dark:border-b-white/10 divide-y divide-gray-100 dark:divide-white/10">
              {userCart.map((product) => {
                return (
                  <div key={product.id}>
                    <CartCard
                      _id={product.id}
                      image={product.image}
                      title={product.title}
                      price={product.price.toLocaleString()}
                      discount={product.discount}
                      qty={product.qty}
                      removeProductHandler={() => cartRemoveHandler(product.id)}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-between pt-5 mb-24">
              <div>
                <span className="text-link text-gray-300">
                  مبلغ قابل پرداخت
                </span>
                <h5 className="text-subtitle text-zinc-700 dark:text-white">
                  {totalPrice.toLocaleString()}
                  <span className="font-Dana text-sm mr-1">تومان</span>
                </h5>
              </div>
              <button
                className="btn-teal text-link"
                onClick={confirmShoppingHandler}
              >
                ثبت سفارش
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
