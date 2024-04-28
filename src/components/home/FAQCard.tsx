"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

type Props = {
  question: string;
  answer: string;
};
const FAQCard = ({ question, answer }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={cn(
        "w-full py-6 px-6 border border-[#a6a6a6] rounded-3xl transition-all duration-500 ease-in-out mt-6",
        show && "bg-card text-white"
      )}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-wide">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, quasi!
        </h1>
        {show ? (
          <FaMinus
            size={24}
            className="text-[#d7a734] cursor-pointer"
            onClick={() => setShow(false)}
          />
        ) : (
          <FaPlus
            size={24}
            className="cursor-pointer"
            onClick={() => setShow(true)}
          />
        )}
      </div>
      {show && (
        <p className="mt-6 text-[#bec4bf]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sunt
          voluptate dignissimos explicabo possimus veritatis accusamus id
          consequuntur, iste similique!
        </p>
      )}
    </div>
  );
};

export default FAQCard;
