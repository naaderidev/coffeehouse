import React from "react";
import Typewriter from "typewriter-effect";
import { GiCoffeeCup } from "react-icons/gi";

export default function Baner({ sloganTitle, sloganSubTitle, banerClass }) {
  return (
    <section className={banerClass}>
      <div className="text-white hidden sm:block absolute top-1/3 right-20">
        <h2 className="text-title italic mb-0.5 md:mb-6">{sloganTitle}</h2>
        <span className="text-title italic">{sloganSubTitle}</span>
        <div className="flex items-start">
          <span className="block w-48 h-px bg-orange-300 my-6"></span>
          <GiCoffeeCup className="icon-md text-orange-300" />
        </div>
        <div className="text-subtitle italic mt-8 max-w-[520px]">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "یک فنجان قهوه با یک فرد خاص در هر زمان، هر مکان و هر فصلی خوب است"
                )
                .start()
                .pauseFor(2500)
                .deleteChars(51)
                .typeString(
                  "با همکاران راهی عالی برای شارژ مجدد و برقراری ارتباط است"
                )
                .start()
                .pauseFor(2500)
                .deleteChars(56)
                .typeString(
                  "واقعی را بچشید که ایده های شما را در مورد چیستی قهوه تغییر می دهد..."
                )
                .start()
                .pauseFor(2500)
                .deleteAll();
            }}
            options={{
              loop: true,
            }}
          />
        </div>
      </div>
    </section>
  );
}
