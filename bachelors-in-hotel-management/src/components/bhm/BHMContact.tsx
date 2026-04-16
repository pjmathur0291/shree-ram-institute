import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import BHMLeadForm from "./BHMLeadForm";

const BHMContact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-hero text-cream">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Start Your <span className="text-gradient-gold">Hospitality Journey</span>
          </h2>
          <p className="text-cream/70 mt-4 max-w-xl mx-auto">
            Admissions are open for 2026 batch. Limited seats — apply now to secure yours!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <BHMLeadForm formLocation="contact" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: Phone, label: "+91 7055547000", href: "tel:+917055547000" },
              { icon: MessageCircle, label: "WhatsApp Us", href: "https://wa.me/917055547000?text=Hi!%20I'm%20interested%20in%20the%20BHM%20programme.%20Please%20share%20details." },
              { icon: Mail, label: "info@raminstitute.in", href: "mailto:info@raminstitute.in" },
              { icon: MapPin, label: "Shri Ram Institute, Dehradun, Uttarakhand", href: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-cream/80 hover:text-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-cream/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-base">{item.label}</span>
              </a>
            ))}

            <div className="mt-6 rounded-xl overflow-hidden h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5!2d78.03!3d30.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE5JzEyLjAiTiA3OMKwMDEnNDguMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="SRIHM Dehradun Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BHMContact;
