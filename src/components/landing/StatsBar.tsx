import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "Years of Excellence", suffix: "" },
  { value: "₹28", label: "Highest Package", suffix: "LPA" },
  { value: "7000+", label: "Students Placed", suffix: "" },
  { value: "100+", label: "Partner Hotels", suffix: "" },
  { value: "97.2%", label: "Placement Rate", suffix: "" },
];

const StatsBar = () => {
  return (
    <section className="bg-primary py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-2xl md:text-3xl font-bold text-accent">
                {stat.value}
                {stat.suffix && <span className="text-lg ml-1">{stat.suffix}</span>}
              </p>
              <p className="text-primary-foreground/70 text-xs md:text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
