"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: shouldReduceMotion ? 0 : 0.25,
            ease: "easeOut",
          },
        }}
      >
        {/* image */}
        <div className="absolute h-[76vw] max-h-[298px] w-[76vw] max-w-[298px] md:h-[258px] md:w-[258px] md:max-h-none md:max-w-none lg:h-[298px] lg:w-[298px] xl:h-[498px] xl:w-[498px]">
          <Image
            src="/assets/photo.webp"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain rounded-full"
          />
        </div>

        {/* circle */}
        <motion.svg
          className="h-[77vw] max-h-[300px] w-[77vw] max-w-[300px] md:h-[260px] md:w-[260px] md:max-h-none md:max-w-none lg:h-[300px] lg:w-[300px] xl:h-[506px] xl:w-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="https://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            className="stroke-accent"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={
              shouldReduceMotion
                ? { strokeDasharray: "24 10 0 0", rotate: 0 }
                : {
                    strokeDasharray: [
                      "15 120 25 25",
                      "16 25 92 72",
                      "4 250 22 22",
                    ],
                    rotate: [120, 360],
                  }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 20,
              repeat: shouldReduceMotion ? 0 : Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
