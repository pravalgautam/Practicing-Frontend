import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="pb-36 flex flex-col items-center justify-center antialiased">
      <span className="text-[14rem] font-poppins font-bold bg-clip-text bg-[url('/interior.jpg')] text-transparent bg-cover">
        404
      </span>
      <span className="text-5xl text-card font-bold">Oops! Page not Found</span>
      <p className="text-xl font-semibold mt-6">
        The page you are looking for cannot be found. take a break before trying
        again
      </p>
      <Link
        href="/"
        className="px-12 py-6 bg-card rounded-full text-white mt-12 text-xl"
      >
        Go to Home Page
      </Link>
    </main>
  );
};

export default page;
