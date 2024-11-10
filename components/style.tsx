"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { delay, motion, useAnimation, useInView } from "framer-motion";

export default function StylesGallery() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        stiffness: 100,
        damping: 102,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full sm:w-fit my-10 sm:my-20 place-content-center mx-auto gap-8"
    >
      <div className="overflow-hidden">
        <motion.div variants={itemVariants} className="overflow-hidden">
          <Image
            src="/h1.jpg"
            height={1920}
            width={1080}
            alt="Fashion style 1"
            className="object-contain w-full sm:w-fit h-[700px] max-h-fit sm:h-[400px]"
          />
        </motion.div>
      </div>
      <div className="overflow-hidden">
        <motion.div variants={itemVariants} className="overflow-hidden">
          <Image
            src="/h2.jpg"
            height={1920}
            width={1080}
            alt="Fashion style 2"
            className="object-contain w-full sm:w-fit h-[700px] max-h-fit sm:h-[400px]"
          />
        </motion.div>
      </div>
      <div className="overflow-hidden">
        <motion.div
          variants={itemVariants}
          className="col-span-1 sm:col-span-2 lg:col-span-1 mx-auto overflow-hidden"
        >
          <Image
            src="/h3.jpg"
            height={1920}
            width={1080}
            alt="Fashion style 3"
            className="object-contain w-full sm:w-fit h-[700px] max-h-fit sm:h-[400px]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
