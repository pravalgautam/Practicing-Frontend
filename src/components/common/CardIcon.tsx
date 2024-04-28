import React, { ReactNode } from "react";

type Props = {
  icon: ReactNode;
};
const CardIcon = ({ icon }: Props) => {
  return (
    <div className="size-10 rounded-full bg-white shadow-lg border border-[#a6a6a6] cursor-pointer flex items-center justify-center">
      {icon}
    </div>
  );
};

export default CardIcon;
