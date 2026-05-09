import React from "react";
import CAREER_BG from "../assets/Frame34.webp";
import { motion } from "framer-motion";
import Frame23 from "../assets/Frame23.webp";
import Frame32 from "../assets/Frame32.webp";
import Frame28 from "../assets/Frame28.webp";
import Frame34 from "../assets/Group4.webp";

const CareerPath = () => {
  const careers = [
    {
      title: "Front Office Executive",
      desc: "Handle guest check-ins, reservations, and first impressions at leading hotels.",
      outcome: "Guest Relations • Reception • Concierge",
      image: Frame23,
    },
    {
      title: "F&B Service Associate",
      desc: "Manage restaurant service, guest experience, and dining operations.",
      outcome: "Steward • Captain • Service Executive",
      image: Frame32,
    },
    {
      title: "Housekeeping Executive",
      desc: "Ensure quality standards in rooms and hotel spaces.",
      outcome: "Room Division • Floor Supervisor",
      image: Frame28,
    },
    {
      title: "Hotel Operations Executive",
      desc: "Support overall hotel functioning and coordination.",
      outcome: "Operations • Management Trainee",
      image: Frame34,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Individual card variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <section
      className="py-14 md:py-20 px-6 bg-black/70"
      style={{
        background: `url(${CAREER_BG}) top center / cover no-repeat`,
      }}
    >
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 md:gap-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/3 text-white flex flex-col gap-[12px] md:gap-[16px]"
        >
          <h2 className="text-4xl md:text-5xl font-bold cormorant-garamond-font">
            Careers you step into after training
          </h2>
          <p className="text-[#FFFFFFCC] text-sm md:text-base mb-4 md:mb-10 max-w-sm outfit-font">
            With practical exposure and placement support, students move into
            real roles across leading hotels and service industries—building
            careers that grow with experience.
          </p>
          <button className="bg-[#C11F1F] hover:bg-[#A31919] text-white font-semibold p-3 md:p-4 rounded transition-all duration-300 uppercase tracking-wider text-xs md:text-base w-fit">
            Explore Your Career Path
          </button>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {careers.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={` relative rounded-2xl p-6 md:p-8 min-h-[400px] overflow-hidden group shadow-xl`}
              style={{
                background: `url(${item.image}) top center / cover no-repeat`,
              }}
            >
              <div className="relative z-10 flex flex-col gap-3 max-w-[70%]">
                <h3 className="text-white text-xl md:text-2xl  font-bold outfit-font">
                  {item.title}
                </h3>
                <p className="text-[#FFFFFFCC] text-sm leading-relaxed outfit-font">
                  {item.desc}
                </p>

                <div className="mt-6 max-w-sm">
                  <p className="text-xs md:text-[14px] text-white/50 uppercase tracking-widest font-semibold mb-1 outfit-font">
                    Role Outcome
                  </p>
                  <p className="text-[14px] text-white/80 mb-1 outfit-font">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CareerPath;
