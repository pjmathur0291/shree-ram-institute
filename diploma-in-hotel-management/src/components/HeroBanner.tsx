import React from "react";
import Hero from "../assets/hero.webp";
import RightCheck from "../assets/Background.webp";
import { motion } from "framer-motion";

const HeroBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Har element 0.2s ke gap par aayega
        delayChildren: 0.3,
      },
    },
  };

  // Individual Item Variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Slide up effect jyada smooth lagta hai side slide se
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // Custom cubic-bezier for premium feel
    },
  };
  return (
    <section
      className="flex items-center py-[90px] px-[10px] md:py-[140px] lg:px-[70px] h-100"
      style={{
        background: `url(${Hero}) top center / cover no-repeat`,
      }}
    >
      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-2xl text-white flex flex-col gap-[24px]">
          {/* Badge */}
          <motion.span
            variants={itemVariants}
            className="flex gap-2 items-center inline-block bg-[#c41a1a33] text-[#F0BE3A] text-xs font-medium px-4 py-2 w-fit rounded-full tracking-wider uppercase outfit-font"
          >
            <div className="w-[6px] h-[6px] bg-[#F0BE3A] rounded-full"></div>{" "}
            Admissions Open 2026
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight  cormorant-garamond-font max-w-[600px]"
          >
            A diploma built for
            <div className="italic mb-2">
              <span className="text-red-600 italic">5-star</span> and
              international
            </div>
            hotel placements
          </motion.h1>

          {/* Features List */}
          <motion.ul variants={itemVariants} className="space-y-4  ">
            <li className="flex items-center gap-3">
              <span className="h-[18px] w-[18px] flex items-center justify-center">
                <img
                  src={RightCheck}
                  className="h-100 w-100 object-fit-cover"
                  alt=""
                />
              </span>
              <span className="outfit-font text-md text-white font-medium">
                Personalized Study Plan
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-[18px] w-[18px] flex items-center justify-center">
                <img
                  src={RightCheck}
                  className="h-100 w-100 object-fit-cover"
                  alt=""
                />
              </span>
              <span className="outfit-font text-md text-white font-medium">
                Daily Execution System
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-[18px] w-[18px] flex items-center justify-center">
                <img
                  src={RightCheck}
                  className="h-100 w-100 object-fit-cover"
                  alt=""
                />
              </span>
              <span className="outfit-font text-md text-white font-medium">
                Real-Time Progress Tracking
              </span>
            </li>
          </motion.ul>

          <motion.div variants={itemVariants}>
            <motion.button className="w-fit outfit-font bg-[#C41A1A] text-white font-semibold py-3 px-5 rounded-sm transition-colors duration-300 uppercase tracking-widest text-xs md:text-base">
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
