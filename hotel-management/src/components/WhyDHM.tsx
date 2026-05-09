import React from "react";
import LeelaLogo from "../assets/image_3_removebg_preview1.webp";
import RadissonLogo from "../assets/image_4_removebg_preview2.webp";
import IHGLogo from "../assets/image_5_removebg_preview1.webp";
import SheratonLogo from "../assets/image_6_removebg_preview1.webp";
import TajLogo from "../assets/image2.webp";
import GlobalImage from "../assets/Component1.webp";
import { motion } from "framer-motion";
import Counter from "../config/Counter";
import Background from "../assets/Group2.webp";
const WhyDHM = () => {
  const RECRUITERS = [TajLogo, LeelaLogo, RadissonLogo, IHGLogo, SheratonLogo];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Har card thoda late aayega
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const StatCard = ({
    title,
    desc,
    suffix,
    className = "",
  }: {
    title: number;
    suffix: any;
    desc: string;
    className?: string;
  }) => (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        borderColor: "rgba(196, 26, 26, 0.5)", // Red border glow on hover
        backgroundColor: "#1f1f1f",
      }}
      className={`bg-[#1A1A1A] border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-center ${className}`}
    >
      <h3 className="text-xl md:text-3xl font-bold mb-2 outfit-font">
        <Counter end={title} suffix={suffix} />
      </h3>
      <p className="text-[#FFFFFFCC] text-sm outfit-font">{desc}</p>
    </motion.div>
  );
  return (
    <motion.div
      className="py-14 md:py-20 px-6 text-white"
      style={{
        background: `url(${Background}) top center / cover no-repeat`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl mb-4 font-bold leading-tight cormorant-garamond-font">
          Why DHM at Shri Ram Institute
        </h2>
        <p className="text-[#FFFFFF80] max-w-3xl mx-auto text-base outfit-font">
          A training approach built on experience, exposure, and placement
          outcomes.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4"
      >
        <motion.div
          variants={cardVariants}
          whileHover={{ y: -8 }}
          className="md:col-span-4 bg-[#1A1A1A] border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl md:text-3xl font-bold mb-2 outfit-font">
              <Counter end={25} suffix="+" />
            </h3>
            <p className="text-[#FFFFFFCC] mb-4 md:mb-auto text-sm outfit-font">
              Scholarships Awarded
            </p>
          </div>
          <div className="border-t border-white/5 pt-4 md:pt-10">
            <h3 className="text-xl md:text-3xl font-bold mb-2 outfit-font">
              Up to <Counter end={100} suffix="%" />
            </h3>
            <p className="text-[#FFFFFFCC] text-sm outfit-font">
              Scholarships Available
            </p>
          </div>
        </motion.div>

        <div className="md:col-span-4 space-y-4">
          <StatCard
            title={28}
            suffix="LPA"
            desc="Highest Package Offered"
            className="h-[48%]"
          />
          <StatCard
            title={5000}
            suffix="+"
            desc="Alumni Network"
            className="h-[48%]"
          />
        </div>

        <div className="md:col-span-4 space-y-4">
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden h-[48%] flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
            <h3 className="text-xl md:text-3xl font-bold mb-2 outfit-font">
              <Counter end={6.4} suffix="LPA" />
            </h3>
            <p className="text-[#FFFFFFCC] text-sm outfit-font">
              Average Package Offered
            </p>
          </motion.div>
          <StatCard
            title={3}
            suffix="Crores+"
            desc="Scholarships Awarded"
            className="h-[48%]"
          />
        </div>

        <motion.div
          variants={cardVariants}
          whileHover={{ y: -8 }}
          className="md:col-span-8 bg-[#1A1A1A] border border-white/10 rounded-3xl p-6 md:p-8"
        >
          <h3 className="text-xl md:text-3xl font-bold mb-2 outfit-font">
            Top Hotel Recruiters
          </h3>
          <p className="text-[#FFFFFFCC] text-sm outfit-font mb-8">
            India & International Placements
          </p>

          <div className="flex flex-wrap items-center gap-5 md:gap-10 overflow-hidden">
            {RECRUITERS.map((logo, idx) => (
              <motion.img
                key={idx}
                src={logo}
                alt="Recruiter Logo"
                whileHover={{
                  scale: 1.08,
                }}
                transition={{ duration: 0.3 }}
                className="h-100 max-h-8 md:max-h-[68px] w-100 object-cover"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ y: -8 }}
          className="md:col-span-4 bg-[#1A1A1A] border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden group"
        >
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-[80px]"></div>
          <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-6 border border-white/10">
            <img
              src={GlobalImage}
              alt="Global"
              className="w-6 h-6 object-contain"
            />
          </div>
          <h3 className="text-xl md:text-3xl font-bold mb-2 outfit-font">
            Global Opportunities
          </h3>
          <p className="text-[#FFFFFFCC] text-sm outfit-font md:mb-8">
            India & International Placements
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WhyDHM;
