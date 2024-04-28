import Link from "next/link";
import React from "react";

const FooterList = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-white font-medium font-poppins text-xl">Company</h1>

      <ul className="flex flex-col gap-6">
        <li className="text-lg text-[#98a799]">
          <Link href="/"> About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterList;
