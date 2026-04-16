import { motion } from "framer-motion";
import placementCeremony from "../../assets/bhm/IMG-20250115-WA0083 1.webp";

const hotelBrands = [
  "Marriott International", "Ritz Carlton", "Taj Hotels", "The Oberoi Group",
  "Hyatt Regency", "Sheraton", "Fairmont", "Radisson",
  "IHG Group", "Hilton", "The Lodhi", "JW Marriott",
];

const placementDirectors = [
  { name: "Himanshu Malhotra", role: "Training Manager", company: "Hyatt Group" },
  { name: "Manohar Nimbore", role: "Training Manager", company: "The Lalit Group" },
  { name: "Chandni Singh", role: "Training Manager", company: "Oberoi Group" },
  { name: "Harkaran Singh", role: "GM Operations - South Asia", company: "Radisson Group" },
  { name: "Vishal Dhuharia", role: "HR Director", company: "The Lodhi, New Delhi" },
  { name: "Sharad Chand", role: "Quality & Training Manager", company: "Marriott International" },
];

const BHMPlacements = () => {
  return (
    <section id="placements" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Placements</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Where Our Graduates <span className="text-primary">Shine</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Dedicated Placement Board of Directors ensures the best positions in world-class 5-star hotel chains.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={placementCeremony}
            alt="Campus placement ceremony at SRIHM"
            className="rounded-xl w-full h-80 object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Our Placement Partners</h3>
            <div className="flex flex-wrap gap-3">
              {hotelBrands.map((brand, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20"
                >
                  {brand}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-xl font-bold text-foreground text-center mb-8">Placement Board of Directors (Advisory)</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {placementDirectors.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-5"
              >
                <p className="font-display font-bold text-foreground">{d.name}</p>
                <p className="text-muted-foreground text-sm">{d.role}</p>
                <p className="text-accent text-sm font-semibold mt-1">{d.company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BHMPlacements;
