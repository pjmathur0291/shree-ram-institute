import React from "react";
import WORLD_MAP from "../assets/Group1.webp";
import RECRUITER_CLUSTER from "../assets/Frame_11.webp";
import { motion } from "framer-motion";
import Counter from "../config/Counter";

const Placement = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="text-white py-14 md:py-20 px-6 bg-cover bg-center overflow-hidden"
      style={{
        background: `url(${WORLD_MAP}) top center / cover no-repeat`,
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          <header>
            <h2 className="text-4xl lg:text-6xl text-white font-bold leading-tight cormorant-garamond-font max-w-lg">
              Where training turns {""}
              <span className="text-[#FACC15]"> into real placements.</span>
            </h2>
            <p className="mt-2 md:mt-6 text-white text-sm md:text-base leading-relaxed outfit-font font-light max-w-lg">
              Our students don't just graduate — they step directly into roles
              at India's most prestigious hotel brands. A proven placement
              record spanning two and a half decades.
            </p>
          </header>

          <div className="h-px bg-white/20 w-full max-w-md"></div>
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-red-800 text-[10px] font-bold px-3 py-1 rounded mb-4 tracking-widest uppercase">
                Placement Record
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-[24px] md:font-[30px] font-semibold outfit-font">
                  <Counter end={97.2} suffix="%" />
                </span>
                <span className="text-[#B1B1B1] font-medium text-base outfit-font">
                  Placement Record
                </span>
              </div>
            </div>

            <div>
              <div className="flex flex-col gap-1">
                <span className="text-[24px] md:font-[30px] font-semibold outfit-font">
                  <Counter end={5000} suffix="+" />
                </span>
                <span className="text-[#B1B1B1] font-medium text-base outfit-font">
                  Students Placed
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end items-center"
        >
          <motion.div
            whileHover={{
              scale: 1.03,
              rotate: 1,
            }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-xl transition-transform duration-500"
          >
            <img
              src={RECRUITER_CLUSTER}
              alt="Top Hotel Recruiters including Taj, Marriott, and Radisson"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Placement;
