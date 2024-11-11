"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa";
import { MoveRight, Scroll } from "lucide-react";
import StylesGallery from "../style";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollingPay } from "../scrollingText";

const containerVariants = {
  visible: {
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.3,
    },
  },
};

const textyVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const galleryVariants = {
  center: { y: "-30%", opacity: 1 },
  bottom: { y: 0, opacity: 1 },
};

export default function Hero() {
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHeading(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container font-neue mx-auto my-10 px-4 sm:px-8 lg:px-[100px] py-6 sm:py-12">
      <AnimatePresence>
        {showHeading && (
          <motion.div
            variants={textyVariants}
            className="w-full mb-10 h-20 md:hidden flex items-center justify-end relative rounded-[50px] mt-14"
          >
            <Image
              src="/b2.jpg"
              fill
              alt="Lifestyle"
              className="object-cover rounded-[50px] relative"
            />
            <button className="w-10 sm:w-12 text-white aspect-square rounded-full flex items-center justify-center bg-[#1236DB] mr-4 sm:mr-6 relative z-30">
              <MoveRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={containerVariants}
        animate="visible"
        initial="hidden"
        className="flex flex-col overflow-hidden w-full text-4xl sm:mt-10 justify-center lg:justify-start items-center lg:items-start lg:text-[100px] tracking-[-0.04em] leading-[110%] mb-4"
      >
        <AnimatePresence>
          {showHeading && (
            <motion.div
              key="heading"
              initial="hidden"
              animate="visible"
              variants={textyVariants}
              className="w-full"
            >
              <div className="overflow-hidden w-full">
                <div className="flex w-full overflow-hidden flex-row text-center lg:text-start items-start justify-center md:justify-between lg:items-center lg:gap-5 gap-2">
                  <span className="">CHOOSE</span>
                  <div className="w-full hidden h-20 md:flex items-center justify-end relative rounded-[50px] mt-4 sm:mt-0">
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
                  <span className="sm:w-auto lg:mt-4 mt-0">YOUR</span>
                </div>
              </div>
              <div className="overflow-hidden w-full">
                <div className="flex w-full flex-col text-center md:text-start items-start md:flex-row md:justify-between gap-3 mt-4">
                  <span className="w-full md:w-auto">FASHION STYLE!</span>
                  <p className="lg:text-base text-center md:text-start text-[18px] space-x-5 tracking-normal leading-6 mt-4 sm:mt-0">
                    Pike it up! This beautiful{" "}
                    <br className="hidden md:block" />
                    design will keep you looking{" "}
                    <br className="hidden md:block" /> presentable on the go
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial="center"
        animate={showHeading ? "bottom" : "center"}
        variants={galleryVariants}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          position: "relative",
          zIndex: showHeading ? 0 : 1,
          marginTop: showHeading ? 0 : "100px",
        }}
      >
        <StylesGallery />
      </motion.div>
      <motion.div variants={textyVariants} initial="hidden" animate="visible">
        <ScrollingPay
          direction={1}
          key={"scrolling-text-1"}
          paymentMethods={[
            "amazon",
            "master-card",
            "american-express",
            "google",
            "apple-pay",
            "paypal",
          ]}
        />
      </motion.div>
      <AnimatePresence>
        {showHeading && (
          <div className="text-center text-2xl sm:text-4xl my-[30px] sm:my-[60px] leading-[150%] max-w-2xl mx-auto">
            Since 1987, LOOP has been founded and loved. Continues to create a
            new fashion
            <div className="flex items-center justify-around">
              <FaStarOfLife color="#1236DB" className="w-4 h-4 sm:w-6 sm:h-6" />
              trends to be the finest products.
              <FaStarOfLife color="#1236DB" className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
