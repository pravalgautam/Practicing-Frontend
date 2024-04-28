import React from "react";
import Header from "./Header";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className="px-24 py-12 bg-[#f5f5f5]">
      <Header heading="Testimonial." subHeading="What Our Clients Say." />
      <div className="flex gap-24">
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonial;
