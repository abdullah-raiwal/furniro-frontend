import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Carousel from "./Carousel";

const InspirationScroller = () => {
  const images = [
    "/product-image-1.png",
    "/product-image-2.png",
    "/product-image-3.png",
    // Add more image URLs as needed
  ];

  return (
    <div className="container flex flex-row items-center justify-between bg-[#ffe4c2] py-8">
      <div className="flex  w-1/3 flex-col items-start gap-5">
        <h1 className="text-3xl font-bold">50+ Beautiful rooms inspiration</h1>
        <p className="text-gray-900">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <Button>Learn More</Button>
      </div>

      <div className="flex flex-row gap-4">
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default InspirationScroller;
