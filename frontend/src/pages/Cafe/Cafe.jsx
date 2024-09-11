import React from "react";

import MenuProvider from "../../utils/providers/MenuProvider";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Baner from "../../components/Common/Baner";
import ContactUs from "../../components/Common/ContactUs";
import Booking from "../../components/Common/Booking";
import GallerySection from "./components/GallerySection";
import PopularSection from "./components/PopularSection";
import MenuSection from "./components/MenuSection";

export default function Cafe() {
  return (
    <MenuProvider>
      <Header />
      <main className="bg-[#F3F3F3] dark:bg-zinc-900">
        <Baner
          sloganTitle="کمی بمان، کمی استراحت کن"
          sloganSubTitle="و لحظه را بنوش!"
          banerClass="bg-cafe-baner baner"
        />
        <MenuSection />
        <PopularSection />
        <Booking />
        <GallerySection />
        <ContactUs />
      </main>
      <Footer />
    </MenuProvider>
  );
}
