import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../assets/Component1-6 (1).webp';
// FAQ Data according to the image
const faqData = [
  {
    id: 1,
    question: 'Who can apply for B.Sc Nursing?',
    answer:
      'Students who have completed 10+2 with Physics, Chemistry and Biology (PCB) from a recognised board are eligible to apply.',
  },
  {
    id: 2,
    question: 'What is the duration of the program?',
    answer: 'The B.Sc Nursing program is a 4-year undergraduate degree combining academic study and clinical training.',
  },
  {
    id: 3,
    question: 'What career opportunities exist after B.Sc Nursing?',
    answer:
      'Graduates can work as registered nurses, ICU nurses, community health nurses, healthcare coordinators, educators and more across hospitals, NGOs and government programs.',
  },
  {
    id: 4,
    question: 'Is practical training included in the program?',
    answer:
      'Yes — clinical demonstrations, hospital postings, simulation labs and community visits are an integral part of the curriculum.',
  },
  {
    id: 5,
    question: 'Can I pursue higher studies after B.Sc Nursing?',
    answer:
      'Absolutely. Graduates can pursue M.Sc Nursing, specialised certifications and research opportunities in India and abroad.',
  },
  {
    id: 6,
    question: 'Why choose Shri Ram College of Nursing?',
    answer:
      'A legacy of over 26 years filled with excellence in education and providing clinical exposure with leading hospitals and modern facilities makes us the best nurse training centre Dehradun.',
  },
  {
    id: 7,
    question: 'Is Dehradun a good city for nursing education?',
    answer:
      "Dehradun is one of India's leading education hubs with a peaceful environment, top hospitals and excellent connectivity to North India.",
  },
];
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number | null) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#FDFBF9] py-16 md:py-28  px-5  selection:bg-rose-100 selection:text-rose-900">
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="mb-6 inline-flex items-center gap-2 bg-[#F8EAEA] border border-[rgba(179, 58, 59, 0.10)] text-[#B33A3B] rounded-full px-4 py-2 text-[12px] uppercase font-black tracking-[1px]">
          Knowledge Base Directory
        </div>
        <h2 className=" text-[28px] md:text-[36px] leading-[45px] font-extrabold text-[#1C1917] Montserrat-font tracking-[-1px]">
          Frequently Asked Questions
        </h2>

        {/* Small Highlight Line */}
        <div className="w-14 h-[3px]  bg-gradient-to-r from-[rgba(179,58,59,0.00)] via-[#B33A3B] to-[rgba(179,58,59,0.00)] mx-auto rounded-full mt-3 mb-3 md:mb-5"></div>
        {/* Subtitle */}
        <p className="text-[#57534D] text-[14px] sm:text-[16px] max-w-2xl mx-auto leading-relaxed mb-12 px-2">
          Find immediate answers regarding eligibility criteria, clinical rotations, secure hostel facilities, and
          global license exams.
        </p>

        {/* FAQ Accordion List */}
        <div className="max-w-[760px] mx-auto space-y-4 text-left">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={faq.id}
                className="border border-[#000] rounded-[24px] overflow-hidden bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group select-none"
                >
                  <div className="flex items-center gap-4">
                    {/* Help Icon */}
                    <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 border border-rose-100 shrink-0">
                      <img src={Icon} className="h-[16px] w-[16px]" alt="" />
                    </div>
                    {/* Question Text */}
                    <span className="text-[#1C1917] font-extrabold text-sm sm:text-[16px] tracking-wide group-hover:text-gray-900 transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  {/* Plus / Minus Icon */}
                  <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100 shrink-0 ml-2">
                    <motion.svg
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </motion.svg>
                  </div>
                </button>

                {/* Accordion Content with Framer Motion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-gray-600 text-xs sm:text-sm leading-relaxed pl-[4.25rem] pr-8 border-t border-dashed border-gray-100 pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
