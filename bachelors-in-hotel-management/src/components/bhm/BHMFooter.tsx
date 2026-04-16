import { Link } from "react-router-dom";

const logoSrc = encodeURI("/images/SHRI RAM _LOGO_page-0001 1.webp");

const BHMFooter = () => {
  return (
    <footer className="bg-foreground text-cream/60 py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src={logoSrc}
                alt="Shri Ram Institute logo"
                className="h-28 w-52 max-w-full object-contain rounded-none p-3 shadow-sm sm:h-32 sm:w-60 md:h-28 md:w-56"
                width={208}
                height={112}
                loading="lazy"
              />
            </div>
            <p className="text-sm">Uttarakhand's oldest & most trusted institute for Hotel Management, Culinary Arts & Hospitality Education since 2001.</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-cream mb-3">Our Programmes</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/hotel-management" className="hover:text-accent transition-colors">Bachelor of Hotel Management</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">Culinary Arts & Bakery</Link></li>
              <li><Link to="/bartending" className="hover:text-accent transition-colors">Bartending & Mixology</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-cream mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 +91 7055547000</li>
              <li>📧 info@raminstitute.in</li>
              <li>📍 Dehradun, Uttarakhand</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-cream/10 pt-6 text-center text-xs">
          <p>© {new Date().getFullYear()} Shri Ram Institute of Hotel Management, Dehradun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default BHMFooter;
