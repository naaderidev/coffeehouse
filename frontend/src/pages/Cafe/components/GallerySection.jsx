import React from "react";
import TitleBox from "../../../components/Common/TitleBox";
import GallerySlider from "./GallerySlider";

export default function GallerySection() {
  return (
    <section className="pt-8 md:pt-16 lg:pt-24">
      <div className="container">
        <TitleBox
          title="گالری تصاویر پر مهر شما"
          subTitle="در ثبت لحظات به یاد ماندنی شما شریکیم"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 p-8">
          <GallerySlider
            img1="/images/cafe/1.jpg"
            img2="/images/cafe/2.jpg"
            img3="/images/cafe/3.jpg"
            img4="/images/cafe/4.jpg"
            img5="/images/cafe/5.jpg"
          />
          <GallerySlider
            img1="/images/cafe/6.jpg"
            img2="/images/cafe/7.jpg"
            img3="/images/cafe/8.jpg"
            img4="/images/cafe/9.jpg"
            img5="/images/cafe/10.jpg"
          />
          <GallerySlider
            img1="/images/cafe/11.jpg"
            img2="/images/cafe/12.jpg"
            img3="/images/cafe/13.jpg"
            img4="/images/cafe/14.jpg"
            img5="/images/cafe/15.jpg"
          />
        </div>
      </div>
    </section>
  );
}
