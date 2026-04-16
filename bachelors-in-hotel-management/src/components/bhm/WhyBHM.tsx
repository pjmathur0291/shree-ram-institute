import { motion } from "framer-motion";
import { Award, Globe, BookOpen, Users, Building2, Sparkles, Languages, GraduationCap } from "lucide-react";
import graduation from "../../assets/bhm/WhatsApp Image 2026-04-16 at 17.15.33 1.webp";
import industrialVisit from "../../assets/bhm/industrial-visit.jpg";

const reasons = [
  { icon: Award, title: "25+ Years Legacy", desc: "One of the pioneering Hotel Management institutes in North India" },
  { icon: Building2, title: "5-Star Placements", desc: "Ritz Carlton, Taj, Oberoi, Marriott, Hyatt & 100+ brands" },
  { icon: Globe, title: "Global Careers", desc: "International jobs in Dubai, UK, Canada, Qatar & Australia" },
  { icon: BookOpen, title: "Practical Learning", desc: "Industrial visits to 5-star hotels & live workshops by world-renowned chefs" },
  { icon: Sparkles, title: "Smart Campus", desc: "State-of-the-art labs, smart classrooms & modern infrastructure" },
  { icon: Languages, title: "PDP & French", desc: "Personality Development Programs & French language training included" },
  { icon: Users, title: "Expert Faculty", desc: "International industry-experienced professors & mentors" },
  { icon: GraduationCap, title: "Govt. University Degree", desc: "Recognized degree from Government Universities of Uttarakhand" },
];

const WhyBHM = () => {
  return (
    <section id="why-us" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Why BHM at <span className="text-primary">Shri Ram Institute?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Dehradun's most awarded hotel management institute — shaping hospitality leaders since 2001.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left cards */}
          <div className="space-y-4">
            {reasons.slice(0, 4).map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <r.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">{r.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center image (single, taller) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <img
              src={graduation}
              alt="BHM at Shri Ram Institute"
              className="rounded-xl w-full h-[28rem] object-cover"
              loading="lazy"
              width={800}
              height={900}
            />
          </motion.div>

          {/* Right cards */}
          <div className="space-y-4">
            {reasons.slice(4).map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <r.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">{r.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBHM;
