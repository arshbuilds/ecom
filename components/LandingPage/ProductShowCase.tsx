import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {};

const dummyData = [
  {
    imageUrl: "https://dummyimage.com/500X400",
    name: "Lipistic",
    price: "47.9$",
  },
  {
    imageUrl: "https://dummyimage.com/500X400",
    name: "Aankh Wala",
    price: "47.9$",
  },
  {
    imageUrl: "https://dummyimage.com/500X400",
    name: "Muh wala",
    price: "47.9$",
  },
];

const ProductShowCase = (props: Props) => {
  return (
    <section className=" bg-white py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold ">
            Top Selling Products
          </h2>
        </div>
        <div className="flex w-full justify-evenly flex-wrap gap-6">
          {dummyData.map((data, index) => (
            <div
              key={index}
              className="bg-primary rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative group">
                <Link className="absolute inset-0 z-10" href="#">
                  <span className="sr-only">View</span>
                </Link>
                <Image
                  alt="Product 1"
                  className="object-cover w-full h-64 transition-transform duration-300 ease-in-out group-hover:scale-105"
                  height={400}
                  src={data.imageUrl}
                  style={{
                    aspectRatio: "500/400",
                    objectFit: "cover",
                  }}
                  width={500}
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl text-[#65555b]">
                  {data.name}
                </h3>
                <p className="text-lg font-semibold text-[#bb51a4]">{data.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button className="bg-secondary">
            <Link className="text-white" href="#">
              View All
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowCase;
