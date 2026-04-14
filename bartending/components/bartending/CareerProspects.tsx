import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";
import hotelBartender from "../../assets/bartending/IMG_4938 (1) 1.webp";
import cruiseBar from "../../assets/bartending/IMG-20260410-WA0015.jpg 1.webp";
import nightclubBar from "../../assets/bartending/IMG-20260411-WA0005.jpg 1.webp";
import premiumBar from "../../assets/bartending/IMG-20260412-WA0003.jpg 1.webp";

const careers = [
  {
    title: "5-Star Hotel Bartender",
    image: hotelBartender,
    desc: "Pour at the world's finest hotels — Taj, Oberoi, Marriott, Ritz Carlton, Hyatt & more.",
  },
  {
    title: "Cruise Line Bartender",
    image: cruiseBar,
    desc: "Travel the world while you work. Serve on luxury cruise liners across global waters.",
  },
  {
    title: "Nightclub & Lounge Bar Manager",
    image: nightclubBar,
    desc: "Run the bar at premium clubs, pubs & lounges. Lead teams and craft signature menus.",
  },
  {
    title: "Bar/Café Owner & Entrepreneur",
    image: premiumBar,
    desc: "Launch your own bar, pub, café or cocktail lounge. Be your own boss.",
  },
];

const CareerProspects = () => {
  return (
    <section id="careers" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Career Prospects</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Where Will Your <span className="text-primary">Career Take You?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            The global bar industry is worth $24 billion. Bartenders are in demand 24/7 — locally & internationally.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careers.map((career, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden h-80"
            >
              <img
                src={career.image}
                alt={career.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-accent" />
                  <h3 className="font-display text-lg font-bold text-cream">{career.title}</h3>
                </div>
                <p className="text-cream/70 text-sm leading-relaxed">{career.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-gold text-charcoal px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-gold/30 transition-all"
          >
            Start Your Bartending Career <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerProspects;
