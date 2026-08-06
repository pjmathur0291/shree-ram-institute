import React from 'react';
import { motion } from 'framer-motion';
import Image1 from '../assets/Background-3.webp';
import Image2 from '../assets/Background.webp';
import Image3 from '../assets/Background-1.webp';
import Image4 from '../assets/Background-2.webp';
import Image5 from '../assets/Background-4.webp';
import Image6 from '../assets/Background-5.webp';
import Image7 from '../assets/Background-6.webp';
import Image8 from '../assets/Background-7.webp';
import Icon2 from '../assets/Component1-6 (7).webp';
// Overview Metrics Data
const metricsData = [
  { amount: '₹3–6 LPA', label: 'Entry Level (India)', type: 'metric' },
  { amount: '₹10–20 LPA', label: 'Government / Senior Roles', type: 'metric' },
  { amount: '₹25–45 LPA', label: 'International Positions', type: 'metric' },
  { amount: '2.4 Mn', label: 'Nurses Needed in India', type: 'metric' },
];

// Specialty Tracks Cards Data
const specialtyTracks = [
  {
    title: 'Hospital Nursing',
    desc: 'Staff Nurse, ICU Nurse, OT Nurse, Head Nurse at private & government hospitals',
    image: Image1,
  },
  {
    title: 'Govt. & Armed Forces',
    desc: 'AIIMS, ESIC, Railway Hospitals, Army/Navy/Air Force nursing cadre',
    image: Image2,
  },
  {
    title: 'International Nursing',
    desc: 'Gulf, UK, Canada, Australia — high demand and premium salaries for Indian nurses',
    image: Image3,
  },
  {
    title: 'Community & Public Health',
    desc: 'PHC Nurse, Health Worker, ANM, NGO health programme roles',
    image: Image4,
  },
  {
    title: 'Teaching & Research',
    desc: 'Nursing tutor, clinical demonstrator, research assistant after M.Sc Nursing',
    image: Image5,
  },
  {
    title: 'Corporate Healthcare',
    desc: 'Occupational health nurse at MNCs, factories, and corporate campuses',
    image: Image6,
  },
  {
    title: 'Emergency & Critical Care',
    desc: 'Emergency room nurse, trauma specialist, ICU critical care nurse',
    image: Image7,
  },
  {
    title: 'Higher Education',
    desc: 'M.Sc Nursing, MPH, PG Diplomas — specialize and advance into senior roles',
    image: Image8,
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const CareerPaths = () => {
  return (
    <div className="w-full bg-[#FDFBF9] border-b border-[rgba(231, 229, 228, 0.60)] py-16 md:py-28 px-5 overflow-hidden font-sans selection:bg-rose-100 selection:text-rose-900">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-12">
          <div className="mb-6 inline-flex items-center gap-2 bg-[#F8EAEA] border border-[rgba(179, 58, 59, 0.10)] text-[#B33A3B] rounded-full px-4 py-2 text-[12px] uppercase font-black tracking-[1px]">
            Career Pathways
          </div>
          <h2 className=" text-[28px] md:text-[36px] leading-[45px] font-extrabold text-[#1C1917] Montserrat-font tracking-[-1px]">
            One Degree. Countless Careers.
          </h2>

          <div className="w-14 h-[3px]  bg-gradient-to-r from-[rgba(179,58,59,0.00)] via-[#B33A3B] to-[rgba(179,58,59,0.00)] mx-auto rounded-full mb-5 mt-3"></div>
          <p className="text-[#000] text-[16px] max-w-3xl mx-auto leading-relaxed font-normal">
            In the currently expanding healthcare ecosystem of India, choosing to enroll in one of the best colleges in
            Dehradun for BSc Nursing is one of the best choices you can make for highly rewarding job roles.
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {metricsData.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-white border border-[rgba(231, 229, 228, 0.80)] rounded-[24px] p-6 md:p-8 text-left shadow-[0_2px_12px_rgba(0,0,0,0.01)] relative overflow-hidden"
            >
              <span className="text-[10px] font-black tracking-[1px] text-[#A6A09B] uppercase block mb-2">
                Overview Metric
              </span>
              <h3 className="text-[24px] md:text-[30px] font-black text-[#B33A3B] Montserrat-font tracking-tight mb-3">
                {metric.amount}
              </h3>
              <div className="flex items-center gap-2 border-t border-[#F5F5F4] pt-3">
                <div className="h-[8px] w-[8px] rounded-full bg-[#00BC7D]"></div>
                <span className="text-[#000] font-bold text-[12px]">{metric.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-left mb-8 pb-4 flex gap-4 items-center">
          <div className="">
            <div className="mb-2 inline-flex items-center gap-2 bg-[#F8EAEA] border border-[rgba(179, 58, 59, 0.10)] text-[#B33A3B] rounded-full px-4 py-2 text-[10px] uppercase font-black tracking-[1px]">
              Professional Tracks
            </div>
            <h3 className="text-[#1C1917] font-black text-[20px] Montserrat-font tracking-tight">
              Specialty Opportunities Included:
            </h3>
          </div>
          <div className="bg-[#E7E5E4] shrink-0 h-[4px] w-100"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {specialtyTracks.map((track, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-200/80 rounded-[22px] overflow-hidden flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 group"
            >
              <div className="relative h-44 w-full bg-gray-100 ">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Embedded floating tiny red-badge icon container (Jaise image me absolute mini badge hai) */}
                <div className="absolute -bottom-2 right-3 w-[36px] h-[36px] rounded-full bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.10),_0_2px_4px_-2px_rgba(0,0,0,0.10)] shadow-md flex items-center justify-center border border-white">
                  <img src={Icon2} className="w-[14px] h-[14px] " />
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-[#1C1917] Montserrat-font font-extrabold text-[15px] tracking-wide mb-2 group-hover:text-rose-700 transition-colors duration-200">
                    {track.title}
                  </h4>
                  <p className="text-[#000] text-[12.5px] leading-relaxed font-light line-clamp-3">{track.desc}</p>
                </div>

                {/* Bottom link line */}
                <div className="pt-5 mt-4 border-t border-[#F5F5F4] flex items-center justify-between text-[#B33A3B] font-extrabold text-[11px] tracking-widest uppercase group-hover:text-[#a83939]">
                  <span>Explore Track</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-3 h-3 transform group-hover:translate-x-1 transition-transform"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CareerPaths;
