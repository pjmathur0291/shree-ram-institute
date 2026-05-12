import React, { useState } from "react";
import Hero from "../assets/hero.webp";
import RightCheck from "../assets/Background.webp";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const navigate = useNavigate();
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
      className="flex flex-col gap-[44px] md:gap-[60px] items-center py-[60px] px-[10px] md:py-[90px] lg:px-[70px]"
      style={{
        background: `url(${Hero}) top center / cover no-repeat`,
      }}
    >
      <motion.div
        className="container lg:mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="lg:max-w-xl text-white flex flex-col gap-[14px] lg:gap-[24px]">
          {/* Badge */}
          <motion.span
            variants={itemVariants}
            className="flex gap-2 items-center inline-block bg-[#c41a1a33] text-[#F0BE3A] text-xs font-medium px-4 py-2 w-fit rounded-full tracking-wider uppercase outfit-font"
          >
            <div className="w-[6px] h-[6px] bg-[#F0BE3A] rounded-full"></div>{" "}
            Admissions Open 2026
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight  cormorant-garamond-font max-w-[600px]"
          >
            A diploma built for
            <div className="italic mb-2 font-light">
              <span className="text-red-600 italic">5-star</span> and
              international
            </div>
            hotel placements
          </motion.h1>

          {/* Features List */}
          <motion.ul variants={itemVariants} className="space-y-4  ">
            <li className="flex items-center gap-3">
              <span className="h-[18px] w-[18px] flex items-center justify-center">
                <img
                  src={RightCheck}
                  className="h-100 w-100 object-fit-cover"
                  alt=""
                />
              </span>
              <span className="outfit-font text-md text-white font-medium">
                Personalized Study Plan
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-[18px] w-[18px] flex items-center justify-center">
                <img
                  src={RightCheck}
                  className="h-100 w-100 object-fit-cover"
                  alt=""
                />
              </span>
              <span className="outfit-font text-md text-white font-medium">
                Daily Execution System
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-[18px] w-[18px] flex items-center justify-center">
                <img
                  src={RightCheck}
                  className="h-100 w-100 object-fit-cover"
                  alt=""
                />
              </span>
              <span className="outfit-font text-md text-white font-medium">
                Real-Time Progress Tracking
              </span>
            </li>
          </motion.ul>

          <motion.div variants={itemVariants}>
            <motion.button className="w-fit outfit-font bg-[#C41A1A] text-white font-semibold py-3 px-5 rounded-sm transition-colors duration-300 uppercase tracking-widest text-xs md:text-base">
              Apply Now
            </motion.button>
          </motion.div>
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
                  className="w-full px-4 py-3 border border-[#EBE0D8] bg-[#FAFAF8] rounded-md outline-none inline-flex justify-center items-start overflow-hidden placeholder:text-[#B8A8A0] text-[#B8A8A0] text-sm font-normal outfit-font"
                />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Phone Number (WhatsApp preferred)"
                  className="w-full px-4 py-3 border border-[#EBE0D8] bg-[#FAFAF8] rounded-md outline-none inline-flex justify-center items-start overflow-hidden placeholder:text-[#B8A8A0] text-[#B8A8A0] text-sm font-normal outfit-font"
                />
                <input
                  type="email"
                  value={formData.email}
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-[#EBE0D8] bg-[#FAFAF8] rounded-md outline-none inline-flex justify-center items-start overflow-hidden placeholder:text-[#B8A8A0] text-[#B8A8A0] text-sm font-normal outfit-font"
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
                    className="w-full px-4 py-3 border border-[#EBE0D8] bg-[#FAFAF8] rounded-md outline-none inline-flex justify-center items-start overflow-hidden placeholder:text-[#B8A8A0] text-[#180808] text-sm font-normal outfit-font"
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
