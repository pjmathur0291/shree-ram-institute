import { motion } from "framer-motion";
import { Wine, Award, Globe } from "lucide-react";
import heroBartender from "../../assets/bartending/hero-bartender.jpg";

const BartendingHero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBartender}
          alt="Professional Bartender at Shri Ram Institute"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="relative container mx-auto px-4 pt-24 pb-16">
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
            Shake, Pour & <span className="text-gradient-gold">Own the Bar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-cream/80 mb-8 leading-relaxed"
          >
            Become a Bar-Flarer, not just a Bartender — in just 6 months!
            Uttarakhand's premier institute for Professional Bartending, Mixology & Flair.
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
              Explore Programs
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Wine, label: "100% Job Placement", sub: "Guaranteed" },
              { icon: Award, label: "25+ Years", sub: "Of Excellence" },
              { icon: Globe, label: "Global Careers", sub: "Dubai • UK • Canada" },
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

export default BartendingHero;
