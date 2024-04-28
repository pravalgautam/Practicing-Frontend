import React from "react";
import Description from "./Description";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <>
      <section className="px-24 py-12 bg-card flex justify-between">
        <Description />
        <FooterList />
        <FooterList />
        <FooterList />
        <FooterList />
        <FooterList />
      </section>
      <div className="h-12 bg-yellow-600 px-24 flex items-center">
        <h1 className="font-medium text-black">
          Copyright &copy; Plank. All Rights Reserved.
        </h1>
      </div>
    </>
  );
};

export default Footer;
