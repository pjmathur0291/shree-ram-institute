import { motion } from "framer-motion";
import graduates from "@/assets/graduates.jpg";
import hotelChef from "@/assets/hotel-chef.jpg";
import studentSuccess from "@/assets/student-success.jpg";

const placementStats = [
  { value: "300+", label: "Students at Taj Hotels" },
  { value: "130+", label: "Students at ITC Hotels" },
  { value: "100+", label: "Students at Hyatt" },
];

const recruiters = [
  "Taj Hotels", "The Oberoi", "ITC Hotels", "The Leela", "Hyatt", 
  "Marriott", "Carnival Cruises", "MSC Cruises", "Hilton", "Radisson",
  "JW Marriott", "Accor Hotels"
];

const PlacementsSection = () => {
  return (
    <section id="placements" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Placement Success</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            From Our Kitchen to the <span className="text-gradient-gold">World's Best Hotels</span>
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            Our culinary graduates are working at the World's No.1 rated hotel — Taj Rambagh Palace and other 5-star chains globally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {placementStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center py-8 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5"
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-accent">{stat.value}</p>
              <p className="text-primary-foreground/70 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            { img: graduates, alt: "Culinary graduates celebrating" },
            { img: hotelChef, alt: "Student working as chef in 5-star hotel" },
            { img: studentSuccess, alt: "Bakery student with her creation" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-xl font-bold text-center mb-6">Our Top Recruiters</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {recruiters.map((r, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full border border-primary-foreground/20 text-sm text-primary-foreground/80 bg-primary-foreground/5"
              >
                {r}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementsSection;
