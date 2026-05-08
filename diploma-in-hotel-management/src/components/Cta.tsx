import React from "react";
import { motion } from "framer-motion";
import CTA_BG from "../assets/Container.webp";

const Cta = () => {
  return (
    <div className="flex items-center justify-center py-16 md:py-20 bg-[#0D0203] px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-7xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center p-6 md:p-12 lg:p-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${CTA_BG})`,
        }}
      >
        <div className="relative z-10 w-full md:w-3/5 text-white flex flex-col gap-[14px] md:gap-[20px]">
          {/* Top Tag */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>

            <span className="text-white/60 text-xs font-semibold uppercase tracking-widest outfit-font">
              Shri Ram Institute of Hotel Management
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-5xl font-bold cormorant-garamond-font leading-tight max-w-xl"
          >
            What You Choose Now {""}
            <span className="italic text-[rgba(255,235,210,0.95)]">
              Decides What Comes Next
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-white/60 text-base md:text-lg font-medium outfit-font leading-6"
          >
            Step Into International And 5-Star Hotel Placements
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit outfit-font bg-white text-[#931B1C] font-bold px-4 py-2 rounded-sm uppercase text-xs md:text-sm"
            >
              Apply Now
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#FFFFFF59] text-[#FFFFFFD9] text-xs md:text-sm px-4 py-2 rounded-lg font-medium"
            >
              Know More
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cta;
