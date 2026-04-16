import { motion } from "framer-motion";
import { GraduationCap, Globe, Building2, Users } from "lucide-react";
import heroLobby from "../../assets/bhm/hero-hotel-lobby.jpg";

const BHMHero = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-foreground">
      {/* Background image with diagonal clip */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full">
          <img
            src={heroLobby}
            alt="Luxury hotel lobby - BHM at Shri Ram Institute"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent" />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-transparent to-foreground/80 lg:hidden" />
      </div>

      <div className="relative container mx-auto px-4 pt-28 pb-20 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <span className="bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-semibold border border-accent/30">
                Admissions Open 2026
              </span>
              <span className="bg-primary/30 text-primary-foreground px-3 py-1.5 rounded-full text-xs font-medium border border-primary/30">
                3-Year Degree Programme
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6"
            >
              Your Gateway to the{" "}
              <span className="text-gradient-gold">World of Hospitality</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-cream/80 mb-8 leading-relaxed max-w-xl"
            >
              Uttarakhand's most trusted institute with 25+ years of legacy.
              Get placed in Marriott, Taj, Oberoi, Hyatt & more — nationally & internationally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#contact"
                className="bg-gradient-gold text-charcoal px-8 py-4 rounded-xl text-base font-bold hover:shadow-lg hover:shadow-gold/30 transition-all animate-pulse-glow"
              >
                Apply Now — Limited Seats
              </a>
              <a
                href="#curriculum"
                className="border-2 border-cream/30 text-cream px-8 py-4 rounded-xl text-base font-semibold hover:bg-cream/10 transition-all"
              >
                View Curriculum
              </a>
            </motion.div>
          </div>

          {/* Right side — floating stat cards */}
          <div className="hidden lg:block relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, value: "4000+", label: "Alumni Worldwide", delay: 0.3 },
                { icon: Building2, value: "100+", label: "Placement Partners", delay: 0.4 },
                { icon: Globe, value: "6+", label: "Countries for Jobs", delay: 0.5 },
                { icon: Users, value: "25+", label: "Years of Excellence", delay: 0.6 },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  className="glass-card p-6 bg-background/10 backdrop-blur-xl border-cream/10 hover:bg-background/20 transition-all group"
                >
                  <stat.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-display text-2xl font-bold text-cream">{stat.value}</p>
                  <p className="text-cream/60 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap gap-4 lg:hidden mt-4"
        >
          {[
            { icon: GraduationCap, label: "4000+ Alumni" },
            { icon: Building2, label: "100+ Partners" },
            { icon: Globe, label: "Global Careers" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-5 h-5 text-accent" />
              <span className="text-cream text-sm font-semibold">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BHMHero;
