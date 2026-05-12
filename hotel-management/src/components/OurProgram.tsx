import React from "react";
import { motion } from "framer-motion";
import Frame4 from "../assets/Frame4.webp";
import Frame5 from "../assets/Frame5.webp";
import Frame6 from "../assets/Frame6.webp";
const OurProgram = () => {
  const programs = [
    {
      id: 1,
      image: Frame4, // Replace with your image path
      title: "Diploma in Hotel Management",
      para: "A fast-track program designed for practical learning and early career opportunities",
    },
    {
      id: 2,
      image: Frame5, // Replace with your image path
      title: "Bachelor in Hotel Management",
      para: "A complete program covering operations, management, and real-world exposure",
    },
    {
      id: 3,
      image: Frame6, // Replace with your image path
      title: "Masters in Hotel Management",
      para: "Advanced program focused on career growth and higher roles",
    },
  ];

  return (
    <section className="py-14 md:py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-[#1A0506] mb-4 font-bold leading-tight cormorant-garamond-font"
          >
            Our Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#6B6B6B] outfit-font px-4 max-w-md mx-auto"
          >
            Choose a path that matches your career goals
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square md:aspect-[4/5]"
            >
              {/* Image Container */}
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="group-hover:relative absolute group-hover:opacity-0 inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* Title (Hidden by default, shown on hover or stay visible) */}
              <div className="absolute bottom-0 flex flex-col items-start p-6 md:p-8  transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 gap-3 md:gap-2">
                <h3 className="justify-center text-xl md:text-2xl font-medium outfit-font leading-4 text-white opacity-0 group-hover:opacity-100 md:max-w-[200px] leading-relaxed">
                  {program.title}
                </h3>
                <p className="justify-center text-white/70 text-sm font-normal opacity-0 group-hover:opacity-100">
                  {program.para}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProgram;
