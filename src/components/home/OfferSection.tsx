import React from "react";
import OfferCard from "./OfferCard";

const OfferSection = () => {
  return (
    <section className="px-24 py-12 flex gap-6">
      <OfferCard />
      <OfferCard />
    </section>
  );
};

export default OfferSection;
