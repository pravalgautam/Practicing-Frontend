import { cn } from "@/lib/utils";
import { homePageList } from "@/utils/homePageListing";
import Image from "next/image";
import React from "react";

const DisplayCard = ({
  image,
  qty,
  types,
  heading,
  className,
  description,
}: homePageList) => {
  return (
    <div
      className={cn(
        "rounded-3xl bg-[#f5f5f5] p-6 pr-0 relative size-full flex justify-between",
        className
      )}
    >
      <div className="flex-1">
        <div className="w-fit p-2 mb-3 rounded-full bg-white">
          <span className="font-semibold font-poppins text-xl">
            <span className="text-[#ffb932]">{qty}+</span> Items
          </span>
        </div>

        <h1 className="font-poppins font-bold text-2xl mb-3 tracking-wide">
          {heading}
        </h1>
        <p className="font-poppins font-normal text-[#a6a6a6] mb-3 text-base tracking-tighter">
          {description}
        </p>
        <ul className="flex flex-col gap-1">
          {types.map((item, idx) => {
            return (
              <li key={idx} className="text-base tracking-wide font-medium text-[#636262]">
                {item}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex-1 relative">
        <Image src={image} alt="not found" fill className="object-cover" quality={100} />
      </div>
    </div>
  );
};

export default DisplayCard;
