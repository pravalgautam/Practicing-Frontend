import { ReactNode } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { PiShoppingCart } from "react-icons/pi";
import { LuUser2 } from "react-icons/lu";

export type userLink = {
  icon: ReactNode;
  url: string;
};

export const userLinks: userLink[] = [
  {
    icon: <GoHeart size={24} />,
    url: "/wishlist",
  },
  {
    icon: <PiShoppingCart size={24} />,
    url: "/cart",
  },
  {
    icon: <LuUser2 size={24} />,
    url: "/profile",
  },
];
