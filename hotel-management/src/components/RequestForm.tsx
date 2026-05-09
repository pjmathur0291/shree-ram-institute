import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RequestForm = () => {
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
  const formVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.4,
      },
    },
  };
  return (
    <section className="section-padding bg-[#F5F5F5]">
      <motion.div
        variants={formVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <div className="mx-auto max-w-2xl glass-card p-6 md:p-8">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4 text-center">
            Request a FREE Callback
          </h3>
          <p className="text-[#000000B2] text-base outfit-font mb-6 font-light text-center">
            Our counselor will contact you within 30 minutes
          </p>{" "}
          <form
            onSubmit={handleSubmit}
            className={" flex flex-col items-center gap-[30px] md:gap-[40px]"}
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Full Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-[#EBE0D8] bg-[#F9F7F5] rounded-full text-base outline-none inline-flex justify-center items-start overflow-hidden text-[#B8A8A0] font-normal outfit-font"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border border-[#EBE0D8] bg-[#F9F7F5] rounded-full text-base outline-none inline-flex justify-center items-start overflow-hidden text-[#B8A8A0] font-normal outfit-font"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-[#EBE0D8] bg-[#F9F7F5] rounded-full text-base outline-none inline-flex justify-center items-start overflow-hidden text-[#B8A8A0] font-normal outfit-font"
              />
              <select
                value={formData.program}
                onChange={(e) =>
                  setFormData({ ...formData, program: e.target.value })
                }
                className="w-full  px-4 py-3 border border-[#EBE0D8] bg-[#F9F7F5] rounded-full text-base outline-none inline-flex justify-center items-start overflow-hidden text-[#B8A8A0] font-normal outfit-font"
              >
                <option value="">Select Programme</option>
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
              style={{
                background: "linear-gradient(90deg, #FACC15 0%, #FEF08A 100%)",
              }}
              className="w-full mt  flex gap-2 items-center justify-center max-w-lg text-charcoal py-4 rounded-lg font-bold text-base transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Get FREE Callback Now"}
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default RequestForm;
