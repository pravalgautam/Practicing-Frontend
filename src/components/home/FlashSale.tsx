import Link from "next/link";
import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const FlashSale = () => {
  return (
    <section className="px-24 py-12 grid grid-cols-5 h-[40rem] gap-8">
      <div className="col-span-3 rounded-2xl bg-[#f5f5f5]">
        <h1 className="text-5xl font-bold text-center mt-24">Flash Sale!</h1>
        <h1 className="text-3xl font-medium text-center mt-6">
          Get 25% off - Limited Time Offer!
        </h1>
        <div className="flex w-fit mx-auto gap-6 items-center mt-12">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl font-bold">04</h1>
            <h3 className="text-2xl text-[#767574]">Days</h3>
          </div>
          <span className="text-5xl font-bold">:</span>

          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl font-bold">14</h1>
            <h3 className="text-2xl text-[#767574]">Hours</h3>
          </div>
          <span className="text-5xl font-bold">:</span>

          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl font-bold">48</h1>
            <h3 className="text-2xl text-[#767574]">Minutes</h3>
          </div>
          <span className="text-5xl font-bold">:</span>

          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl font-bold">18</h1>
            <h3 className="text-2xl text-[#767574]">Seconds</h3>
          </div>
        </div>

        <Link
          href="/shop"
          className="bg-card w-fit px-6 py-4 mt-16 text-white rounded-full flex gap-3 mx-auto"
        >
          Shop Now.
          <RiArrowRightLine size={24} />
        </Link>
      </div>
      <div className=" rounded-2xl flex p-4 bg-[url('/interior2.jpeg')] bg-cover bg-no-repeat">
        <div className="flex-1 border-2 border-white rounded-2xl"></div>
      </div>
      <div className="rounded-2xl p-4 flex bg-[url('/interior.jpg')] bg-cover bg-no-repeat">
        <div className="flex-1 border-2 border-white rounded-2xl"></div>
      </div>
    </section>
  );
};

export default FlashSale;
