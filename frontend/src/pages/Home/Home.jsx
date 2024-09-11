import React from "react";

import ProductsProvider from "../../utils/providers/ProductsProvider";
import BlogProvider from "../../utils/providers/BlogProvider";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Baner from "../../components/Common/Baner";
import Booking from "../../components/Common/Booking";
import ContactUs from "../../components/Common/ContactUs";
import StoreSection from "./components/StoreSection";
import CafeSection from "./components/CafeSection";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#F3F3F3] dark:bg-zinc-900">
        <Baner
          sloganTitle="کمی بمان، کمی استراحت کن"
          sloganSubTitle="و لحظه را بنوش!"
          banerClass="bg-home-baner baner"
        />
        <ProductsProvider>
          <StoreSection />
        </ProductsProvider>
        <CafeSection />
        <Booking />
        <BlogProvider>
          <BlogSection />
        </BlogProvider>
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
