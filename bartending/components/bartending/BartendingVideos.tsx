import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";

const videos = [
  {
    title: "Bartending Student Highlight",
    description: "A glimpse of our bartending training in action.",
    youtubeId: "6UTrCAITxiw",
  },
  {
    title: "Bartending Practical Session",
    description: "Hands-on practice at our bar lab & training floor.",
    youtubeId: "VNuGn7CyG4I",
  },
  {
    title: "Flair & Presentation",
    description: "Learn techniques that make you stand out at the bar.",
    youtubeId: "M_A6K1Pm1kw",
  },
  {
    title: "Campus Life & Training",
    description: "Real moments from our classes and skill-building sessions.",
    youtubeId: "Pg-dvlGjaag",
  },
  {
    title: "Student Performance",
    description: "See our students building confidence with every pour.",
    youtubeId: "kJtpTM_xj08",
  },
].map((v) => ({
  ...v,
  thumbnail: `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`,
}));

const BartendingVideos = () => {
  const [openVideoId, setOpenVideoId] = useState<string | null>(null);

  useEffect(() => {
    if (!openVideoId) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenVideoId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openVideoId]);

  return (
    <section id="videos" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Watch & Learn</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
          OUR <span className="text-primary">SUCCESS STORIES</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          See where our students are building their careers in top hotels
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-2xl border border-border bg-background/60 py-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary/50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary/50 to-transparent" />

          <div className="flex w-max gap-6 animate-video-marquee motion-reduce:animate-none hover:[animation-play-state:paused]">
            {[...videos, ...videos].map((video, i) => (
              <motion.button
                key={`${video.youtubeId}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % videos.length) * 0.08 }}
                type="button"
                onClick={() => setOpenVideoId(video.youtubeId)}
                className="glass-card overflow-hidden shrink-0 w-[min(70vw,16rem)] sm:w-[14rem] lg:w-[16rem]"
                aria-hidden={i >= videos.length}
              >
                <div className="relative aspect-[9/16] bg-foreground/5">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-foreground/20 hover:bg-foreground/30 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 text-accent-foreground ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-bold text-foreground">{video.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{video.description}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {openVideoId && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/70 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpenVideoId(null);
          }}
        >
          <div className="w-full max-w-md rounded-2xl bg-background shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <p className="font-display font-bold text-foreground">Watch video</p>
              <button
                type="button"
                className="rounded-lg px-3 py-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                onClick={() => setOpenVideoId(null)}
              >
                Close
              </button>
            </div>
            <div className="relative aspect-[9/16] bg-foreground/5">
              <iframe
                src={`https://www.youtube.com/embed/${openVideoId}?autoplay=1&rel=0`}
                title="Bartending video"
                className="absolute inset-0 h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BartendingVideos;
