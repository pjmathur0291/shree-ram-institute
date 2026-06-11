import React from "react";
import { motion } from "framer-motion"; 
import Icon from '../assets/Component4.svg'
import CalendarDays from "../assets/Component1-6 (4).webp";
import GraduationCap from "../assets/Component1-6 (3).webp";
import Hospital from "../assets/Component1-6 (2).webp";
import Component4 from '../assets/Component1-6 (6).webp'
const overviewCards = [
  {
    icon: CalendarDays,
    title: "Duration",
    value: "4 Years",
  },
  {
    icon: GraduationCap,
    title: "Eligibility",
    value: "10+2 with PCB",
  },
  {
    icon: Hospital,
    title: "Learning Approach",
    value: "Theory + Clinical Training",
  },
];

const focusAreas = [
  "Anatomy & Physiology",
  "Medical Surgical Nursing",
  "Community Health Nursing",
  "Child Health Nursing",
  "Mental Health Nursing",
  "Nursing Leadership",
];

const ProgramOverview = () => {
  return (
    <section className="bg-[#FDF7F6] border-b border-[rgba(231, 229, 228, 0.40)] py-16 md:py-28 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5">
        
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#FAF1F1] border border-[rgba(179, 58, 59, 0.10)] text-[#9A3435] rounded-full px-4 py-2 text-[11px] font-black tracking-[1px]">
            <img src={Icon} className="w-[11px] h-[11px]" />  Program Overview
          </div>  
          <h2 className="mt-5 text-[28px] md:text-[38px] font-extrabold text-[#0D0D0D] Montserrat-font tracking-[-1px]">
            B.Sc Nursing Program Overview
          </h2>

          <div className="w-14 h-[3px] bg-[#DCB05B] rounded-full mx-auto mt-5"></div>
        </motion.div>

        {/* OVERVIEW CARDS */}
        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {overviewCards.map((item, index) => { 
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="flex gap-5 bg-white border border-[rgba(231, 229, 228, 0.50)] px-5 py-6 rounded-[16px] border border-stone-200/50 bg-white shadow-[0_8px_30px_0_rgba(0,0,0,0.02)] transition-all duration-300"
              >
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#DCB05B] flex items-center justify-center">
                  <img src={item.icon} className=" w-[22px] h-[22px] text-[#B33A3B]" />
                </div>

              <div className="flex flex-col gap-2">
                  <p className="text-[10px] uppercase tracking-[1px] font-bold text-[#79716B]">
                  {item.title}
                </p>

                <h3 className="text-[16px] Montserrat-font font-extrabold text-[#111]">
                  {item.value}
                </h3>
              </div>
              </motion.div>
            );
          })}
        </div>

        {/* FOCUS AREA */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-[#E7E1DF] rounded-[28px] p-7 md:p-10 mt-8"
        >
          <div className="flex items-center gap-3">
            <img src={Component4} className="w-[15px] h-[15px]" />

            <h3 className="text-[18px] font-extrabold text-[#0D0D0D] Montserrat-font">
              Focus Areas
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
            {focusAreas.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: 1 }}
                className="bg-[#faf1f1cc] border border-[#F2E1E1] rounded-[16px] px-5 py-4 flex items-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_246_5124)">
    <path d="M7.99992 14.6666C11.6818 14.6666 14.6666 11.6818 14.6666 7.99992C14.6666 4.31802 11.6818 1.33325 7.99992 1.33325C4.31802 1.33325 1.33325 4.31802 1.33325 7.99992C1.33325 11.6818 4.31802 14.6666 7.99992 14.6666Z" stroke="#9A3435" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6 8.00008L7.33333 9.33341L10 6.66675" stroke="#9A3435" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_246_5124">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>

                <span className="text-[14px] font-bold text-[#292524] Montserrat-font">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramOverview;