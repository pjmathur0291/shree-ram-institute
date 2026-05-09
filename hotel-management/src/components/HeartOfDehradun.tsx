import { motion } from "framer-motion";
import React from "react";
import Image1 from "../assets/Rectangle7.webp";
import Image2 from "../assets/Rectangle8.webp";
import Image3 from "../assets/Rectangle9.webp";
import Image4 from "../assets/Rectangle10.webp";
import Image5 from "../assets/Rectangle11.webp";
import Image6 from "../assets/Rectangle12.webp";

const HeartOfDehradun = () => {
  const images = [
    { id: 1, src: Image1, alt: "Students in Chef Uniform" },
    { id: 2, src: Image2, alt: "Students at Ritz Carlton" },
    { id: 3, src: Image3, alt: "Students in Classroom" },
    { id: 6, src: Image6, alt: "Students in Hallway" },
    { id: 4, src: Image4, alt: "Award Ceremony" },
    { id: 5, src: Image5, alt: "Housekeeping Training" },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <section className="bg-[#F8FAFC] py-14 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-14"
        >
          <h2 className="text-3xl md:text-5xl text-[#1A0506] mb-4 font-bold leading-tight cormorant-garamond-font">
            In the Heart of Dehradun
          </h2>
          <p className="text-base text-[#6B6B6B] outfit-font px-4 max-w-2xl mx-auto">
            Begin your journey at Shri Ram Institute in a city that offers the
            right balance of learning and student life, with an environment that
            supports both comfort and focus.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-3"
        >
          <motion.div
            variants={itemVariants}
            className=" md:col-span-4 lg:col-span-6 min-h-[250px] md:max-h-[400px] overflow-hidden rounded-xl"
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className=" md:col-span-4 lg:col-span-3 max-h-[250px] md:max-h-[400px] overflow-hidden rounded-xl"
          >
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover aspect-square"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className=" md:col-span-4 lg:col-span-3 max-h-[250px] md:max-h-[400px] overflow-hidden rounded-xl"
          >
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="w-full h-full object-cover aspect-square"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className=" md:col-span-4 lg:col-span-3 max-h-[250px] md:max-h-[400px] overflow-hidden rounded-xl"
          >
            <img
              src={images[3].src}
              alt={images[3].alt}
              className="w-full h-full object-cover aspect-square "
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className=" md:col-span-4 lg:col-span-6 max-h-[250px] md:max-h-[400px] overflow-hidden rounded-xl"
          >
            <img
              src={images[4].src}
              alt={images[4].alt}
              className="w-full h-full object-cover aspect-square"
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className=" md:col-span-4 lg:col-span-3 max-h-[250px] md:max-h-[400px] overflow-hidden rounded-xl"
          >
            <img
              src={images[5].src}
              alt={images[5].alt}
              className="w-full h-full object-cover aspect-square"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeartOfDehradun;
