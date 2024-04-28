import React from "react";
import Product from "./Product";
import { FaStar } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi2";

const TodaySaleCard = () => {
  return (
    <div className="max-w-xl flex-1 h-96 p-3 rounded-3xl border border-[#a6a6a6] flex gap-3">
      <div className="flex-1">
        <Product image="" offer={10} className="size-full" />
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <span className="text-lg text-[#b4b4b4]">Chair</span>

        <h1 className="font-semibold text-xl">Wooden Sofa Chair</h1>
        <h1 className="font-semibold text-lg">
          &#8377; 500.00{" "}
          <span className="ml-1 line-through text-[#b4b4b4]">
            &#8377; 1000.00
          </span>
        </h1>

        <span className="text-lg flex font-medium items-center gap-2 mt-3 ">
          <FaStar size={24} className="text-[#ffba35]" />
          4.9
        </span>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
          perferendis distinctio debitis perspiciatis quaerat porro sapiente
          consectetur ipsum doloremque recusandae?
        </p>
        <button className="w-fit mr-auto mt-6 font-medium text-xl flex items-center gap-1">
          Shop Now
          <HiOutlineArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TodaySaleCard;
