import { motion } from "framer-motion";
import { GraduationCap, Globe, Utensils, Users, BookOpen, MapPin, Award, ShieldCheck } from "lucide-react";
const trainingKitchen = encodeURI("/images/IMG-20250415-WA0046~2 1.webp");

const usps = [
  { icon: GraduationCap, title: "25+ Years of Excellence", desc: "Uttarakhand's oldest & most trusted culinary institute, est. 1999" },
  { icon: Utensils, title: "Daily Practical Training", desc: "70% hands-on curriculum in professional-grade kitchens" },
  { icon: Globe, title: "International Internships", desc: "Dubai, UK, Canada, Qatar, Australia — work globally" },
  { icon: Users, title: "Industry Expert Faculty", desc: "Learn from chefs with 5-star hotel & cruise line experience" },
  { icon: Award, title: "Silver Service to President", desc: "Our students served the Hon'ble President of India" },
  { icon: ShieldCheck, title: "Govt. University Approved", desc: "Degrees & diplomas from Shri Dev Suman University" },
  { icon: BookOpen, title: "FSSAI & HACCP Certified", desc: "Additional industry certifications for global careers" },
  { icon: MapPin, title: "Heart of Dehradun", desc: "430 Niranjanpur, main city — easily accessible campus" },
];

const WhyUsSection = () => {
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
            Where Passion Meets <span className="text-primary">World-Class Training</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Shri Ram Institute doesn't just teach cooking — we craft future culinary leaders with unmatched placements and global exposure.
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
              src={trainingKitchen}
              alt="Professional training kitchen at Shri Ram Institute"
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

export default WhyUsSection;
