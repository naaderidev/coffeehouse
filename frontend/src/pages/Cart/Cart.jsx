import React from "react";

import CartProvider from "../../utils/providers/CartProvider";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import UserCart from "./components/UserCart";

export default function Cart() {
  return (
    <CartProvider>
      <Header />
      <main className="bg-[#F3F3F3] dark:bg-zinc-900">
        <section className="h-fit py-8 md:pt-36">
          <div className="container">
            <UserCart />
          </div>
        </section>
      </main>
      <Footer />
    </CartProvider>
  );
}
