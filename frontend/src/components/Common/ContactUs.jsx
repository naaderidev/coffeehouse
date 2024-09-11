import React from "react";
import { NavLink } from "react-router-dom";
//----------Components
import TitleBox from "../Common/TitleBox";
//----------Icons
import { HiOutlinePhone } from "react-icons/hi2";
import { homeSlogan } from "../../utils/constants";

export default function ContactUs() {
  return (
    <section className="py-8 md:pt-16 lg:pt-24">
      <div className="container">
        <div className="flex flex-col justify-center sm:flex-row sm:items-center gap-5 px-8">
          <div>
            <TitleBox
              title="ارتباط با خانه قهوه"
              subTitle="قهوه باکیفیت را از ما بخواهید..."
            />
            <p className="text-zinc-700 dark:text-white text-justify text-link leading-7 xs:text-regular xs:leading-9 my-6 md:mt-[52px] md:mb-6">
              {homeSlogan}
            </p>
            <NavLink
              to="/contact"
              className="btn-gradient flex-center gap-2 w-fit text-orange-300 text-link md:text-regular"
            >
              <span>ارتباط با ما</span>
              <HiOutlinePhone className="icon-sm" />
            </NavLink>
          </div>
          <img
            className="w-[296px] h-[305px] hidden sm:block"
            src="/images/baners/cup-of-coffee-beans.png"
            alt="contact-img"
          />
        </div>
      </div>
    </section>
  );
}
