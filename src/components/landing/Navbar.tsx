import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const logoSrc = encodeURI("/images/SHRI RAM _LOGO_page-0001 1.webp");

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Why Us", href: "#why-us" },
  { label: "Courses", href: "#courses" },
  { label: "Placements", href: "#placements" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md border-b border-background/10">
      <div className="container mx-auto flex items-center justify-between h-28 sm:h-32 md:h-32 px-4">
        <a href="#hero" className="flex items-center gap-2">
          <img
            src={logoSrc}
            alt="Shri Ram Institute logo"
            className="block shrink-0 h-24 w-44 max-w-[min(100%,11rem)] object-contain rounded-none p-2 shadow-sm sm:h-28 sm:w-52 sm:max-w-[13rem] lg:h-24 lg:w-44 lg:max-w-[11rem]"
            width={176}
            height={96}
            loading="eager"
          />
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-background/70 hover:text-background transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+917055547000" className="flex items-center gap-2 text-sm font-medium text-background/80 hover:text-background transition-colors">
            <Phone className="w-4 h-4 text-accent" />
            +91 7055547000
          </a>
          <a
            href="#contact"
            className="bg-gradient-gold text-charcoal px-5 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-gold/20 transition-all"
          >
            Apply Now
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-background"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-foreground border-b border-background/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm font-medium text-background/70 hover:text-background py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block bg-gradient-gold text-charcoal px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-3"
                onClick={() => setMobileOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
