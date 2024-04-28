import React from "react";
import Header from "./Header";
import FAQCard from "./FAQCard";

const FAQSection = () => {
  return (
    <section className="px-24 py-12">
      <Header heading="Faqs." subHeading="Questions? Look here." />

      <FAQCard question={""} answer={""} />
      <FAQCard question={""} answer={""} />
      <FAQCard question={""} answer={""} />
      <FAQCard question={""} answer={""} />
      <FAQCard question={""} answer={""} />
    </section>
  );
};

export default FAQSection;
