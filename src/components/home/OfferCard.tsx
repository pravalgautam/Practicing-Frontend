import Link from "next/link";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const OfferCard = () => {
  return (
    <div className="flex-1 h-96 bg-[#f5f5f5] rounded-3xl bg-[url('/gamingChair.png')] bg-contain bg-no-repeat bg-right p-12 flex flex-col justify-between">
      <h1 className="font-medium text-xl">Flat 20% Discount</h1>
      <h1 className="font-bold text-4xl max-w-xs">Latest Gaming Chairs</h1>
      <p className="max-w-xs text-lg text-[#535353]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        accusantium.
      </p>
      <Link
        href="/shop"
        className="bg-card w-fit px-6 py-4  text-white rounded-full flex gap-3"
      >
        Shop Now.
        <RiArrowRightLine size={24} />
      </Link>
    </div>
  );
};

export default OfferCard;
