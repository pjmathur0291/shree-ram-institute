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
      title: "Hotel Management",
    },
    {
      id: 2,
      image: Frame5, // Replace with your image path
      title: "Culinary Arts",
    },
    {
      id: 3,
      image: Frame6, // Replace with your image path
      title: "Hospitality Operations",
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
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* Title (Hidden by default, shown on hover or stay visible) */}
              {/* <div className="absolute inset-0 flex items-end p-8">
                <h3 className="text-white text-2xl font-serif opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {program.title}
                </h3>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProgram;
