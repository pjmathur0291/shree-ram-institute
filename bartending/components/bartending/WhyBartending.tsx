import { motion } from "framer-motion";
import { GraduationCap, Globe, Wine, Users, Award, ShieldCheck, Coffee, MapPin } from "lucide-react";
import trainingBar from "../../assets/bartending/training-bar.jpg";

const usps = [
  { icon: GraduationCap, title: "25+ Years of Excellence", desc: "Uttarakhand's oldest & most trusted hospitality institute, est. 1999" },
  { icon: Wine, title: "60+ Spirits & Cocktails", desc: "Taste & master every spirit, wine, beer, liqueur & cocktail category" },
  { icon: Globe, title: "International Placements", desc: "Dubai, UK, Canada, Qatar, Australia — bartend globally" },
  { icon: Users, title: "Industry Expert Faculty", desc: "Learn from bartenders with 5-star hotel & cruise line experience" },
  { icon: Award, title: "Silver Service to President", desc: "Our students served the Hon'ble President of India" },
  { icon: ShieldCheck, title: "Govt. University Approved", desc: "Professional diploma from Shri Dev Suman University" },
  { icon: Coffee, title: "FREE Barista Course", desc: "Complimentary coffee-making & barista certification included" },
  { icon: MapPin, title: "Heart of Dehradun", desc: "430 Niranjanpur, main city — easily accessible campus" },
];

const WhyBartending = () => {
  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Why Bartending at <span className="text-primary">SRIHM Dehradun?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Master 60+ spirits, cocktails & flair techniques. Our graduates pour at Ritz Carlton, Taj, Marriott & top bars worldwide.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-5">
            {usps.slice(0, 4).map((usp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 flex gap-4 items-start hover:shadow-xl transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <usp.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">{usp.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{usp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <img
              src={trainingBar}
              alt="Professional bartending training lab at Shri Ram Institute"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </motion.div>

          <div className="space-y-5">
            {usps.slice(4).map((usp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-5 flex gap-4 items-start hover:shadow-xl transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <usp.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">{usp.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{usp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBartending;
