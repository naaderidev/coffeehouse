import React, { useContext, useEffect, useState } from "react";
//----------Components
import TitleBox from "../../../components/Common/TitleBox";
import MenuSlider from "./MenuSlider";
import MenuTitle from "./MenuTitle";
import ErrorBox from "../../../components/Common/ErrorBox";
import PendingBox from "../../../components/Common/PendingBox";
//----------Contexts
import { MenuContext } from "../../../utils/providers/MenuProvider";

export default function MenuSection() {
  const { hotMenu, coldMenu, cookieMenu, error, isPending } =
    useContext(MenuContext);

  return (
    <section className="pt-8 md:pt-16 lg:pt-24">
      <div className="container">
        <TitleBox
          title="دنیا فقط چند جرعه با ما فاصله دارد"
          subTitle="تهیه شده از قهوه تازه برشته شده و دم شده با عشق"
        />
        {error && <ErrorBox />}
        {isPending && <PendingBox />}
        {!error && !isPending && (
          <>
            <div className="px-8 max-w-[1200px] mx-auto mb-8">
              <MenuTitle title="منوی بار گرم" />
              <MenuSlider menu={hotMenu} />
            </div>
            <div className="px-8 max-w-[1200px] mx-auto mb-8">
              <MenuTitle title="منوی بار سرد" />
              <MenuSlider menu={coldMenu} />
            </div>
            <div className="px-8 max-w-[1200px] mx-auto mb-8">
              <MenuTitle title="منوی کوکی" />
              <MenuSlider menu={cookieMenu} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
