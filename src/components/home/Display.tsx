import { homePageLists } from "@/utils/homePageListing";
import React from "react";
import DisplayCard from "./DisplayCard";

const Display = () => {
  return (
    <div className="px-24 grid grid-cols-2 grid-rows-2 gap-8 h-[700px]">
      {homePageLists.map((item, idx) => {
        return <DisplayCard key={idx} {...item} />;
      })}
    </div>
  );
};

export default Display;
