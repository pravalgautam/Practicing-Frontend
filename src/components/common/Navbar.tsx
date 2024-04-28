import { navLinks } from "@/utils/navLinks";
import { userLinks } from "@/utils/userLinks";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-20 bg-white px-24 flex justify-between items-center">
      <span className="font-bold font-poppins tracking-wider text-xl">
        Plank
      </span>
      <ul className="flex gap-6">
        {navLinks.map((item, idx) => {
          return (
            <li key={idx}>
              <Link
                href={item.url}
                className="font-medium font-poppins text-lg tracking-wide"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>

      <ul className="flex gap-6">
        {userLinks.map((item, idx) => {
          return (
            <li key={idx}>
              <Link href={item.url}>{item.icon}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
