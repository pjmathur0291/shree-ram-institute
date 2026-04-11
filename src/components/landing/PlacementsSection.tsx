import { motion } from "framer-motion";

const placement = (filename: string) => encodeURI(`/images/placement/${filename}`);
const oberoi = (filename: string) => encodeURI(`/images/oberei/${filename}`);

const placementCollage = {
  hero: placement("taj-rambagh-group 1.webp"),
  leftTop: placement("taj-rambagh-palace-2 1.webp"),
  leftMid: placement("taj-selection 1.webp"),
  leftBottom: placement("taj-club 1.webp"),
  rightTop: placement("taj-rambagh-palace-1 1.webp"),
  rightMid: placement("monika-taj 1.webp"),
  rightBottom: placement("chandra-taj-devi-ratan 1.webp"),
} as const;

const oberoiCollage = {
  hero: oberoi("kajal-oberoi-sukhvillas 1.webp"),
  leftTop: oberoi("amisha-oberoi-gurugram 1.webp"),
  leftBottom: oberoi("oberoi-udai-vilas 1.webp"),
  rightTop: oberoi("jigme-oberoi-sukhvillas 1.webp"),
  rightBottom: oberoi("oberoi-rajvilas 1.webp"),
} as const;

const placementStats = [
  { value: "300+", label: "Students at Taj Hotels" },
  { value: "130+", label: "Students at ITC Hotels" },
  { value: "100+", label: "Students at Hyatt" },
];

const recruiterLogo = (filename: string) => encodeURI(`/images/recruiters/${filename}`);

const recruiterLogos = [
  "Frame 2147238321.webp",
  "Frame 2147238322.webp",
  "Frame 2147238323.webp",
  "Frame 2147238324.webp",
  "Frame 2147238325.webp",
  "Frame 2147238326.webp",
  "Frame 2147238327.webp",
  "Frame 2147238328.webp",
  "Frame 2147238329.webp",
  "Frame 2147238330.webp",
  "Frame 2147238331.webp",
  "Frame 2147238332.webp",
].map(recruiterLogo);

const PlacementsSection = () => {
  return (
    <section id="placements" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Placement Success</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
          From Shri Ram Institute to <span className="text-gradient-gold">5-Star Hotels</span>
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            Our culinary graduates are working at the World's No.1 rated hotel — Taj Rambagh Palace and other 5-star chains globally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {placementStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center py-8 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5"
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-accent">{stat.value}</p>
              <p className="text-primary-foreground/70 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="px-5 py-2 rounded-full bg-primary-foreground text-primary border border-accent/40 shadow-sm">
              <span className="font-display font-bold">TAJ</span>{" "}
              <span className="text-sm opacity-80">Hotels</span>
            </span>
            <span className="px-5 py-2 rounded-full bg-gradient-gold text-charcoal font-display font-bold shadow-sm">
              Rambagh Palace
            </span>
          </div>

          <div className="relative mx-auto max-w-6xl">
            {/* Mobile/tablet: show all images in a grid */}
            <div className="grid grid-cols-2 gap-4 lg:hidden">
              {[
                placementCollage.leftTop,
                placementCollage.rightTop,
                placementCollage.leftMid,
                placementCollage.rightMid,
                placementCollage.leftBottom,
                placementCollage.rightBottom,
              ].map((src) => (
                <div key={src} className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-primary-foreground/10">
                  <img
                    src={src}
                    alt="Student placement moment"
                    className="w-full h-40 sm:h-48 object-cover"
                    loading="lazy"
                    width={700}
                    height={500}
                  />
                </div>
              ))}

              <div className="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl ring-2 ring-accent/60 bg-primary-foreground/5">
                <img
                  src={placementCollage.hero}
                  alt="Students placed at Taj Rambagh Palace"
                  className="w-full h-[260px] sm:h-[340px] object-cover"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-gold text-charcoal font-display font-bold shadow-lg">
                    Taj Rambagh Palace
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop: left + hero + right stacks */}
            <div className="hidden lg:grid grid-cols-[1fr_1.6fr_1fr] gap-6 items-center">
              <div className="flex flex-col gap-6">
                {[placementCollage.leftTop, placementCollage.leftMid, placementCollage.leftBottom].map((src, i) => (
                  <div
                    key={src}
                    className={[
                      "rounded-2xl overflow-hidden shadow-lg ring-1 ring-primary-foreground/10",
                      i === 1 ? "ml-10" : "",
                    ].join(" ")}
                  >
                    <img
                      src={src}
                      alt="Student placement moment"
                      className="w-full h-40 object-cover"
                      loading="lazy"
                      width={600}
                      height={400}
                    />
                  </div>
                ))}
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-2 ring-accent/60 bg-primary-foreground/5">
                <img
                  src={placementCollage.hero}
                  alt="Students placed at Taj Rambagh Palace"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-gold text-charcoal font-display font-bold shadow-lg">
                    Taj Rambagh Palace
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                {[placementCollage.rightTop, placementCollage.rightMid, placementCollage.rightBottom].map((src, i) => (
                  <div
                    key={src}
                    className={[
                      "rounded-2xl overflow-hidden shadow-lg ring-1 ring-primary-foreground/10",
                      i === 1 ? "mr-10" : "",
                    ].join(" ")}
                  >
                    <img
                      src={src}
                      alt="Student placement moment"
                      className="w-full h-40 object-cover"
                      loading="lazy"
                      width={600}
                      height={400}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-primary-foreground/70 mt-6">
            Actual pictures of our students placed at Taj Hotels
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center justify-center mb-8">
            <span className="px-10 py-3 rounded-2xl bg-primary-foreground text-primary border border-accent/40 shadow-sm font-display font-bold text-2xl tracking-wide">
              THE OBEROI
            </span>
          </div>

          <div className="relative mx-auto max-w-6xl">
            {/* Mobile/tablet: show all images in a grid */}
            <div className="grid grid-cols-2 gap-4 lg:hidden">
              {[oberoiCollage.leftTop, oberoiCollage.rightTop, oberoiCollage.leftBottom, oberoiCollage.rightBottom].map((src) => (
                <div key={src} className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-primary-foreground/10">
                  <img
                    src={src}
                    alt="Student placement moment at Oberoi"
                    className="w-full h-48 sm:h-56 object-cover"
                    loading="lazy"
                    width={700}
                    height={500}
                  />
                </div>
              ))}

              <div className="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl ring-2 ring-accent/60 bg-primary-foreground/5">
                <img
                  src={oberoiCollage.hero}
                  alt="Students placed at The Oberoi"
                  className="w-full h-[260px] sm:h-[340px] object-cover"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
              </div>
            </div>

            {/* Desktop: left + hero + right stacks */}
            <div className="hidden lg:grid grid-cols-[1fr_1.6fr_1fr] gap-6 items-center">
              <div className="flex flex-col gap-6">
                {[oberoiCollage.leftTop, oberoiCollage.leftBottom].map((src, i) => (
                  <div
                    key={src}
                    className={[
                      "rounded-2xl overflow-hidden shadow-lg ring-1 ring-primary-foreground/10",
                      i === 0 ? "ml-6" : "",
                    ].join(" ")}
                  >
                    <img
                      src={src}
                      alt="Student placement moment at Oberoi"
                      className="w-full h-56 object-cover"
                      loading="lazy"
                      width={700}
                      height={500}
                    />
                  </div>
                ))}
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-2 ring-accent/60 bg-primary-foreground/5">
                <img
                  src={oberoiCollage.hero}
                  alt="Students placed at The Oberoi"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
              </div>

              <div className="flex flex-col gap-6">
                {[oberoiCollage.rightTop, oberoiCollage.rightBottom].map((src, i) => (
                  <div
                    key={src}
                    className={[
                      "rounded-2xl overflow-hidden shadow-lg ring-1 ring-primary-foreground/10",
                      i === 0 ? "mr-6" : "",
                    ].join(" ")}
                  >
                    <img
                      src={src}
                      alt="Student placement moment at Oberoi"
                      className="w-full h-56 object-cover"
                      loading="lazy"
                      width={700}
                      height={500}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-primary-foreground/70 mt-6">
            Actual pictures of our students placed at Oberoi Hotels
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          aria-label="Our top recruiter partner logos"
        >
          <h3 className="font-display text-xl font-bold text-center mb-6">Our Top Recruiters</h3>
          <div className="relative overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 py-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-primary to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-primary to-transparent" />

            <div className="flex w-max animate-recruiter-marquee motion-reduce:animate-none gap-4">
              {[...recruiterLogos, ...recruiterLogos].map((src, i) => (
                <div
                  key={`${src}-${i}`}
                  className="flex h-14 w-[calc((min(100vw,72rem)-4rem-1rem)/2)] shrink-0 items-center justify-center rounded-xl bg-primary-foreground px-3 sm:h-16 lg:h-[4.5rem] lg:w-[calc((min(100vw,72rem)-4rem-5rem)/6)]"
                  aria-hidden={i >= recruiterLogos.length}
                >
                  <img
                    src={src}
                    alt="Recruiter partner logo"
                    className="max-h-full w-auto max-w-full object-contain"
                    loading="lazy"
                    draggable={false}
                    width={200}
                    height={80}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementsSection;
