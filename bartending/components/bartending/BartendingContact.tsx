import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import BartendingLeadForm from "./BartendingLeadForm";

const BartendingContact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Ready to <span className="text-primary">Start Your Journey?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Get expert counselling within 30 minutes. Limited seats — apply now for the 2026 batch!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Request a FREE Callback</h3>
            <BartendingLeadForm formLocation="contact" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "+91 7055547000", href: "tel:+917055547000" },
                  { icon: MessageCircle, label: "WhatsApp Us", href: "https://wa.me/917055547000" },
                  { icon: Mail, label: "info@raminstitute.in", href: "mailto:info@raminstitute.in" },
                  { icon: MapPin, label: "430 Niranjanpur, Dehradun, Uttarakhand", href: "#" },
                  { icon: Clock, label: "Mon–Sat: 9:00 AM – 6:00 PM", href: "#" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-3">Eligibility & Fees</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Qualification:</strong> 10th or 12th Pass</p>
                <p><strong className="text-foreground">Minimum Age:</strong> 18 years</p>
                <p><strong className="text-foreground">Study Mode:</strong> On Campus (Day / Evening / Weekend)</p>
                <p><strong className="text-foreground">Location:</strong> Shri Ram Institute, Niranjanpur, Dehradun</p>
                <p><strong className="text-foreground">Intake:</strong> 6 intake dates each year</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BartendingContact;
