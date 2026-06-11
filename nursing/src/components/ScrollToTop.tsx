import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showTop && (
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          whileHover={{
            scale: 1.08,
            y: -4,
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-6 right-6 z-[999] w-12 h-12 p-3 rounded-full bg-[#292524] flex items-center justify-center hover:bg-[#B33A3B] transition-all duration-300 shadow-lg text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" fill="none">
  <path d="M3.33331 8.00016L7.99998 3.3335L12.6666 8.00016" stroke="#D6D3D1" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 12.6668V3.3335" stroke="#D6D3D1" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;