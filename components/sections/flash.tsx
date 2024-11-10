"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const AnimatedNumber = ({ value }: { value: number }) => {
  return (
    <div className="h-12 w-12 sm:h-16 sm:w-16 overflow-hidden relative bg-white rounded-md shadow-inner">
      <AnimatePresence initial={false}>
        <motion.span
          key={value}
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center text-2xl sm:text-4xl font-bold text-gray-800"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default function Flash() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 30,
    seconds: 16,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newSeconds = prev.seconds - 1;
        const newMinutes = newSeconds < 0 ? prev.minutes - 1 : prev.minutes;
        const newHours = newMinutes < 0 ? prev.hours - 1 : prev.hours;

        return {
          hours: newHours >= 0 ? newHours : 23,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[400px] sm:h-[500px] relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-[50px] mt-20  lg:px-[70px]">
      <Image src="/b2.jpg" fill alt="Lifestyle" className="object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="w-full container space-y-4 sm:space-y-8 relative z-20">
        <div className="space-y-2 sm:space-y-4 max-w-full sm:max-w-[80%] md:max-w-[60%] relative z-30">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold tracking-tighter text-white">
            Check it out
            <br />
            today's flashsale
          </h1>
          <p className="text-white text-opacity-80 text-sm sm:text-base max-w-full sm:max-w-[80%] md:max-w-[50%]">
            Today is your lucky day, we'll treat you with incredible flash sale
            up to 50% off when you shop online. Check our terms and condition
            then shop right now!
          </p>
        </div>

        <Button
          size={"lg"}
          className="bg-white rounded-[30px] text-black font-semibold w-full sm:w-auto"
        >
          CHECK COLLECTION
        </Button>

        <div className="flex gap-2 sm:gap-4 justify-center sm:justify-end items-end w-full">
          <div className="text-center">
            <AnimatedNumber value={timeLeft.hours} />
            <span className="text-xs sm:text-sm text-white mt-1 sm:mt-2 block">
              Hour
            </span>
          </div>

          <span className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-white">
            :
          </span>

          <div className="text-center">
            <AnimatedNumber value={timeLeft.minutes} />
            <span className="text-xs sm:text-sm text-white mt-1 sm:mt-2 block">
              Min
            </span>
          </div>

          <span className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2 text-white">
            :
          </span>

          <div className="text-center">
            <AnimatedNumber value={timeLeft.seconds} />
            <span className="text-xs sm:text-sm text-white mt-1 sm:mt-2 block">
              Sec
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
