import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../assets/SRI_logo.webp";
import Phone from "../assets/Component.svg";

const navLinks = [
  "Overview",
  "Why SRCN",
  "Practical",
  "Curriculum",
  "Career & Salaries",
  "How to Join",
  "FAQ",
  "Have Questions?",
];

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("FAQ");
  const [isSticky, setIsSticky] = useState(false); 
  useEffect(() => {
  const handleScroll = () => {
    setIsSticky(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
<motion.header
  initial={{ opacity: 0, y: -40 }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.5,
    ease: "easeOut",
  }}
  className={`sticky top-0 w-full z-[999] transition-all duration-500 ${
    isSticky
      ? "bg-white/90 backdrop-blur-xl shadow-md"
      : "bg-white"
  }`}
>
        {/* TOP STRIP */}
        <div className="bg-[#B33A3B] border-b border-[#931B1C] text-white text-[13px] px-4 md:px-8 py-2">
          <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-2">
            {/* LEFT */}
            <div className="flex flex-wrap items-center gap-2 text-center lg:text-left">
              <span className="font-semibold whitespace-nowrap flex items-center gap-2 inter-font">
                <div className="bg-[#00D492] rounded-full w-2 h-2"></div>
                Admissions Active 2026 Batch:
              </span>

              <span className="text-white/90 hidden md:block">
                Approved by INC & Uttarakhand Nursing Council. Selected Govt.
                Hospital Clinical Partner.
              </span>
            </div>

            {/* RIGHT */}
            <motion.div
              whileHover={{ opacity: 0.8 }}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <img src={Phone} alt="Phone" className="w-4 h-4" />

              <span>Contact Counselor:<a href="+91-7055547000" target="_blank" className="text-decoration-none"> +91-7055547000</a></span>
            </motion.div>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <div className="bg-[#FFF] border-b border-gray-200">
          <div className="max-w-[1320px] mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
            {/* LOGO */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4 justify-between"
            >
              <img
                src={Logo}
                alt="Logo"
                className="w-auto object-contain aspect-[92.48/56] w-full max-w-[100px]"
              />
            </motion.div>
            <nav className="hidden lg:flex items-center gap-4">
              {navLinks.map((item, index) => (
                 <motion.a
    key={index}
    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
    onClick={() => setActiveTab(item)}
    whileHover={{ y: -2 }}
    className={`text-[14px] font-[500] text-center transition duration-200 px-3 py-2 rounded-full ${
      activeTab === item
        ? "bg-[#F8EAEA] text-[#B33A3B]"
        : "text-[#57534D] hover:text-[#B33A3B]"
    }`}
  >
    {item}
  </motion.a>
              ))}
            </nav> 

            {/* BUTTON */}
            <div className="hidden lg:block">
              <motion.a href="#AdmissionForm"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{ scale: 0.96 }}
                className="bg-[#B33A3B] hover:bg-[#98292A] text-white rounded-full px-4 py-2 text-[14px] font-semibold flex items-center gap-2 shadow-sm transition-all duration-300"
              >
                Apply Online 2026
                <ArrowUpRight size={18} />
              </motion.a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenu(true)}
              className="lg:hidden text-[#B33A3B]"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE OFFCANVAS */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenu(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.35,
              }}
              className="fixed top-0 right-0 h-screen w-[85%] max-w-[360px] bg-white z-[999] shadow-2xl"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
                <img
                  src={Logo}
                  alt="Logo"
                  className=" aspect-[92.48/56] w-full max-w-[100px] object-contain"
                />

                <button onClick={() => setMobileMenu(false)}>
                  <X size={28} className="text-[#B33A3B]" />
                </button>
              </div>

              {/* MENU */}
              <div className="flex flex-col px-6 py-6">
                {navLinks.map((item, index) => {
                  const isActive = activeTab === item;

                  return (
                    <a
                      key={index}
                      href={`#${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      onClick={() => {
                        setActiveTab(item);
                        setMobileMenu(false);
                      }}
                      className={`py-4 border-b border-gray-100 text-[15px] font-medium transition-all duration-300 ${
                        isActive
                          ? "text-[#B33A3B]"
                          : "text-gray-700"
                      }`}
                    >
                      {item}
                    </a>
                  );
                })}

                {/* BUTTON */}
                <a href="#AdmissionForm" className="mt-6 bg-[#B33A3B] hover:bg-[#98292A] text-white rounded-full py-4 font-semibold flex items-center justify-center gap-2 transition-all duration-300">
                  Apply Online 2026
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;