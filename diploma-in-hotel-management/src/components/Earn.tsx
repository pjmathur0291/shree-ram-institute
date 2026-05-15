import React from "react";
import Student from "../assets/Hotel_Management_Student.webp";
import { motion } from "framer-motion";
interface BenefitCircleProps {
  title: string;
  description: string;
  positionClasses: string;
  index: number;
}

const BenefitCircle: React.FC<BenefitCircleProps> = ({
  title,
  description,
  positionClasses,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.7,
      delay: index * 0.15, // Sequence sequence animation
      ease: [0.34, 1.56, 0.64, 1], // Playful "pop" effect
    }}
    className={`absolute flex flex-col items-center justify-center rounded-full bg-[#A33B3F] text-white text-center shadow-2xl p-6 transition-transform hover:scale-105 ${positionClasses}`}
  >
    <p className="text-2xl font-bold leading-tight tracking-tight mb-1 px-1 cormorant-garamond-font">
      {title}
    </p>
    <p className="text-sm text-[#FFDCDCE5] outfit-font leading-snug px-3">
      {description}
    </p>
  </motion.div>
);
const Earn = () => {
  const benefits = [
    {
      title: "Placement Linked",
      description: "Training Aligned with Job Roles",
      position: "left-[10%] top-[25%] -translate-y-1/2",
    },
    {
      title: "6 Months",
      description: "Internship Starts Early",
      position: "left-1/2 -translate-x-1/2 -top-20",
    },
    {
      title: "₹ Stipend",
      description: "Earn During Training",
      position: "right-[10%] top-[25%] -translate-y-1/2",
    },
    {
      title: "Real Work Roles",
      description: "Train Like Industry Professionals",
      position: "bottom-[8%]",
    },
    {
      title: "80% Fee",
      description: "Can Be Covered Through Training",
      position: "bottom-[8%] right-[0%]",
    },
  ];

  return (
    <section className="py-14 md:py-20 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-10 lg:mb-28 px-3"
      >
        <h2 className="text-3xl md:text-5xl text-[#1A0506] mb-4 font-bold leading-tight cormorant-garamond-font">
          Earn While You Learn
        </h2>
        <p className="text-base text-[#6B6B6B] outfit-font px-4">
          Because learning here also means earning along the way
        </p>
      </motion.div>

      <div className="hidden lg:block relative max-w-4xl mx-auto min-h-[500px]">
        {benefits.map((benefit, index) => (
          <BenefitCircle
            key={index}
            index={index}
            title={benefit.title}
            description={benefit.description}
            positionClasses={`${benefit.position} w-48 h-48`}
          />
        ))}

        <div className="absolute left-[50%] top-[58%] -translate-x-1/2 -translate-y-1/2 bg-[#f2e3e3] p-4 rounded-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-56 h-56 rounded-full border-4 border-[#A33B3F] p-1 shadow-inner overflow-hidden"
          >
            <img
              src={Student}
              alt="Professional Student Chef"
              className="w-full h-full object-cover scale-[1.24]"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="absolute left-1/2 -translate-x-1/2 -bottom-10 "
        >
          <div className="bg-[#712225] text-white text-center rounded-full py-4 px-10 shadow-2xl transition hover:bg-[#A33B3F] cormorant-garamond-font">
            <p className="text-lg text-white font-bold tracking-tight uppercase mb-1">
              Earn While You Learn
            </p>
            <p className="text-sm outfit-font text-[#FFDCDCD9]">
              Because learning here means earning along the way
            </p>
          </div>
        </motion.div>
      </div>

      <div className="lg:hidden flex flex-col items-center gap-10 px-3">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center w-full">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex flex-col items-center justify-center rounded-full bg-[#A33B3F] text-white text-center shadow-xl w-36 md:w-48 h-36 md:h-48 px-4 py-0"
            >
              <p className="text-base md:text-lg font-bold mb-1 leading-tight cormorant-garamond-font">
                {benefit.title}
              </p>
              <p className="text-[10px] md:text-xs opacity-90 outfit-font">
                {benefit.description}
              </p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className=" w-36 md:w-48 h-36 md:h-48 rounded-full border-4 border-[#A33B3F] p-1 shadow-xl overflow-hidden"
          >
            <img
              src={Student}
              alt="Professional Student Chef"
              className="w-full h-full object-cover scale-[1.24]"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-[#712225] text-white text-center rounded-full py-4 px-4 shadow-xl "
        >
          <p className="text-sm font-bold uppercase mb-1 cormorant-garamond-font">
            Earn While You Learn
          </p>
          <p className="text-xs font-sans opacity-80 outfit-font">
            Because learning here means earning along the way
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Earn;
