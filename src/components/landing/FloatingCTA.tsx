import { Phone, MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center md:hidden px-4">
      <div className="flex gap-2 w-full max-w-sm">
        <a
          href="https://wa.me/917055547000?text=Hi!%20I%27m%20interested%20in%20Culinary%20Arts%20%26%20Bakery%20courses.%20Please%20share%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-background py-3 rounded-xl font-semibold text-sm shadow-lg"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
        <a
          href="tel:+917055547000"
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-xl font-semibold text-sm shadow-lg"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;
