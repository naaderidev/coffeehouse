import React from "react";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import NewsLetter from "./NewsLetter";
import CopyRight from "./CopyRight";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-700 py-8 lg:pb-11 lg:pt-[62px] px-12 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-28 text-gray-300 lg:w-[90%] px-4 lg:px-0 mx-auto pb-11">
        <AboutUs />
        <NewsLetter />
        <ContactUs />
      </div>
      <CopyRight />
    </footer>
  );
}
