import React from "react";

const BlogCard = () => {
  return (
    <div className="w-96">
      <div className='w-full h-72 rounded-3xl bg-[url("/interior.jpg")] bg-cover bg-no-repeat relative'>
        <div className="absolute bottom-0 left-[50%] -translate-x-[50%] h-10 w-40 bg-[#ffba35] rounded-t-2xl border-4 border-b-0 border-white flex items-center justify-center">
          <h1 className="text-base font-medium">12 April 2024</h1>
        </div>
      </div>

      <div className="mt-6">
        <h1 className="font-semibold text-2xl">
          Furniture Trends:2024: What's Hot and What's Not
        </h1>
        <p className="mt-3 text-lg text-[#838281]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
          reprehenderit.
        </p>
        <button className="underline underline-offset-2 mt-6">
          Read More.
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
