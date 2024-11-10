"use client";
import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import CircularText from "../circularTest";
import { Link, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { formatter } from "@/lib/utils";
import { span } from "framer-motion/m";

export default function Product() {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 relative gap-8">
        <div className="hidden sm:block absolute top-20 right-[calc(50%-180px)]">
          <CircularText
            text="FIXED PRICE. FIXED PRICE. "
            textColor="white"
            radius={65}
            iconSize={38}
            icon={
              <p className="text- font-bold w-7 h-9 aspect-square text-white">
                {formatter.format(100)}
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
          <div className="relative">
            <Image
              src="https://m.media-amazon.com/images/I/8178fp8pV5L._SY800_.jpg"
              height={500}
              width={1920}
              alt="Sapphire necklace model"
              className="object-contain w-full"
            />

            <div className="absolute left-2 bottom-2 text-center   transform origin-top-right">
              <div className="bg-[#1236DB] text-white px-8 py-2 text-lg font-bold shadow-lg">
                <span className="text-2xl font-bold">
                  {formatter.format(100)}
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
          <Image
            src="https://m.media-amazon.com/images/I/8192uP6MwJL._SY800_.jpg"
            height={500}
            width={1920}
            alt="Sapphire necklace model"
            className="object-contain w-full mb-4 sm:mb-0"
          />
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
