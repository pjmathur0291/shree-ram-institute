import { motion } from "framer-motion";
import { ChefHat, Wine, Hotel, Users, Ship, Briefcase, UtensilsCrossed, Crown } from "lucide-react";
import cruiseCareer from "../../assets/bhm/cruise-career.jpg";
import luxuryHotel from "../../assets/bhm/luxury-hotel.jpg";

const careers = [
  { icon: ChefHat, title: "Executive Chef" },
  { icon: Wine, title: "Bartender / Sommelier" },
  { icon: Hotel, title: "Hotel General Manager" },
  { icon: Users, title: "Front Office Manager" },
  { icon: UtensilsCrossed, title: "F&B Manager" },
  { icon: Ship, title: "Cruise Line Professional" },
  { icon: Briefcase, title: "Event Coordinator" },
  { icon: Crown, title: "Own Your Restaurant" },
];

const BHMCareers = () => {
  return (
    <section id="careers" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Career Prospects</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            A Degree That Opens <span className="text-primary">Every Door</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From 5-star hotel suites to luxury cruise liners — your BHM degree unlocks careers across the globe.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            {careers.slice(0, 4).map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 text-center hover:shadow-xl transition-shadow"
              >
                <c.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-display text-sm font-bold text-foreground">{c.title}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <img src={luxuryHotel} alt="5-star hotel career" className="rounded-xl w-full h-44 object-cover" loading="lazy" width={800} height={600} />
            <img src={cruiseCareer} alt="Cruise ship career" className="rounded-xl w-full h-44 object-cover" loading="lazy" width={800} height={600} />
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {careers.slice(4).map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 text-center hover:shadow-xl transition-shadow"
              >
                <c.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="font-display text-sm font-bold text-foreground">{c.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm">
            Additional opportunities in <span className="text-foreground font-semibold">Airlines, Railways, Paramilitary Forces, MNCs, ISP Companies</span> and more.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BHMCareers;
