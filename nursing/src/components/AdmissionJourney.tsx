import React from 'react'
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Timeline Steps Data from Image
const steps = [
  { id: '01', label: 'STEP 1', title: 'Apply Online' },
  { id: '02', label: 'STEP 2', title: 'Counseling' },
  { id: '03', label: 'STEP 3', title: 'Document Verification' },
  { id: '04', label: 'STEP 4', title: 'Admission Confirmation' },
  { id: '05', label: 'STEP 5', title: 'Begin Classes' },
];

// Framer Motion Variants for Staggered Load
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
const AdmissionJourney = () => {
 return (
    <div className="w-full bg-white py-16 md:py-28  selection:bg-rose-100 selection:text-rose-900  px-5">
      <div className="max-w-[1320px] mx-auto text-center flex flex-col gap-[40px] md:gap-[80px]">
         
    <div>
           <div className="mb-6 inline-flex items-center gap-2 bg-[#F8EAEA] border border-[rgba(179, 58, 59, 0.10)] text-[#B33A3B] rounded-full px-4 py-2 text-[12px] uppercase font-black tracking-[1px]">
            Admission Process
           </div> 
        {/* Heading */}
            <h2 className=" text-[28px] md:text-[36px] leading-[45px] font-extrabold text-[#1C1917] Montserrat-font tracking-[-1px]">
          Admission Journey B.Sc Nursing 2026
        </h2>

        {/* Small Gradient Divider Line */}
         <div className="w-14 h-[3px]  bg-gradient-to-r from-[rgba(179,58,59,0.00)] via-[#B33A3B] to-[rgba(179,58,59,0.00)] mx-auto rounded-full mt-3"></div> 
    </div>

        {/* Cards Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative flex flex-col md:flex-row justify-between items-center gap-6 md:gap-[20px]"
        >
          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute left-[8%] right-[8%] top-[35px] h-[2px] bg-gray-100 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              className="relative w-full md:w-[18%] bg-[#faf6f380] border border-[rgba(231, 229, 228, 0.80)] rounded-[24px] p-6 flex flex-col items-center justify-start text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-shadow duration-300 z-10 group"
            >
              {/* Vertical Line for Mobile (Except Last Item) */}
              {index !== steps.length - 1 && (
                <div className="md:hidden absolute bottom-[-26px] left-1/2 -translate-x-1/2 w-[2px] h-6 bg-gray-100" />
              )}

              {/* Step Number Circle */}
              <div className="w-[56px] h-[56px] rounded-full bg-white shadow flex items-center justify-center text-[#B33A3B] font-black text-[15px] mb-4 group-hover:scale-105 transition-transform duration-300">
                {step.id}
              </div>
 
              <span className="text-[10px] font-black tracking-[0.5px] text-[#A6A09B] uppercase mb-2">
                {step.label}
              </span>

              {/* Step Title */}
              <h4 className="text-[#1C1917] Montserrat-font text-[15px] font-bold leading-snug px-1 md:mb-6">
                {step.title}
              </h4>
            </motion.div>
          ))}
        </motion.div>

        {/* Central Apply Button */}
       <motion.a href="#AdmissionForm"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="w-fit mx-auto bg-[#B33A3B] hover:bg-[#9D2B2C] text-white rounded-[12px] px-7 py-4 text-[14px] tracking-[1px] font-black uppercase flex items-center gap-2 transition-all duration-300"
            >
             Apply Now
              <ArrowRight size={18} />
            </motion.a>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[960px] mx-auto bg-gradient-to-r from-[#0d0a0b] via-[#140f11] to-[#1c1214] rounded-[32px] p-8 sm:p-12 md:p-14 text-left relative overflow-hidden border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group"
        >
          {/* Radial Mesh Glow Effect (Jaise image me halka dark red blur glow hai) */}
          <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-rose-950/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-rose-950/30 transition-colors duration-500" />
          <div className="absolute left-[-50px] bottom-[-50px] w-[200px] h-[200px] bg-neutral-900/40 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            
            {/* Left Texts Group */}
            <div className="max-w-xl">
              {/* Core Badge */}
              <div className="inline-block bg-[rgba(255, 255, 255, 0.10)] border border-[#ffffff29] text-[9px] font-black tracking-[1px] px-2.5 py-1 rounded-md uppercase mb-4 text-[#B33A3B]">
                Core Registration Queue
              </div>
              
              {/* Banner Heading */}
              <h3 className="text-white font-black text-[20px] sm:text-[30px] md:text-[32px] leading-tight tracking-tight mb-3 Montserrat-font">
                Ready to apply for B.Sc Nursing 2026?
              </h3>
              
              {/* Banner Subtitle */}
              <p className="text-[#D6D3D1] text-xs sm:text-sm tracking-wide">
                Limited seats. Talk to our admission counselor today.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="shrink-0 flex items-center">
              <motion.a  href="#AdmissionForm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              className="w-fit mx-auto bg-[#B33A3B] hover:bg-[#9D2B2C] text-white rounded-[12px] px-7 py-4 text-[14px] tracking-[1px] font-black uppercase flex items-center gap-2 transition-all duration-300"
              >
                Apply Now
              </motion.a>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default AdmissionJourney