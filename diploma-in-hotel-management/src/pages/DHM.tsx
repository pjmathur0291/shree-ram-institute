import CareerPath from "../components/CareerPath";
import Cta from "../components/Cta";
import Earn from "../components/Earn";
import FAQ from "../components/FAQ";
import HeartOfDehradun from "../components/HeartOfDehradun";
import HeroBanner from "../components/HeroBanner";
import OurStudent from "../components/OurStudent";
import Placement from "../components/Placement";
import RequestForm from "../components/RequestForm";
import WhyDHM from "../components/WhyDHM";
import Icon from "../assets/Group3.webp";
import { motion } from "framer-motion";
const DHM = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <Earn />
      <WhyDHM />
      {/* <RequestForm /> */}
      <Placement />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#F3F0FA] py-16 md:py-20 px-4 flex flex-col items-center justify-center text-center"
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-[32px]">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl text-[#000] font-semibold px-1 cormorant-garamond-font mb-0"
          >
            The Only Institute Focused on {""}
            <span className="text-[#C41A1A] italic">
              {""}5-Star Hotel Placements
            </span>{" "}
            Right After Diploma
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[10px] md:text-sm tracking-[2.8px] uppercase font-medium text-[#000] outfit-font"
          >
            Shri Ram Institute of Hotel Management
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(196, 26, 26, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C41A1A] text-white font-semibold py-4 outfit-font px-12 rounded-xl transition-all duration-300 tracking-[1.396px] text-base md:text-lg"
            >
              Apply Now
            </motion.button>
          </motion.div>
          <div className="flex justify-center">
            <img
              src={Icon}
              alt="Decorative Icon"
              className="w-10 h-10 md:w-14 md:h-14 object-contain"
            />
          </div>
        </div>
      </motion.div>
      <CareerPath />
      <HeartOfDehradun />
      <OurStudent />
      <FAQ />
      <Cta />
      <section>
        <div className="flex items-center justify-center bg-red-900 py-4 ">
          <div className="justify-center text-white text-sm md:text-lg font-medium outfit-font ">
            Design and Developed By Mediagarh
          </div>
        </div>
      </section>
    </div>
  );
};

export default DHM;
