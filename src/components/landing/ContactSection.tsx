import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send, MessageCircle, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = `Hi! I'm ${formData.name}. I'm interested in ${formData.course || "Culinary Arts & Bakery"} course at Shri Ram Institute. Please call me back. Phone: ${formData.phone}`;
    window.open(`https://wa.me/917055547000?text=${encodeURIComponent(whatsappText)}`, "_blank");
    navigate("/thank-you");
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get Started</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Start Your Culinary Career <span className="text-primary">Today</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Fill out the form and our expert counselors will guide you through the admission process. Get personalized course recommendations and scholarship information.
            </p>

            <div className="space-y-6">
              <a href="tel:+917055547000" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Call Us</p>
                  <p className="text-muted-foreground text-sm">+91 7055547000 · Mon-Sat, 9AM-6PM</p>
                </div>
              </a>

              <a
                href="https://wa.me/917055547000?text=Hi!%20I%27m%20interested%20in%20Culinary%20Arts%20%26%20Bakery%20courses.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <p className="text-muted-foreground text-sm">Reply in 2 mins</p>
                </div>
              </a>

              <a
                href="https://maps.app.goo.gl/CzmWCZRHeKXQc3aU8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Visit Campus</p>
                  <p className="text-muted-foreground text-sm">430, Niranjanpur, Dehradun (Main City)</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-1">Request a FREE Callback</h3>
              <p className="text-muted-foreground text-sm mb-6">Our counselor will contact you within 30 minutes</p>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address (Optional)"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                />
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                >
                  <option value="">Select Course *</option>
                  <option value="Diploma in Culinary Arts">Diploma in Culinary Arts</option>
                  <option value="Diploma in Bakery & Confectionery">Diploma in Bakery & Confectionery</option>
                  <option value="Certificate in Chocolate & Confections">Certificate in Chocolate & Confections</option>
                  <option value="Advanced Pastry Arts">Advanced Pastry Arts</option>
                </select>
                <textarea
                  placeholder="Message (Optional)"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-gold text-charcoal py-3.5 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-gold/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit & Get Callback
                </button>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <Shield className="w-3.5 h-3.5 text-muted-foreground" />
                <p className="text-muted-foreground text-xs">Your information is secure and will not be shared</p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
