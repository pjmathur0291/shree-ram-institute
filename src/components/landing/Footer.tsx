const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src={encodeURI("/logo (1).webp")}
                alt="Shri Ram Institute logo"
                className="w-16 h-16 rounded-none object-contain p-2 shadow-sm"
                width={200}
                height={64}
                loading="lazy"
              />
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              Uttarakhand's oldest & most trusted institute for Hotel Management, Culinary Arts & Bakery courses. Affiliated to Shri Dev Suman Uttarakhand University.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-background mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-background/60">
              <a href="#courses" className="hover:text-accent transition-colors">Courses</a>
              <a href="#placements" className="hover:text-accent transition-colors">Placements</a>
              <a href="#why-us" className="hover:text-accent transition-colors">Why Us</a>
              <a href="#testimonials" className="hover:text-accent transition-colors">Testimonials</a>
              <a href="#infrastructure" className="hover:text-accent transition-colors">Infrastructure</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-background mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-background/60">
              <p>📞 +91 7055547000</p>
              <p>✉️ info@raminstitute.in</p>
              <p>📍 430, Niranjanpur, Dehradun, Uttarakhand</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center text-xs text-background/40">
          <p>© {new Date().getFullYear()} Shri Ram Institute, Dehradun. All rights reserved. Design and Developed by Mediagarh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
