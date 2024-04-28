import React from "react";
import ProductCard from "../common/ProductCard";

const HomeCarousel = () => {
  return (
    <main className="px-24 flex gap-6 py-12">
      <ProductCard
        category=""
        image=""
        item=""
        originalPrice={1}
        price={1}
        rating={1}
      />

      <ProductCard
        category=""
        image=""
        item=""
        originalPrice={1}
        price={1}
        rating={1}
      />
      <ProductCard
        category=""
        image=""
        item=""
        originalPrice={1}
        price={1}
        rating={1}
      />
    </main>
  );
};

export default HomeCarousel;
