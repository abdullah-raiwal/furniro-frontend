"use client";

import { FaAngleRight } from "react-icons/fa6";
import React, { useState } from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("current index : " + currentIndex);

  const nextIndex = (currentIndex + 1) % images.length;

  const radioItems = images.map((_, index) => (
    <RadioGroupItem
      key={index}
      value={index !== currentIndex ? currentIndex : undefined}
    />
  ));

  const imageVariants = {
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.5,
      },
    },
    center: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="flex flex-row items-start justify-end gap-3">
        {/* <AnimatePresence custom={currentIndex}> */}
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          variants={imageVariants}
          style={{ height: "300px" }} // Adjust the height as needed
          className=""
        />
        {/* </AnimatePresence> */}

        <div className="grid grid-cols-2 gap-2">
          {/* <AnimatePresence custom={nextIndex} className=""> */}
          <img
            key={nextIndex}
            src={images[nextIndex]}
            alt={`Image ${nextIndex + 1}`}
            variants={imageVariants}
            style={{ height: "250px" }} // Adjust the height as needed
            className="col-span-2"
          />
          {/* </AnimatePresence> */}

          <RadioGroup className="flex flex-row ">{radioItems}</RadioGroup>
        </div>

        <div className="relative">
          <FaAngleRight
            className="rounded-full bg-white  text-black hover:cursor-pointer"
            onClick={() => setCurrentIndex(nextIndex)}
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
