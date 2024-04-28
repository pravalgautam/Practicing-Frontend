import React from "react";
import CardIcon from "../common/CardIcon";
import { GoHeart } from "react-icons/go";
import { IoIosExpand } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import Image from "next/image";
import { cn } from "@/lib/utils";
type Props = {
  image: string;
  className?: string;
  offer: number;
};
const Product = ({ image, className, offer }: Props) => {
  return (
    <div
      className={cn(
        "w-80 p-3 h-96 rounded-3xl relative bg-[#f5f5f5]",
        className
      )}
    >
      <div className="w-full relative">
        <div className="flex justify-between w-full absolute z-10">
          <div className="px-6 py-2 rounded-full size-fit bg-card text-white">
            {offer}% Off
          </div>

          <div className="flex flex-col gap-3">
            <CardIcon icon={<GoHeart size={20} />} />
            <CardIcon icon={<IoIosExpand size={20} />} />
            <CardIcon icon={<IoBagOutline size={20} />} />
          </div>
        </div>
      </div>

      <div className="flex-1 ">
        <Image src="/chair.png" fill className="object-cover" alt="" />=
      </div>
    </div>
  );
};

export default Product;
