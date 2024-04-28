import React from "react";
import TodaySaleCard from "./TodaySaleCard";
import Header from "./Header";

const TodaySale = () => {
  return (
    <section className="px-24 py-12">
      <Header heading="Today's Deals." subHeading="Deals Of The Day." />

      <div className="flex gap-3 flex-wrap">
        <TodaySaleCard />
      </div>
    </section>
  );
};

export default TodaySale;
