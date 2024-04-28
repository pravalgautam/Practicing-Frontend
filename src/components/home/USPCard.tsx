import React from "react";
import { BsBox2Heart } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TfiWallet } from "react-icons/tfi";
import USPCardItem from "./USPCardItem";

const USPCard = () => {
  return (
    <section className="p-24 flex items-center justify-between ">
      <USPCardItem
        heading="Free Shipping"
        desc="free shipping on orders more than 1500 &#8377;."
        icon={<BsBox2Heart size={40} className="relative" />}
      />
      <USPCardItem
        heading="Flexible Payment"
        desc="Secure payment options."
        icon={<TfiWallet size={40} className="relative" />}
      />{" "}
      <USPCardItem
        heading="24x7 Support"
        desc="We support online all days."
        icon={<TfiHeadphoneAlt size={40} className="relative" />}
      />
    </section>
  );
};

export default USPCard;
