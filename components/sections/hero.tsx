import React from "react";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa";
import { MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="container font-neue mx-auto my-10 sm:my-20 px-4 sm:px-8 lg:px-[100px] py-6 sm:py-12">
      <div className="w-full mb-10   h-20 md:hidden flex items-center justify-end relative rounded-[50px] mt-14">
        <Image
          src="/b2.jpg"
          fill
          alt="Lifestyle"
          className="object-cover rounded-[50px] relative"
        />
        <button className="w-10 sm:w-12 text-white aspect-square rounded-full flex items-center justify-center bg-[#1236DB] mr-4 sm:mr-6 relative z-30">
          <MoveRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      <div className="flex flex-col w-full text-6xl justify-center lg:justify-start items-center lg:items-start  lg:text-[100px] tracking-[-0.04em] leading-[110%] mb-4 ">
        <div className="flex w-full flex-row  text-center lg:text-start items-start  justify-between lg:items-center lg:gap-5 gap-2">
          <span className=" ">CHOOSE</span>
          <div className="w-full hidden  h-20  md:flex items-center justify-end relative rounded-[50px] mt-4 sm:mt-0">
            <Image
              src="/b2.jpg"
              fill
              alt="Lifestyle"
              className="object-cover  rounded-[50px]  relative"
            />
            <button className="w-10 sm:w-12 text-white aspect-square rounded-full flex items-center justify-center bg-[#1236DB] mr-4 sm:mr-6 relative z-30">
              <MoveRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
          <span className="w-full sm:w-auto lg:mt-4 mt-0">YOUR</span>
        </div>
        <div className="flex w-full flex-col text-center md:text-start  items-start md:flex-row  md:justify-between gap-3 mt-4 ">
          <span className="w-full md:w-auto">FASHION STYLE!</span>
          <p className="lg:text-base text-center md:text-start text-[18px] space-x-5 tracking-normal leading-6 mt-4 sm:mt-0">
            Pike it up! This beautiful <br className="hidden md:block" />
            design will keep you looking <br className="hidden md:block" />{" "}
            presentable on the go
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full sm:w-fit my-10 sm:my-20 place-content-center mx-auto gap-8">
        <Image
          src="/h1.jpg"
          height={1920}
          width={1080}
          alt="Fashion style 1"
          className="object-contain w-full sm:w-fit h-[700px] max-h-fit sm:h-[400px]"
        />
        <Image
          src="/h2.jpg"
          height={1920}
          width={1080}
          alt="Fashion style 2"
          className="object-contain w-full sm:w-fit h-[700px]  max-h-fit sm:h-[400px]"
        />
        <Image
          src="/h3.jpg"
          height={1920}
          width={1080}
          alt="Fashion style 3"
          className="object-contain w-full sm:w-fit h-[700px]  max-h-fit sm:h-[400px] col-span-1 sm:col-span-2 lg:col-span-1 mx-auto"
        />
      </div>
      {/* <div className="flex flex-wrap justify-center sm:justify-between space-x-4 sm:space-x-8 mb-8 sm:mb-12">
        {["amazon", "paypal", "aliexpress", "zalando", "google", "jacobs"].map(
          (brand) => (
            <Image
              key={brand}
              src="/placeholder.svg?height=30&width=80"
              height={30}
              width={80}
              alt={brand}
              className="opacity-50 bg-slate-500 mb-4 sm:mb-0"
            />
          )
        )}
      </div> */}
      <div className="text-center text-2xl sm:text-4xl my-[30px] sm:my-[60px] leading-[150%] max-w-2xl mx-auto">
        Since 1987, LOOP has been founded and loved. Continues to create a new
        fashion
        <div className="flex items-center justify-around">
          <FaStarOfLife color="#1236DB" className="w-4 h-4 sm:w-6 sm:h-6" />
          trends to be the finest products.
          <FaStarOfLife color="#1236DB" className="w-4 h-4 sm:w-6 sm:h-6" />
        </div>
      </div>
    </section>
  );
}
