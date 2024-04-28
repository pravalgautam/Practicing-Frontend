import React from "react";
import { GoHeart } from "react-icons/go";
import { IoIosExpand } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

import CardIcon from "./CardIcon";
import Image from "next/image";
import Product from "../home/Product";

type Props = {
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  category: string;
  item: string;
};

const ProductCard = ({
  image,
  price,
  originalPrice,
  rating,
  category,
  item,
}: Props) => {
  return (
    <div>
      <Product image={image} offer={10} />

      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg text-[#b4b4b4]">Chair</span>
          <span className="text-lg flex font-medium items-center gap-2 ">
            <FaStar size={24} className="text-[#ffba35]" />
            4.9
          </span>
        </div>

        <h1 className="font-semibold text-xl">Wooden Sofa Chair</h1>
        <h1 className="font-semibold text-lg">
          &#8377; 500.00{" "}
          <span className="ml-1 line-through text-[#b4b4b4]">
            &#8377; 1000.00
          </span>
        </h1>
      </div>
    </div>
  );
};

export default ProductCard;
