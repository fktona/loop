import { motion } from "framer-motion";
import { Star, StarIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { p } from "framer-motion/client";

const scrollVariants = {
  animate: (direction: number) => ({
    x: direction * -100 + "%",
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ScrollingText = React.memo(
  ({ text, direction }: { text: string; direction: number }) => (
    <motion.ul
      variants={scrollVariants}
      animate="animate"
      exit="exit"
      custom={direction}
      className="lg:text-[14px] px-8 text-[12px] opacity-90 flex space-x-8  font-arsenal border-white/45"
    >
      {Array(20)
        .fill(0)
        .map((_, i) => (
          <li className="whitespace-nowrap  flex items-center gap-8" key={i}>
            <span className="flex items-center text-white gap-3">
              {text} <Star size={14} fill="white" />
            </span>
          </li>
        ))}
    </motion.ul>
  )
);

const ScrollingPay = React.memo(
  ({
    paymentMethods,
    direction,
  }: {
    paymentMethods: string[];
    direction: number;
  }) => (
    <motion.ul
      // variants={scrollVariants}
      animate="animate"
      exit="exit"
      custom={direction}
      className="lg:text-[35px] text-[22px] md:text-[26px] items-center  flex-row-reverse opacity-90 py-12 px-8 flex gap-x-24"
    >
      {[...paymentMethods].map((method, index) => (
        <li className="" key={index}>
          <Image
            alt={method}
            width={100}
            height={10}
            src={`/pay/${method}.svg`}
            className=""
          />
          <span className="text-white sr-only">{method}</span>
        </li>
      ))}
    </motion.ul>
  )
);

export { ScrollingText, ScrollingPay };
