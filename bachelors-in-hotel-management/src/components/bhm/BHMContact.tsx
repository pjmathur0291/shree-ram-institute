import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const BHMContact = () => {
  const navigate = useNavigate();
  const leadsheetWebhookUrl = useMemo(() => import.meta.env.VITE_LEADSHEET_WEBHOOK_URL as string | undefined, []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      if (leadsheetWebhookUrl) {
        const payload = new URLSearchParams({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          course: formData.program || "Bachelor of Hotel Management (BHM)",
          message: formData.message.trim(),
          pageUrl: window.location.href,
          submittedAt: new Date().toISOString().slice(0, 10),
        });

        const url = leadsheetWebhookUrl.includes("?")
          ? `${leadsheetWebhookUrl}&${payload.toString()}`
          : `${leadsheetWebhookUrl}?${payload.toString()}`;

        await fetch(url, { method: "GET" });
      }
      navigate("/thank-you");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full px-4 py-3 rounded-xl bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-accent"
                required
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                className="w-full px-4 py-3 rounded-xl bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-accent"
                required
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-accent"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            />
            <select
              className="w-full px-4 py-3 rounded-xl bg-cream/10 border border-cream/20 text-cream/70 focus:outline-none focus:border-accent"
              value={formData.program}
              onChange={(e) => setFormData((prev) => ({ ...prev, program: e.target.value }))}
            >
              <option value="">Select Programme</option>
              <option value="Bachelor of Hotel Management (BHM)">Bachelor of Hotel Management (BHM)</option>
              <option value="Diploma in Hotel Management">Diploma in Hotel Management</option>
              <option value="Culinary Arts">Culinary Arts</option>
              <option value="Bartending">Bartending</option>
              <option value="Bakery">Bakery</option>
            </select>
            <textarea
              rows={3}
              placeholder="Your Message (Optional)"
              className="w-full px-4 py-3 rounded-xl bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-accent resize-none"
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-gold text-charcoal py-4 rounded-xl font-bold text-base hover:shadow-lg hover:shadow-gold/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Get FREE Callback Now"}
            </button>
          </motion.form>

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
