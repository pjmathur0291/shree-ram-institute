import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    title: "Industry Expert Speaks",
    description: "Hear from hospitality industry leaders about career opportunities in bartending.",
    youtubeId: "DF1h-I__1Pw",
    thumbnail: `https://img.youtube.com/vi/DF1h-I__1Pw/hqdefault.jpg`,
  },
  {
    title: "Alumni Success Story",
    description: "Our alumni share their journey from campus to international 5-star hotel bars.",
    youtubeId: "EAAbvwGhQlI",
    thumbnail: `https://img.youtube.com/vi/EAAbvwGhQlI/hqdefault.jpg`,
  },
];

const BartendingVideos = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

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
            See What Makes Us <span className="text-primary">Different</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hear from industry experts and our successful alumni about the SRIHM bartending experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card overflow-hidden"
            >
              <div className="relative aspect-video bg-foreground/5">
                {playingId === video.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                    title={video.title}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <button
                    onClick={() => setPlayingId(video.youtubeId)}
                    className="w-full h-full relative group cursor-pointer"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-accent-foreground ml-1" />
                      </div>
                    </div>
                  </button>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{video.title}</h3>
                <p className="text-muted-foreground text-sm">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BartendingVideos;
