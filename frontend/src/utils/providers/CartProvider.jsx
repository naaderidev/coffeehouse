import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSwalToast from "../hooks/useSwalToast";
import useSwalModal from "../hooks/useSwalModal";

import useAuth from "../hooks/useAuth";
export const CartContext = createContext();

export default function CartProvider({ children }) {
  const AuthContext = useAuth();
  const [userCart, setUserCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const Toast = useSwalToast();
  const Modal = useSwalModal();
  const navigate = useNavigate();

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    setUserCart(localCart);
  }, []);

  useEffect(() => {
    const cartCalc = () => {
      let price = 0;
      if (userCart.length) {
        userCart?.map((item) => {
          price += item.price * item.qty;
        });
      }
      setTotalPrice(price);
    };
    cartCalc();
  }, [userCart]);

  const productPriceByDiscount = (primaryPrice, discount) => {
    return Math.floor(primaryPrice - (primaryPrice * discount) / 100);
  };

  const addToCart = (product, qty) => {
    let finalProductPrice = product.isOnSale
      ? productPriceByDiscount(product.price, product.discount)
      : product.price;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartItem = {
      id: product._id,
      title: product.title,
      image: product.image,
      price: finalProductPrice,
      discount: product.discount,
      qty,
    };
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    Toast.fire({
      icon: "success",
      background: "#0f766e",
      title: "محصول با موفقیت به سبد خرید افزوده شد",
    });
  };

  const insertItemToCart = async (mainProduct, mainQty) => {
    if (AuthContext.isLoggedIn) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (cart.length) {
        const isItemInCart = cart.some((item) => item.id === mainProduct._id);
        if (isItemInCart) {
          const target = cart.find((item) => item.id === mainProduct._id);
          if (target.qty < mainProduct.count) {
            cart.forEach((item) => {
              if (item.id === mainProduct._id) {
                item.qty = item.qty + mainQty;
              }
            });
            localStorage.setItem("cart", JSON.stringify(cart));
            Toast.fire({
              icon: "success",
              background: "#0f766e",
              title: "محصول با موفقیت به سبد خرید افزوده شد",
            });
          } else {
            Toast.fire({
              icon: "warning",
              background: "#b91c1c",
              title: "موجودی محصول تمام شده است",
            });
          }
        } else {
          addToCart(mainProduct, mainQty);
          location.reload()
        }
      } else {
        addToCart(mainProduct, mainQty);
        location.reload()
      }
    } else {
      Modal.fire({
        title: "لطفا ابتدا وارد سایت شوید",
        text: "از طریق لینک زیر وارد حساب کاربری خود شوید",
        confirmButtonText: "ورود به حساب کاربری",
        icon: "error",
        iconColor: "#b91c1c",
      }).then(() => navigate("/login/email"));
    }
  };

  const cartRemoveHandler = (productID) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.filter((product) => product.id !== productID);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    Toast.fire({
      icon: "success",
      background: "#0f766e",
      title: "محصول با موفقیت از سبد خرید حذف شد",
    });
    location.reload();
  };

  return (
    <CartContext.Provider
      value={{
        userCart,
        totalPrice,
        insertItemToCart,
        cartRemoveHandler,
        productPriceByDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
