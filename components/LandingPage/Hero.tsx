import Link from "next/link";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="w-full py-20 md:py-32 bg-primary">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Elevate Your Beauty
          </h1>
          <p className="max-w-[600px] mx-auto text-gray-700 md:text-xl">
            Discover the perfect accessories to enhance your natural radiance.
          </p>
          <div>
            <Link
              className="inline-flex items-center justify-center h-10 px-6 rounded-md bg- text-white bg-secondary font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
              href="#"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
