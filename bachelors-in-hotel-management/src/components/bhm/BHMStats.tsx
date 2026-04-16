import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "Years Legacy" },
  { value: "4000+", label: "Alumni Network" },
  { value: "100+", label: "Placement Companies" },
  { value: "8+", label: "States Represented" },
  // { value: "₹82K", label: "Annual Fees" },
];

const BHMStats = () => {
  return (
    <section className="bg-gradient-hero py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-2xl md:text-3xl font-bold text-accent">{stat.value}</p>
              <p className="text-cream/70 text-xs mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BHMStats;
