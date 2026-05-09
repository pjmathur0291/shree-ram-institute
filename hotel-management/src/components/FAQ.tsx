import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [activeId, setActiveId] = useState(0); // First one open by default as per image

  const faqs = [
    {
      id: 0,
      question: "What are the eligibility criteria?",
      answer:
        "12th pass students can apply for Certificate, Diploma, and Bachelor programs. For Masters, a Bachelor's degree in any stream is required. No specific stream restriction exists at 10+2 level.",
    },
    {
      id: 1,
      question: "Is placement support provided?",
      answer:
        "Yes, we provide 100% placement assistance through our dedicated cell, connecting students with top luxury hotel brands globally.",
    },
    {
      id: 2,
      question: "Are internships included in the program?",
      answer:
        "Absolutely. Industrial training and internships are core components of our curriculum to ensure real-world exposure.",
    },
    {
      id: 3,
      question: "What courses are available?",
      answer:
        "We offer a wide range of programs including BHM, Diploma in Food Production, and specialized Culinary Arts certifications.",
    },
    {
      id: 4,
      question: "Are scholarships available?",
      answer:
        "Yes, we offer merit-based scholarships and special financial aid for deserving candidates based on academic performance.",
    },
    {
      id: 5,
      question: "Where is the institute located?",
      answer:
        "Our main campus is located in Dehradun, providing a serene environment perfect for professional hospitality training.",
    },
  ];

  return (
    <section className="bg-[#F7EDD8] py-14 md:py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 lg:gap-12">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl cormorant-garamond-font font-bold leading-tight text-[#180808] max-w-lg"
          >
            Common <span className="text-[#C41A1A] italic">questions</span>{" "}
            answered.
          </motion.h2>
        </div>

        {/* Right Side: Accordion */}
        <div className="lg:w-2/3 mx-auto">
          <div className="">
            {faqs.map((faq) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                key={faq.id}
                className="border-b border-[#c41a1a29]"
              >
                <button
                  onClick={() =>
                    setActiveId(activeId === faq.id ? null : faq.id)
                  }
                  className="w-full py-4 md:py-6 flex justify-between items-center text-left group"
                >
                  <span
                    className={`text-lg md:text-xl font-medium cormorant-garamond-font transition-colors duration-300 ${activeId === faq.id ? "text-[#180808]" : "text-[#180808]"}`}
                  >
                    {faq.question}
                  </span>
                  <span className="text-xl text-[#C41A1A] outfit-font">
                    {activeId === faq.id ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {activeId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 md:pb-6 text-sm md:text-base leading-relaxed text-[#8A7070] outfit-font">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
