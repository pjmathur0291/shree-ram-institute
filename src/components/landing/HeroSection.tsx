import { motion } from "framer-motion";

const heroImage = encodeURI("/images/heroImage.webp");

const HeroSection = () => {
  return (
    <section id="hero" className="relative flex min-h-[100dvh] min-h-screen flex-col overflow-x-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Culinary Arts student at Shri Ram Institute"
          className="w-full h-full object-cover object-[70%_center] sm:object-center md:object-[55%_center]"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/40 to-transparent sm:hidden" />
        <div
          className="absolute inset-0 hidden bg-gradient-to-r from-foreground/85 via-foreground/45 to-transparent md:block"
          aria-hidden
        />
      </div>

      {/* Mobile: 20px above fixed bar + ~4.5rem for bar + bottom-4 gap; desktop: standard section padding */}
      <div className="relative z-10 flex min-h-[100dvh] min-h-screen w-full flex-1 flex-col justify-end pb-[calc(20px+4.5rem)] pt-8 md:min-h-screen md:justify-center md:pb-20 md:pt-28">
        <div className="container mx-auto w-full min-w-0 max-w-full px-[15px] md:px-8">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="space-y-4 mb-10"
            >
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight">
                100% placement in{" "}
                <span className="text-gradient-gold">5-star hotels</span>
              </h1>
              <p className="font-display text-xl sm:text-2xl md:text-3xl text-cream/95 tracking-wide">
                Taj - Oberoi - Hyatt - ITC
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-cream/90 leading-snug font-medium">
                Uttarakhand&apos;s #1 Institute for Culinary Arts &amp; Bakery
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="bg-gradient-gold text-charcoal px-8 py-4 rounded-xl text-base font-bold hover:shadow-lg hover:shadow-gold/30 transition-all animate-pulse-glow"
              >
                Get FREE Callback Now
              </a>
              <a
                href="#courses"
                className="border-2 border-cream/30 text-cream px-8 py-4 rounded-xl text-base font-semibold hover:bg-cream/10 transition-all"
              >
                Explore Courses
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
