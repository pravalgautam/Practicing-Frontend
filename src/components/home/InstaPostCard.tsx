import React from "react";
import { FaInstagram } from "react-icons/fa6";

const InstaPostCard = () => {
  return (
    <div className="size-80 bg-[url('/interior.jpg')] bg-white rounded-3xl bg-cover bg-no-repeat overflow-hidden relative group">
      <div className="hidden group-hover:flex absolute inset-0 bg-[#00000080]  items-center justify-center text-white cursor-pointer">
        <FaInstagram size={64} className="relative" />
      </div>
    </div>
  );
};

export default InstaPostCard;
