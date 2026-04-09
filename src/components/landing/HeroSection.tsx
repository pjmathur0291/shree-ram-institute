import { motion } from "framer-motion";
import { ChefHat, Award, Star } from "lucide-react";

const heroImage = encodeURI("/images/heroImage.webp");

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Culinary Arts student at Shri Ram Institute"
          className="w-full h-full object-cover object-[70%_center] sm:object-center"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/40 to-transparent sm:hidden" />
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-24 md:pt-28 md:pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold border border-accent/30">
              Admissions Open 2026
            </span>
            <span className="bg-primary/20 text-primary-foreground px-3 py-1.5 rounded-full text-xs font-medium border border-primary/30">
              Limited Seats
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6"
          >
            From Home Kitchen to{" "}
            <span className="text-gradient-gold">Professional Career</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-cream/80 mb-8 leading-relaxed"
          >
            Uttarakhand's oldest & most trusted institute for Culinary Arts & Bakery.
            Learn from world-class chefs. Get placed in 5-star hotels worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#contact"
              className="bg-gradient-gold text-charcoal px-8 py-4 rounded-xl text-base font-bold hover:shadow-lg hover:shadow-gold/30 transition-all animate-pulse-glow"
            >
              Get FREE Callback Now
            </a>
            <a
              href="#courses"
              className="border-2 border-cream/30 text-cream px-8 py-4 rounded-xl text-base font-semibold hover:bg-cream/10 transition-all"
            >
              Explore Courses
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: ChefHat, label: "100% Job Placement", sub: "Guaranteed" },
              { icon: Award, label: "25+ Years", sub: "Of Excellence" },
              { icon: Star, label: "5-Star Hotels", sub: "Taj • Oberoi • ITC" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-cream text-sm font-bold">{item.label}</p>
                  <p className="text-cream/60 text-xs">{item.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
