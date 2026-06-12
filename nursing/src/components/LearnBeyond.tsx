import React from "react";
import { motion } from "framer-motion";
import {  ArrowRight } from "lucide-react";
import Img from "../assets/clinical_training.webp";
import Icon from '../assets/Component1-6 (5).webp'
const points = [
  {icon:Icon ,content:"Clinical Demonstrations"},
  {icon:Icon ,content:"Hospital Exposure"},
  {icon:Icon ,content:"Simulation Learning"},
  {icon:Icon ,content:"Community Healthcare Visits"},
  {icon:Icon ,content:"Patient Care Training"},
  {icon:Icon ,content:"Professional Nursing Practices"},
];

const LearnBeyond = () => {
  return (
    <section className="bg-[#FFFDFB] border-b border-[rgba(231, 229, 228, 0.60)] py-16 md:py-28 overflow-hidden ">
      <div className="max-w-[1320px] mx-auto px-4 md:px-5"> 
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[24px] border border-stone-200/50 bg-white shadow-[0_20px_50px_0_rgba(179,58,59,0.08)]"
          >
            <img
              src={Img}
              alt="Learning"
              className="w-full h-full object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* TAG */}
            <div className="inline-flex items-center gap-2 bg-[#F8EAEA] border uppercase border-[rgba(179, 58, 59, 0.10)] text-[#B33A3B] rounded-full px-4 py-2 text-[11px]  font-black tracking-[1px]">
             <img src={Icon} className="w-[11px] h-[11px]" />  Clinical Learning
            </div>

            {/* TITLE */}
            <h2 className="mt-6 text-[28px] md:text-[38px] font-extrabold text-[#111] Montserrat-font tracking-[-1px]">
              Learn Beyond The Classroom
            </h2>

            <div className="w-16 h-[3px] bg-[#FE9A00] rounded-full mt-5"></div>

            {/* DESC */}
            <p className="mt-6 text-[16px] leading-[26px] font-light text-[#57534D]">
              Develop confidence through hands-on experiences that build real
              clinical competence, practical understanding, and professional
              nursing exposure.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {points.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: 1 }}
                  className="bg-white border border-[rgba(231, 229, 228, 0.50)] rounded-[12px] px-5 py-4 flex items-center gap-3"
                >
                  <div className="rounded-full border border-red-600/[0.05] bg-[#FAF0F0] shadow-[0_1px_0_0_rgba(0,0,0,0.05)] shrink-0 h-[32px] w-[32px] flex items-center justify-center">
                  <img src={item.icon}  className="h-[15px] w-[15px] shrink-0" />
                  </div>
                  

                  <span className="text-[14px] font-bold text-[#000] ">
                    {item.content}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* BUTTON */}
            <motion.a href="#AdmissionForm"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="w-fit mt-10 bg-[#B33A3B] hover:bg-[#9D2B2C] text-white rounded-[12px] px-7 py-4 text-[14px] tracking-[1px] font-black uppercase flex items-center gap-2 transition-all duration-300"
            >
              GET ADMISSION DETAILS
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearnBeyond;