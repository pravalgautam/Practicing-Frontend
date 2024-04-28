import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { URL } from "url";
type Props = {
  route: string[];
  page: string;
};
const BreadCrumb = ({ route, page }: Props) => {
  return (
    <section className="py-24 bg-[#F5F5F5] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold tracking-wider mb-4">{page}</h1>
      <div className="flex ">
        {route.map((item, idx) => {
          return idx < route.length - 1 ? (
            <Link
              key={idx}
              href={item === "Home" ? "/" : item.toLowerCase()}
              className="text-lg font-semibold text-[#3d3d3d] hover:text-gray-400"
            >
              {item} <span className="mx-1">/</span>
            </Link>
          ) : (
            <Link
              key={idx}
              href={item === "Home" ? "/" : item.toLowerCase()}
              className="text-lg font-semibold text-[#3d3d3d] hover:text-gray-400"
            >
              {item}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default BreadCrumb;
