import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import CircularText from "../circularTest";
import { Star } from "lucide-react";
import { formatter } from "@/lib/utils";

function Sales() {
  return (
    <section className="container relative mt-20 px-4 sm:px-8 lg:px-[100px] mx-auto py-6 sm:py-12">
      <div className="hidden lg:block  absolute z-20 bottom-16 left-28">
        <CircularText
          text="SUMMER SALE SUMMER SALE. "
          textColor="white"
          radius={65}
          iconSize={34}
          icon={<Star size={34} fill="white" stroke="#1236DB" />}
        />
      </div>
      <div className="flex flex-col sm:flex-row  relative justify-between items-start sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
        <h2 className="font-['Neue_Montreal'] text-3xl sm:text-4xl lg:text-[60px] tracking-[-0.02em] leading-tight">
          The early bird sale
        </h2>
        <Button className="rounded-[30px] w-full sm:w-auto" size={"lg"}>
          SEE MORE PRODUCT
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 place-items-center">
        <div className="relative">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/6692c50d73edba6d49e437d6/1721145695189-WJ6BWPSLVKY0N91MDE8O/image-asset.jpeg"
            height={600}
            width={400}
            alt="Women's black crop-top"
            className="w-full aspect-[3/4] object-cover"
          />
          <div className="absolute left-2 bottom-2 text-center lg:hidden   transform origin-top-right">
            <div className="bg-[#1236DB] text-white px-8 py-2 text-lg font-bold shadow-lg">
              <span className="text-xl font-bold flex gap-2">
                SUMMER SALE <Star size={24} fill="white" />
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <h3 className="font-['Neue_Montreal'] text-3xl sm:text-4xl lg:text-[50px] leading-tight lg:leading-[50px] mb-2 sm:mb-4">
            Women's black <br className="hidden sm:inline" /> crop-top and{" "}
            <br className="hidden sm:inline" /> leather pants
          </h3>
          <p className="font-['Graphik_LCG'] text-gray-600 text-sm sm:text-base mb-2 sm:mb-4">
            The crop top with log mosquitos net. Suitable for all dating, party
            and vacation. Leather fabric has no stretch, skin-friendly and
            comfortable.
          </p>
          <div className="flex items-end gap-2 mb-2 sm:mb-4">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              {formatter.format(100)}
            </span>
            <span className="text-gray-500 line-through text-lg sm:text-xl">
              {formatter.format(200)}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <Button className="rounded-[30px] w-full sm:w-auto" size={"lg"}>
              BUY NOW
            </Button>
            <Button
              variant="outline"
              className="rounded-[30px] w-full sm:w-auto"
              size={"lg"}
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sales;
