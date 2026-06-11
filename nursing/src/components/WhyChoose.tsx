import React from "react";
import { motion } from "framer-motion"; 
import BadgeCheck from '../assets/Container.webp'
import Building2 from '../assets/Container-1.webp'
import HeartPulse from '../assets/Container-2.webp'
import MapPin from '../assets/Container-5.webp'
import Users from '../assets/Container-4.webp'
import FlaskConical from '../assets/Container-3.webp'

const cards = [
  {
    id: "01",
    tag: "LEGACY",
    icon: BadgeCheck,
    title: "26 Years of Academic Legacy",
    desc: "Backed by over 26 years of educational excellence, Shri Ram Institute has earned the trust of students through its commitment to quality education, career-focused learning, and holistic student development.",
  },
  {
    id: "02",
    tag: "CLINICAL",
    icon: Building2,
    title: "Govt. Hospital Clinical Affiliation",
    desc: "Our affiliation with leading government hospitals strengthens the practical learning experience by connecting students with advanced healthcare environments and professional medical settings.",
  },
  {
    id: "03",
    tag: "TRAINING",
    icon: HeartPulse,
    title: "Clinical Training Exposure",
    desc: "Gain hands-on experience through structured clinical training, patient care observations, and supervised learning environments designed to build confidence and professional nursing skills.",
  },
  {
    id: "04",
    tag: "LOCATION",
    icon: MapPin,
    title: "Prime Location in Dehradun",
    desc: "Located in the heart of Dehradun, the campus offers excellent connectivity, access to major healthcare institutions, and a safe learning environment for students from across India.",
  },
  {
    id: "05",
    tag: "STUDENT",
    icon: Users,
    title: "Student-Centric Learning Approach",
    desc: "We focus on academic guidance, skill development, and individual support to help students grow into compassionate professionals prepared for real-world responsibilities.",
  },
  {
    id: "06",
    tag: "FACILITIES",
    icon: FlaskConical,
    title: "Modern Nursing Labs & Learning Facilities",
    desc: "Learn in a professional academic environment supported by well-equipped nursing laboratories, smart learning resources, and modern campus infrastructure designed to enhance clinical understanding and skill development.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-[#FFF] py-16 md:py-28 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 flex flex-col gap-[40px] md:[80px]">
        
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
         <div className="inline-flex bg-[#F8EAEA] border border-[#d6616233] text-[#B33A3B] rounded-full px-4 py-2 text-[11px] mb-4 font-black tracking-[1px]">
           Why Choose Shri Ram College of Nursing
            </div>

          <h2 className="mt-5 text-[28px] md:text-[36px] leading-[45px] font-extrabold text-[#1C1917] Montserrat-font tracking-[-1px]">
            Why Choose Shri Ram College of Nursing
          </h2>

          <div className="w-14 h-[3px]  bg-gradient-to-r from-[rgba(179,58,59,0.00)] via-[#B33A3B] to-[rgba(179,58,59,0.00)] mx-auto rounded-full mt-5"></div>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:mt-16">
          {cards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="bg-white border border-[rgba(231, 229, 228, 0.80)] rounded-[28px] p-6 md:p-8 transition-all duration-100 hover:shadow-[0px_18px_50px_rgba(0,0,0,0.06)]"
              >
                {/* TOP */}
                <div className="flex items-start justify-between">
                  <span className="bg-[#F8EAEA] text-[#B33A3B] text-[10px] font-black tracking-[0.5px] leading-[15px] px-3 py-1 rounded-[8px] uppercase">
                    {item.tag}
                  </span>

                  <span className="text-[#D6D3D1] text-[24px] Montserrat-font font-extrabold leading-[32px]">
                    {item.id}
                  </span>
                </div>

                {/* ICON */}
                <div className="w-[48px] h-[48px] rounded-full border border-[#000] bg-[#FAFAF9] flex items-center justify-center mt-5">
                  <img src={item.icon} className="text-[#B33A3B] w-[24px] h-[24px]" />
                </div>

                {/* TITLE */}
                <h3 className="mt-8 text-[18px] leading-[-0.5px] Montserrat-font font-extrabold text-[#000] leading-[24.75px]">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-4 text-[13px] leading-[21.13px] font-light text-[#000] md:mb-4">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;