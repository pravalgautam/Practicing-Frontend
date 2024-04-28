import React from "react";
import Header from "./Header";
import NewsLetterForm from "../forms/NewsLetterForm";

const NewsLetter = () => {
  return (
    <section className="px-24 py-24 bg-[#f5f5f5]">
      <Header
        heading="Our Newsletter."
        subHeading="Subscribe to Our Newsletter to Get Updates to Our Latest Collection"
      />
      <span className="mx-auto w-fit block text-xl">
        Get 20% off on your first order by subscribing to our newsletter.
      </span>

      <NewsLetterForm />
    </section>
  );
};

export default NewsLetter;
