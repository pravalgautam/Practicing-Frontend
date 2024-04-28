import React from "react";
import { socialLinks, socialLink } from "@/utils/socialLinks";
import Link from "next/link";

const Description = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-white">
        Plank<span className="text-yellow-400 ml-1">.</span>
      </h1>
      <p className="max-w-xs text-[#98a799]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        consequuntur esse sunt sed laboriosam inventore ut et modi vel quasi?
      </p>
      <ul className="flex gap-6">
        {socialLinks.map((item: socialLink, idx) => {
          return (
            <li className="p-3 rounded-full bg-[#ffffff40]">
              <Link
                href={item.url}
                className="size-10 rounded-full bg-white text-white"
              >
                {item.icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Description;
