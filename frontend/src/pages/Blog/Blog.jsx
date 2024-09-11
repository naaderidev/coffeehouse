import React from "react";

import BlogProvider from "../../utils/providers/BlogProvider";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Baner from "../../components/Common/Baner";
import ContactUs from "../../components/Common/ContactUs";
import ArticlesSection from "./components/ArticlesSection";

export default function Blog() {
  return (
    <BlogProvider>
      <Header />
      <main className="bg-[#F3F3F3] dark:bg-zinc-900">
        <Baner
          sloganTitle="کمی بمان، کمی استراحت کن"
          sloganSubTitle="و لحظه را بنوش!"
          banerClass="bg-blog-baner baner"
        />
        <ArticlesSection />
        <ContactUs />
      </main>
      <Footer />
    </BlogProvider>
  );
}
