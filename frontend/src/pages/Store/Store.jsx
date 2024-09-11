import React from "react";

import ProductsProvider from "../../utils/providers/ProductsProvider";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Baner from "../../components/Common/Baner";
import ContactUs from "../../components/Common/ContactUs";
import Portfolio from "./components/Portfolio";
import BestSelling from "./components/BestSelling";

export default function Store() {
  return (
    <ProductsProvider>
      <Header />
      <main className="bg-[#F3F3F3] dark:bg-zinc-900">
        <Baner
          sloganTitle="کمی بمان، کمی استراحت کن"
          sloganSubTitle="و لحظه را بنوش!"
          banerClass="bg-store-baner baner"
        />
        <Portfolio />
        <BestSelling />
        <ContactUs />
      </main>
      <Footer />
    </ProductsProvider>
  );
}
