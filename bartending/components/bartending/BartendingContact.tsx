import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const BartendingContact = () => {
  const navigate = useNavigate();
  const leadsheetWebhookUrl = useMemo(() => import.meta.env.VITE_LEADSHEET_WEBHOOK_URL as string | undefined, []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", program: "" });

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
          course: formData.program || "Bartending Program",
          message: "",
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <select
                value={formData.program}
                onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select Programme</option>
                <option value="Advanced Diploma in Bartending (6 Months)">Advanced Diploma in Bartending (6 Months)</option>
                <option value="Professional Diploma in Bartending (3 Months)">Professional Diploma in Bartending (3 Months)</option>
                <option value="Mocktail Specialist (3 Months)">Mocktail Specialist (3 Months)</option>
              </select>
              <button
                type="submit"
                className="w-full bg-gradient-gold text-charcoal py-4 rounded-lg font-bold text-base hover:shadow-lg hover:shadow-gold/30 transition-all"
              >
                Get FREE Callback Now
              </button>
              <p className="text-xs text-muted-foreground text-center">
                🔒 Your information is secure and will not be shared
              </p>
            </form>
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
