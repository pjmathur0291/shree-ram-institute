import React, { useState } from "react";
import Hero from "../assets/hero.webp";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "../assets/SHRI_RAM _LOGO.webp";
import { ArrowRight, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
const HeroBanner = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const payload = new URLSearchParams({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        course: formData.program || "Bartending Program",
        pageUrl: window.location.href,
        submittedAt: new Date().toISOString().slice(0, 10),
      });
      navigate("/thank-you");
    } finally {
      setIsSubmitting(false);
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Programs", href: "#" },
    { name: "Placements", href: "#" },
    { name: "Campus Life", href: "#" },
  ];
  const formVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.4,
      },
    },
  };
  return (
    <section
      className="flex flex-col gap-[44px] md:gap-[60px] items-center px-[10px] lg:px-[70px] pb-[60px] md:pb-[90px]"
      style={{
        background: `url(${Hero}) top center / cover no-repeat`,
      }}
    >
      <nav className="w-full px-4 pt-[24px] md:pt-[36px]">
        <div className="bg-white rounded-full px-8 py-3 flex items-center justify-between shadow-lg max-w-7xl mx-auto">
          <div className="h-10">
            <img src={Logo} alt="Logo" className="h-full object-contain" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="justify-center text-color-azure-34 text-sm font-normal outfit-font leading-5"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#902024] rounded-full text-white py-3 rounded-full font-medium outfit-font text-sm py-2 px-6">
              Apply Now
            </button>
          </div>

          <button
            className="md:hidden text-2xl text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black/60 z-[60] md:hidden"
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 h-full w-[90%] max-w-[350px] bg-white z-[70] md:hidden shadow-2xl p-6 flex flex-col gap-6"
              >
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-800"
                  >
                    <X size={28} />
                  </button>
                </div>

                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="justify-center text-color-azure-34 text-base font-normal outfit-font leading-5"
                    >
                      {link.name}
                    </a>
                  ))}

                  <button className="bg-[#902024] rounded-full text-white py-3 rounded-full font-medium outfit-font text-base py-2 px-6 mt-4">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container lg:mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        variants={containerVariants}
      >
        <div className="justify-center flex">
          <div className="lg:max-w-xl text-white flex flex-col gap-[14px] lg:gap-[24px]">
            <motion.span
              variants={itemVariants}
              className="flex gap-2 items-center inline-block bg-[#c41a1a33] text-[#F0BE3A] text-xs font-medium px-4 py-2 w-fit rounded-full tracking-wider uppercase outfit-font"
            >
              <div className="w-[6px] h-[6px] bg-[#F0BE3A] rounded-full"></div>{" "}
              Admissions Open 2026
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-4xl lg:text-6xl leading-[40px] lg:leading-[65px] cormorant-garamond-font max-w-[600px] font-medium"
            >
              Recognised Institute for
              <span className="text-[#F0BE3A] "> Hotel Management {""}</span>
              Build Your Career in Hotels
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="outfit-font justify-center text-white/50 text-base md:text-lg font-light leading-7 max-w-[600px]"
            >
              Recognised Institute for Hotel Management with 25+ years of
              excellence, training students for India's finest hotel brands
              —from Taj to Marriott.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.button className="w-fit outfit-font bg-[#C41A1A] text-white font-semibold py-3 px-5 rounded-sm transition-colors duration-300 uppercase text-xs md:text-base">
                Apply Now
              </motion.button>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={formVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="justify-center flex"
        >
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden lg:max-w-lg p-6 lg:p-12 flex flex-col gap-6">
            <div className="bg-[#C41A1A] text-white text-[10px] font-semibold px-4 py-1 inline-block outfit-font uppercase w-fit rounded-sm">
              Free Counselling
            </div>
            <div className="">
              <h2 className="text-2xl md:text-3xl font-bold text-[#180808] max-w-sm cormorant-garamond-font mb-2">
                Start Your Hotel Journey
              </h2>
              <p className="text-[#8A7070] text-sm outfit-font mb-6 font-medium">
                Our counselor will contact you within 30 minutes
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 border border-[#EBE0D8] bg-[#FAFAF8] rounded-md outline-none inline-flex justify-center items-start overflow-hidden text-[#B8A8A0] text-sm font-normal outfit-font"
                />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Phone Number (WhatsApp preferred)"
                  className="w-full px-4 py-3 border border-[#EBE0D8] bg-[#FAFAF8] rounded-md outline-none inline-flex justify-center items-start overflow-hidden text-[#B8A8A0] text-sm font-normal outfit-font"
                />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-[#EBE0D8] bg-[#FAFAF8] rounded-md outline-none inline-flex justify-center items-start overflow-hidden text-[#B8A8A0] text-sm font-normal outfit-font"
                />

                <div className="grid gap-4">
                  {/* <select className="w-full px-4 py-3 border border-[#EBE0D8] bg-[#FAFAF8] rounded-md outline-none inline-flex justify-center items-start overflow-hidden text-[#180808] text-sm font-normal outfit-font">
                    <option>Select State</option>
                  </select> */}
                  <select
                    value={formData.program}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, program: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#EBE0D8] bg-[#FAFAF8] rounded-md outline-none inline-flex justify-center items-start overflow-hidden text-[#180808] text-sm font-normal outfit-font"
                  >
                    <option>Program</option>
                    <option value="Bachelor of Hotel Management (BHM)">
                      Bachelor of Hotel Management (BHM)
                    </option>
                    <option value="Diploma in Hotel Management">
                      Diploma in Hotel Management
                    </option>
                    <option value="Culinary Arts">Culinary Arts</option>
                    <option value="Bartending">Bartending</option>
                    <option value="Bakery">Bakery</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C41A1A] hover:bg-[#a31616] text-white font-bold py-3 md:py-4 rounded-md text-sm tracking-wider flex items-center justify-center gap-2 transition-all outfit-font"
                >
                  Get FREE Callback Now <ArrowRight size={18} />
                </button>
                <p className="text-[12px] text-center text-[#BAADAD] outfit-font mt-4">
                  Your information is secure and will not be shared.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
