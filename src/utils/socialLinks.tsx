import { ReactNode } from "react";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";

export type socialLink = {
  icon: ReactNode;
  url: string;
};
export const socialLinks: socialLink[] = [
  {
    icon: <FaFacebook size={18} />,
    url: "/",
  },
  {
    icon: <FaTwitter size={18} />,
    url: "/",
  },
  {
    icon: <FaPinterest size={18} />,
    url: "/",
  },
  {
    icon: <FaInstagram size={18} />,
    url: "/",
  },
  {
    icon: <FaYoutube size={18} />,
    url: "/",
  },
];
