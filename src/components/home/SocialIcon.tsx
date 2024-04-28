import { socialLink } from "@/utils/socialLinks";
import Link from "next/link";
import React from "react";

const SocialIcon = ({ icon, url }: socialLink) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="size-7 rounded-full bg-[#ffba35] overflow-hidden text-card flex justify-center items-center"
    >
      {icon}
    </Link>
  );
};

export default SocialIcon;
