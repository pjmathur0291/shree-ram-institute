import { motion } from "framer-motion";
import frontOffice from "../../assets/bhm/Chirag Devi Ratn 1 (2).webp";
import housekeeping from "../../assets/bhm/DSC03195 1.webp";
import foodBeverage from "../../assets/bhm/Tenzin Ritz Carlton  1.webp";
import culinaryKitchen from "../../assets/bhm/10564131615811079229 1.webp";
import bakeryTraining from "../../assets/bhm/image 1162.webp";
import eventManagement from "../../assets/bhm/IMG-20250415-WA0051~2 1.webp";

const modules = [
  { img: frontOffice, title: "Front Office Management", desc: "Reception operations, PMS systems, guest handling & revenue management" },
  { img: foodBeverage, title: "Food & Beverage Service", desc: "Fine dining service, table d'hôte, à la carte, banqueting & wine service" },
  { img: culinaryKitchen, title: "Culinary Arts & Kitchen", desc: "Classical & modern cooking, Indian & international cuisine, kitchen management" },
  { img: housekeeping, title: "Housekeeping Operations", desc: "Room setup, laundry, linen management & hotel hygiene standards" },
  { img: bakeryTraining, title: "Bakery & Confectionery", desc: "Artisan breads, pastries, plated desserts & chocolate work" },
  { img: eventManagement, title: "Event & Banquet Management", desc: "MICE, wedding planning, corporate events & venue coordination" },
];

const BHMCurriculum = () => {
  return (
    <section id="curriculum" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">What You'll Learn</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Comprehensive <span className="text-primary">3-Year Curriculum</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Covering every pillar of the hospitality industry — from kitchen to boardroom.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card overflow-hidden group"
            >
              <div className="overflow-hidden h-64 sm:h-[320px]">
                <img
                  src={mod.img}
                  alt={mod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground">{mod.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{mod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display text-xl font-bold text-foreground">Programme Details</h3>
            <p className="text-muted-foreground text-sm mt-1">Bachelor of Hotel Management (BHM) — Government University Degree</p>
          </div>
          <div className="flex flex-wrap gap-6 text-center">
            <div>
              <p className="font-display text-2xl font-bold text-primary">3 Years</p>
              <p className="text-muted-foreground text-xs">Duration</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-primary">12th Pass</p>
              <p className="text-muted-foreground text-xs">Eligibility</p>
            </div>
            {/* <div>
              <p className="font-display text-2xl font-bold text-accent">₹82,000</p>
              <p className="text-muted-foreground text-xs">Per Year</p>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BHMCurriculum;
