import React from "react";
//----------Components
import TitleBox from "../../../components/Common/TitleBox";
import PopularCard from "./PopularCard";

export default function PopularSection() {
  return (
    <section className="pt-8 md:pt-16 lg:pt-24">
      <div className="container">
        <TitleBox
          title="سفارشات پرطرفدار شما"
          subTitle="تهیه شده با مواد درجه یک و چاشنی عشق"
        />
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 lg:px-8 xl:grid-cols-6 gap-y-4 xs:px-2 sm:px-20 md:px-36 xl:px-4 py-8">
          <PopularCard
            image="/images/menu/strawberry-lemon-macarons.webp"
            title="ماکارون لیمو و توت فرنگی"
            angle="right"
          />
          <PopularCard
            image="/images/menu/iced-mocha-lattee.webp"
            title="آیس لاته موکا"
            angle="left"
          />
          <PopularCard
            image="/images/menu/vanilla-lattee.webp"
            title="لاته وانیل"
            angle="right"
          />
          <PopularCard
            image="/images/menu/pumpkin-suger-cookies.webp"
            title="کوکی کدو حلوایی"
            angle="left"
          />
          <PopularCard
            image="/images/menu/chocolate-min-sandwich-cookies.jpg"
            title="کوکی شکلاتی ساندویچی"
            angle="right"
          />
          <PopularCard
            image="/images/menu/raspberry-iced-tea.webp"
            title="چای سرد رزبری"
            angle="left"
          />
        </div>
      </div>
    </section>
  );
}
