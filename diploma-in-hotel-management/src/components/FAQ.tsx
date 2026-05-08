import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer, isOpen, onClick }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-b border-red-100/50"
    >
      <button
        className="w-full py-6 flex justify-between items-center text-left transition-all"
        onClick={onClick}
      >
        <span className="justify-center text-color-red-6 text-xl font-medium cormorant-garamond-font">
          {question}
        </span>

        {/* Icon Animation */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-red-700 text-3xl leading-none"
        >
          +
        </motion.span>
      </button>

      {/* Answer Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="pb-6 text-[#8A7070] text-base font-normal outfit-font leading-7"
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Q1. What is the eligibility for the diploma?",
      answer: "You can apply after completing 10th or 12th",
    },
    {
      question: "Q2. What is the duration of the diploma?",
      answer:
        "The program typically spans over 1 to 2 years depending on the specialization chosen.",
    },
    {
      question: "Q3. Are internships included?",
      answer:
        "Yes, we provide hands-on training and mandatory internship programs with leading hotel chains.",
    },
    {
      question: "Q4. Will I get placement support?",
      answer:
        "Absolutely. We have a dedicated placement cell that connects students with 5-star hotels globally.",
    },
    {
      question: "Q5. Can I earn while studying?",
      answer:
        "Yes, our flexible training schedules allow students to take up part-time opportunities in the industry.",
    },
    {
      question: "Q6. Is the diploma recognised?",
      answer:
        "Yes, our diplomas are industry-recognised and valued by top hospitality brands worldwide.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-serif mb-16 text-[#1a1a1a]"
        >
          Frequently <span className="text-red-800 italic">Asked</span>{" "}
          Questions
        </motion.h2>

        {/* FAQ List */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
