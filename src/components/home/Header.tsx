import React from "react";
type Props = {
  heading: string;
  subHeading: string;
};
const Header = ({ heading, subHeading }: Props) => {
  return (
    <>
      <h1 className="text-3xl font-normal text-center mb-6">
        <span className="mr-6 border border-yellow-500"></span>
        {heading}
      </h1>

      <h1 className="text-5xl text-card font-semibold text-center mb-12 max-w-6xl mx-auto leading-snug">
        {subHeading}
      </h1>
    </>
  );
};

export default Header;
