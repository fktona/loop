import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Lifestyle() {
  return (
    <section className="relative h-[300px] sm:h-[400px] md:h-[500px] mb-6 sm:mb-8 md:mb-12">
      <Image src="/b1.JPG" fill alt="Lifestyle" className="object-cover" />
      <div className="absolute inset-0 bg-black/40 px-4 sm:px-6 md:px-[50px] flex flex-col justify-between">
        <div className="text-white text-start pt-4 sm:pt-6 md:pt-10">
          <h2 className="font-neue text-3xl sm:text-5xl md:text-[80px] tracking-[-0.04em] leading-[110%] mb-4">
            Get everything you <br className="hidden sm:inline" /> need for your
            fashion <br className="hidden sm:inline" /> look and lifestyle.
          </h2>
        </div>

        <div className="pb-4 sm:pb-6 md:pb-10 flex justify-end">
          <Button
            size={"lg"}
            className="bg-white text-black hover:bg-gray-100 rounded-[30px] font-semibold text-sm sm:text-base"
          >
            SHOP NOW
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Lifestyle;
