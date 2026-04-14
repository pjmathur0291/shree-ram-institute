import { motion } from "framer-motion";
import { TrendingUp, Users, Building2, GraduationCap } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "$24B", label: "Global Bar Industry" },
  { icon: Users, value: "4000+", label: "Alumni Worldwide" },
  { icon: Building2, value: "100+", label: "Partner Companies" },
  { icon: GraduationCap, value: "25+", label: "Years of Legacy" },
];

const BartendingStats = () => {
  return (
    <section className="bg-gradient-hero py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 justify-center py-3"
            >
              <stat.icon className="w-6 h-6 text-accent" />
              <div>
                <p className="font-display text-xl md:text-2xl font-bold text-cream">{stat.value}</p>
                <p className="text-cream/70 text-xs">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BartendingStats;
