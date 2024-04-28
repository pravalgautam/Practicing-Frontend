"use client";

import { socialLinks } from "@/utils/socialLinks";
import React, { useState } from "react";
import SocialIcon from "../home/SocialIcon";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

const PromotionBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    isOpen && (
      <nav className="h-16 bg-card mt-2 px-24 flex justify-between items-center relative">
        <span className="font-poppins font-normal text-base text-white">
          Call us: +123-456-789
        </span>
        <span className="font-poppins font-noraml text-base text-white">
          Sign up and GET 25% OFF for your first order.{" "}
          <Link
            href="/"
            className="text-[#ffba35] underline underline-offset-2"
          >
            Sign up now
          </Link>
        </span>
        <div className="flex gap-3">
          {socialLinks.map((item, idx) => {
            return <SocialIcon key={idx} {...item} />;
          })}
        </div>

        <RxCross2
          size={24}
          className="absolute right-2 top-1 text-white cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </nav>
    )
  );
};

export default PromotionBar;
