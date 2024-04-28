import React from "react";
import Header from "./Header";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <section className="px-24 py-12">
      <Header heading={"News & Blogs"} subHeading={"Our Latest News & Blogs"} />
      <button className="px-6 py-3 rounded-full bg-card ml-auto block text-white">
        View All Blogs
      </button>

      <div className="flex justify-between mt-12">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      
    </section>
  );
};

export default BlogSection;
