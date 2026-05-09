import React from "react";
import { motion } from "framer-motion";
import Component1 from "../assets/Component8.webp";
import Component2 from "../assets/Component8-1.webp";
import Component3 from "../assets/Component8-2.webp";
import Component4 from "../assets/Component8-3.webp";

const EarnWhileYouLearn = () => {
  const features = [
    {
      id: 1,
      image: Component1,
      title: "Early internship opportunity",
    },
    {
      id: 2,
      image: Component2,
      title: "Real hotel work exposure",
    },
    {
      id: 3,
      image: Component3,
      title: "Stipend-based training",
    },
    {
      id: 4,
      image: Component4,
      title: "Cover up to 80% of your fee",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-14 md:py-20 px-6 bg-white">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8 lg:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="flex items-center gap-4 md:w-1/3">
          <div className="w-[3px] h-12 bg-gradient-to-b from-red-600 to-transparent"></div>
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight uppercase tracking-wide cormorant-garamond-font">
              Earn While
            </h2>
            <span className="text-2xl md:text-3xl font-bold text-[#C41A1A] font-bold uppercase tracking-wide  cormorant-garamond-font">
              You Learn
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-2 md:w-2/3">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="flex flex-col items-center md:items-start text-center md:text-left group cursor-default"
            >
              <div className="w-[50px] h-[50px] bg-[#c41a1a1a] rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-[25px] h-[25px] object-cover"
                />
              </div>
              <p className="text-sm md:text-base text-[#000000] font-medium leading-snug md:max-w-[160px] transition-colors duration-300 outfit-font">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EarnWhileYouLearn;
