import { motion } from "framer-motion";
import { Star, MapPin, Building2 } from "lucide-react";
import placementSuccess from "../../assets/bartending/placement-success.jpg";

const recruiters = [
  "Taj Hotels", "Oberoi Group", "Marriott International", "Ritz Carlton",
  "Hyatt Regency", "Sheraton", "Fairmont", "ITC Hotels",
  "The Lalit", "Radisson", "Hilton", "IHG Hotels",
];

const placementHighlights = [
  { icon: Star, value: "100%", label: "Placement Rate" },
  { icon: Building2, value: "100+", label: "Recruiter Partners" },
  { icon: MapPin, value: "15+", label: "Countries" },
];

const BartendingPlacements = () => {
  return (
    <section id="placements" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Placements</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            From Campus to <span className="text-primary">5-Star Bars Worldwide</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our dedicated Placement Board of Directors ensures every graduate lands at top hotel chains & bars globally.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={placementSuccess}
              alt="Bartending graduates placed at international hotels"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </motion.div>

          <div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {placementHighlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-5 text-center"
                >
                  <item.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold text-foreground">{item.value}</p>
                  <p className="text-muted-foreground text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <h3 className="font-display text-xl font-bold text-foreground mb-4">Our Top Recruiters</h3>
            <div className="flex flex-wrap gap-3">
              {recruiters.map((name, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20"
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BartendingPlacements;
