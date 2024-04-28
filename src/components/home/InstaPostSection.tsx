import React from "react";
import Header from "./Header";
import InstaPostCard from "./InstaPostCard";

const InstaPostSection = () => {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <Header heading="Follow Us." subHeading="Follow Us On Instagram." />

      <div className="flex justify-between">
        <InstaPostCard />
        <InstaPostCard />
        <InstaPostCard />
        <InstaPostCard />
      </div>
    </section>
  );
};

export default InstaPostSection;
