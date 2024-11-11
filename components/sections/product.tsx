"use client";
import React, { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import CircularText from "../circularTest";
import { Link, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn, formatter } from "@/lib/utils";
import { span } from "framer-motion/m";

type ProductColor = {
  id: string;
  name: string;
  primaryImage: string;
  secondaryImage: string;
  price: number;
};

const productColors: ProductColor[] = [
  {
    id: "black",
    name: "Black",
    primaryImage: "https://m.media-amazon.com/images/I/8178fp8pV5L._SY800_.jpg",
    secondaryImage:
      "https://m.media-amazon.com/images/I/8192uP6MwJL._SY800_.jpg",
    price: 100,
  },
  {
    id: "blue",
    name: "Blue",
    primaryImage:
      "https://i.etsystatic.com/27522472/r/il/4bbe6a/5058977866/il_1588xN.5058977866_okq0.jpg",
    secondaryImage:
      "https://i.etsystatic.com/27522472/r/il/65cc1f/5058977786/il_1588xN.5058977786_58d0.jpg",
    price: 150,
  },
  {
    id: "red",
    name: "Red",
    primaryImage:
      "https://i.etsystatic.com/21729963/r/il/3f6fdb/5991418954/il_1588xN.5991418954_ehu1.jpg",
    secondaryImage:
      "https://i.etsystatic.com/21729963/r/il/1591ab/6039500627/il_1588xN.6039500627_3gfc.jpg",
    price: 200,
  },
];

export default function Product() {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(
    productColors[0]
  );

  const handleColorChange = (color: ProductColor) => {
    setSelectedColor(color);
  };
  return (
    <section className="container relative isolate mx-auto px-4 sm:px-8 overflow-hidden lg:px-[70px] py-6 sm:py-12">
      <div className="lg:text-[250px] text-[120px] -top-4 font-neue lg:-left-16 -left-5 -z-10  overflw-hidden absolute font-bold tracking-tighter group text-stroke">
        <span className="inline-block  transition-transform duration-300 group-hover:scale-110">
          L
        </span>
        <span className="inline-block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180">
          Ō
        </span>
        <span className="inline-block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180">
          Ō
        </span>
        <span className="inline-block transition-transform duration-300 group-hover:scale-110">
          P
        </span>
      </div>
      <div className="flex flex-col z-10 relative sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8 mb-6 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-neue tracking-[-0.02em] max-w-full sm:max-w-[85%] eading-[200px]">
          Our new collection of <br className="hidden sm:block" />
          sapphire necklaces
        </h2>
        <Button
          size={"lg"}
          className="rounded-[30px] font-graphik text-base sm:text-lg lg:text-[20px] py-2 px-6 sm:py-4 sm:px-12 w-full sm:w-auto"
        >
          Add to Cart
        </Button>
      </div>
      <div className="flex flex-col grid-cols-1 sm:flex-row relative gap-8">
        <div className="hidden lg:block absolute z-20 top-20 right-[calc(50%-200px)]">
          <CircularText
            text="FIXED PRICE. FIXED PRICE. "
            textColor="white"
            radius={65}
            iconSize={38}
            icon={
              <p className="text- font-bold w-7 h-9 aspect-square text-white">
                {formatter.format(selectedColor.price)}
              </p>
            }
          />
        </div>
        <div className="pt-4 sm:pt-20">
          <p className="text-sm sm:text-base lg:text-lg font-graphik leading-6 text-gray-600 mb-4">
            A necklace that combines purity with style and elegance. This
            necklace is a perfect gift for your loved ones. it is a perfect gift
            for your loved ones. it is a perfect gift for your loved ones. Use
            it to make a statement.
          </p>
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={selectedColor.primaryImage}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className="relative overflow-hidden"
              >
                {" "}
                <Image
                  src={selectedColor.primaryImage}
                  height={500}
                  width={1920}
                  alt="Sapphire necklace model"
                  className="object-contain w-full"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute left-2 bottom-2 text-center   transform origin-top-right">
              <div className="bg-[#1236DB] text-white px-8 py-2 text-lg font-bold shadow-lg">
                <span className="text-2xl font-bold">
                  {formatter.format(selectedColor.price)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-4 sm:pb-20 flex flex-col-reverse">
          <div className="mt-3">
            <p className="text-sm sm:text-base lg:text-lg font-graphik leading-6 text-gray-600 mb-4">
              A necklace that combines purity with style and elegance. This
              necklace is a perfect gift for your loved ones. it is a perfect
              gift for your loved ones. it is a perfect gift for your loved
              ones. Use it to make a statement.
            </p>
            <Button
              variant="ghost"
              className="font-bold font-neue text-black text-xl sm:text-2xl lg:text-3xl p-0 mt-2 sm:mt-3"
            >
              Read More
            </Button>
          </div>
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={selectedColor.secondaryImage}
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                className="relative overflow-hidden"
              >
                <Image
                  src={selectedColor.secondaryImage}
                  height={500}
                  width={1920}
                  alt="Sapphire necklace model"
                  className="object-contain w-full mb-4 sm:mb-0"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex sm:flex-col gap-6 sm:ml-4">
          {productColors.map((color) => (
            <button
              key={color.id}
              onClick={() => handleColorChange(color)}
              className={cn(
                "w-16 aspect-square p-[2px] relative rounded-full",
                selectedColor.id === color.id
                  ? "border-2 border-black border-b-0 border-r-0"
                  : "border-0"
              )}
              aria-label={`Select ${color.name} color`}
            >
              <Image
                src={`/${color.id}.jpg`}
                alt={color.name}
                width={400}
                height={400}
                className="w-full aspect-square relative rounded-full"
              />
            </button>
          ))}
        </div>
      </div>
      <div className="lg:text-[250px] text-[120px] -bottom-4 font-neue lg:-right-16 -right-5 -z-10  overflw-hidden absolute font-bold tracking-tighter group text-stroke">
        <span className="inline-block  transition-transform duration-300 group-hover:scale-110">
          L
        </span>
        <span className="inline-block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180">
          Ō
        </span>
        <span className="inline-block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180">
          Ō
        </span>
        <span className="inline-block transition-transform duration-300 group-hover:scale-110">
          P
        </span>
      </div>
    </section>
  );
}

//https://i.etsystatic.com/21729963/r/il/3f6fdb/5991418954/il_1920x1080.5991418954_ehu1.jpg

//https://i.etsystatic.com/21729963/r/il/3f6fdb/5991418954/il_1588xN.5991418954_ehu1.jpg
//https://i.etsystatic.com/21729963/r/il/1591ab/6039500627/il_1588xN.6039500627_3gfc.jpg
//https://i.etsystatic.com/6750618/r/il/aea7d9/3602532747/il_1588xN.3602532747_l02x.jpg
//https://i.etsystatic.com/6750618/r/il/07c9e6/3602532751/il_1588xN.3602532751_7dx4.jpg

//https://media.istockphoto.com/id/1222335712/photo/blue-sapphir-on-black-coal-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=lvMNE7lLRjLXx_u4JFQ_jkJ6xalIKbT4FRpSbom9QqI=
