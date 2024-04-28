"use client";
import { productList } from "@/utils/productList";
import React, { useState } from "react";
import HomeCarousel from "./HomeCarousel";
import Header from "./Header";

const OurProducts = () => {
  const [section, setSection] = useState("All Products");
  return (
    <div className="p-24">
      <Header heading="Our Products." subHeading=" Our Product Collections." />

      <div className="flex justify-between px-36 ">
        {productList.map((item, idx) => {
          return (
            <button
              className={`px-6 py-2 border border-card rounded-full ${
                section === item && "bg-card text-white"
              }`}
              key={idx}
              onClick={() => setSection(item)}
            >
              {item}
            </button>
          );
        })}
      </div>

      <HomeCarousel />
    </div>
  );
};

export default OurProducts;
