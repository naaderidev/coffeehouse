import React from "react";
import { Link } from "react-router-dom";

import { FaInstagram } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import {
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlinePhone,
} from "react-icons/hi2";

export default function ContactUs() {
  return (
    <div className="contact-us">
      <h5 className="text-subtitle my-5 md:mb-[28px]">در تماس باشیم</h5>
      <div className="flex flex-col justify-start gap-y-5 md:gap-x-3 text-regular">
        <div className="flex items-center gap-2">
          <HiOutlineMapPin className="icon-sm" />
          <span>بلوار کریمخان زند، خیابان خردمند، کوچه برنا پلاک ۳۳</span>
        </div>
        <div className="flex items-center gap-2 text-orange-300">
          <HiOutlineEnvelope className="icon-sm" />
          <span>info@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlinePhone className="icon-sm" />
          <span>09193571290 - 021-88883232</span>
        </div>
        <div className="flex flex-wrap gap-y-1.5 gap-x-1.5 lg:gap-x-6 font-DanaMedium text-base text-orange-300">
          <Link to="/" className="flex items-center gap-2 btn-gradient">
            <FaInstagram className="icon-sm" />
            <span>Coffee_House</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 btn-gradient">
            <PiTelegramLogo className="icon-sm" />
            <span>Coffee_House</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
