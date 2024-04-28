import Link from "next/link";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const Banner = () => {
  return (
    <section className="py-24 bg-[#f5f5f5] flex pl-24">
      <div className="flex flex-col flex-1">
        <div className="w-fit h-16 rounded-full bg-white px-3 flex items-center gap-3">
          <div className="size-12 rounded-full bg-[#f5f5f5] flex items-center justify-center"></div>
          <span className="font-medium font-poppins text-lg">
            Premium Quality at Affordable Price.
          </span>
        </div>
        <h1 className="my-6 max-w-md leading-snug font-bold text-5xl">
          Explore The <span className="text-card">World of Woods.</span>
        </h1>
        <p className="font-medium text-xl max-w-lg">
          We plant twice a tree than we chop.
          <span className="text-card">Save Nature and Choose Plank.</span>
        </p>

        <Link
          href="/shop"
          className="bg-card w-fit px-6 py-4 mt-16 text-white rounded-full flex gap-3"
        >
          Shop Now.
          <RiArrowRightLine size={24}/>
        </Link>
      </div>
      <div className="flex-1"></div>
    </section>
  );
};

export default Banner;
