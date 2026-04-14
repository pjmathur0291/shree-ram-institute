import { Link } from "react-router-dom";

const BartendingFooter = () => {
  return (
    <footer className="bg-foreground text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="font-display text-primary-foreground text-sm font-bold">श्री</span>
              </div>
              <div className="leading-tight">
                <span className="font-display text-lg font-bold">Ram Institute</span>
                <span className="block text-xs text-cream/60">Bartending & Mixology</span>
              </div>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed">
              Uttarakhand's oldest & most trusted institute for professional bartending training. Est. 1999.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Why Us", "Courses", "Careers", "Placements", "Videos", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-cream/60 text-sm hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
              <Link to="/" className="block text-accent text-sm hover:text-accent/80 transition-colors">
                Culinary Arts & Bakery →
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-cream/60 text-sm">
              <p>430 Niranjanpur, Dehradun</p>
              <p>Uttarakhand, India</p>
              <a href="tel:+917055547000" className="block hover:text-accent transition-colors">+91 7055547000</a>
              <a href="mailto:info@raminstitute.in" className="block hover:text-accent transition-colors">info@raminstitute.in</a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 text-center">
          <p className="text-cream/40 text-sm">
            © {new Date().getFullYear()} Shri Ram Institute of Hotel Management, Dehradun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BartendingFooter;
