import Image from "next/image";
import React from "react";
import { HiStar } from "react-icons/hi2";

const TestimonialCard = () => {
  return (
    <div className="flex-1 h-80 rounded-3xl bg-white shadow-sm p-12 relative overflow-hidden">
      <div className="absolute size-44 rounded-tr-full rounded-br-full left-0 top-0 bg-green-900 flex items-center justify-center">
        <div className="size-36 bg-white rounded-full p-2">
          <div className="size-full relative rounded-full overflow-hidden">
            <Image fill src="/pfp.jpg" alt="" className="object-cover" />
          </div>
        </div>
      </div>

      <div className="h-44 pl-36 flex justify-between">
        <div>
          <h1 className="font-medium text-2xl">Lorem, ipsum dolor.</h1>
          <h1 className="font-normal text-xl text-[#a5a5a5] mt-3">
            Interior Designer
          </h1>
          <div className="flex gap-1 text-[#ffba35] items-center mt-3">
            <HiStar size={32} />
            <HiStar size={32} />
            <HiStar size={32} />
            <HiStar size={32} />
            <HiStar size={32} />
            <span className="text-xl font-semibold text-black ml-2">5.0</span>
          </div>
        </div>
        <div className="size-20 rounded-full bg-[#f5f5f5] mt-6 flex items-center justify-center">
          <span className="text-6xl h-10 text-card">❝</span>
        </div>
      </div>

      <p className="text-xl font-normal text-[#4f4f4f]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos voluptas
        ex, amet hic consequatur placeat. Natus eligendi laborum incidunt
      </p>
    </div>
  );
};

export default TestimonialCard;
