import React, { ReactNode } from "react";
type Props = {
  heading: string;
  desc: string;
  icon: ReactNode;
};
const USPCardItem = ({ heading, desc, icon }: Props) => {
  return (
    <div className="w-fit flex items-center gap-6">
      <div className="relative text-[#1d5e0e]">
        <div className="absolute size-12 bg-[#ffba35] rounded-full -bottom-3 left-3"></div>
        {icon}
      </div>
      <div>
        <h1 className="font-medium tracking-wider font-poppins text-2xl">
          {heading}
        </h1>
        <p className="font-normal text-lg max-w-md">{desc}</p>
      </div>
    </div>
  );
};

export default USPCardItem;
