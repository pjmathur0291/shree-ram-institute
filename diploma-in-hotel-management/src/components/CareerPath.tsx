import React from "react";
import CAREER_BG from "../assets/Frame34.webp";
import ChefImg from "../assets/image12.webp";
import BakeryImg from "../assets/image13.webp";
import RestaurantMgrImg from "../assets/image14.webp";
import FrontOfficeImg from "../assets/image15.webp";
import ServiceSupImg from "../assets/image16.webp";
import FandBImg from "../assets/image17.webp";
import EventCoordImg from "../assets/image18.webp";
import HotelOpsImg from "../assets/image19.webp";
import { motion } from "framer-motion";

const CareerPath = () => {
  let CAREER_CARDS = [
    {
      img: ChefImg,
      title: "Chef",
      desc: "Work in professional kitchens and manage food preparation",
    },
    {
      img: BakeryImg,
      title: "Bakery & Confectionery Chef",
      desc: "Specialise in baking, desserts, and confectionery",
    },
    {
      img: RestaurantMgrImg,
      title: "Restaurant Manager",
      desc: "Handle operations, staff, and guest experience",
    },
    {
      img: FrontOfficeImg,
      title: "Front Office Executive",
      desc: "Manage guest check-ins and front desk operations",
    },
    {
      img: ServiceSupImg,
      title: "Service Supervisor",
      desc: "Ensure smooth service and maintain standards",
    },
    {
      img: FandBImg,
      title: "Food & Beverage Manager",
      desc: "Oversee dining operations and customer satisfaction",
    },
    {
      img: EventCoordImg,
      title: "Event Coordinator",
      desc: "Plan and manage events and hospitality setups",
    },
    {
      img: HotelOpsImg,
      title: "Hotel Operations",
      desc: "Support and manage overall hotel functioning",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Har card 0.1s ke delay se aayega
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
      <div className="container flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-12 md:gap-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/3 text-white flex flex-col gap-[12px] md:gap-[16px]"
        >
          <h2 className="text-4xl md:text-5xl font-bold cormorant-garamond-font">
            Career Paths After Your Diploma
          </h2>
          <p className="text-[#FFFFFFCC] text-lg mb-4 lg:mb-10 max-w-sm outfit-font">
            Step into roles across hotels, restaurants, and service
            environments.
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
          className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          {CAREER_CARDS.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group overflow-hidden rounded-lg shadow-2xl transition-transform duration-300 hover:-translate-y-2 h-full w-full"
              style={{
                background:
                  "linear-gradient(313deg, #215742 0.94%, #11412D 92.49%)",
              }}
            >
              <div className="max-h-40 h-100 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h4 className="text-white font-semibold text-base md:text-lg md:mb-2 outfit-font">
                  {card.title}
                </h4>
                <p className="text-[#FFFFFFCC] text-sm leading-relaxed outfit-font">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CareerPath;
