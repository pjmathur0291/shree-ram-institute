import { motion } from "framer-motion";

const videos = [
  {
    title: "Campus Tour & Industry Expert Reviews",
    id: "DF1h-I__1Pw",
    desc: "Discover what makes SRIHM Dehradun the top hotel management institute in Uttarakhand.",
  },
  {
    title: "Alumni Success Stories & Testimonials",
    id: "EAAbvwGhQlI",
    desc: "Hear from our graduates placed at Marriott, Taj, Oberoi & leading international hotel chains.",
  },
];

const BHMVideos = () => {
  return (
    <section id="videos" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Watch & Learn</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            See <span className="text-primary">SRIHM in Action</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card overflow-hidden"
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground">{video.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{video.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BHMVideos;
