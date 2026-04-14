import { motion } from "framer-motion";
import barTools from "../../assets/bartending/bar-tools.jpg";
import spiritsCollection from "../../assets/bartending/spirits-collection.jpg";
import wineTasting from "../../assets/bartending/wine-tasting.jpg";
import cocktailGarnish from "../../assets/bartending/cocktail-garnish.jpg";
import shakerAction from "../../assets/bartending/shaker-action.jpg";
import premiumBar from "../../assets/bartending/premium-bar.jpg";

const galleryImages = [
  { src: barTools, alt: "Professional bartending tools and equipment", span: "col-span-2 row-span-1" },
  { src: spiritsCollection, alt: "Premium spirits collection", span: "col-span-1 row-span-1" },
  { src: cocktailGarnish, alt: "Cocktail garnishing with fire", span: "col-span-1 row-span-1" },
  { src: wineTasting, alt: "Wine tasting and sommelier training", span: "col-span-1 row-span-1" },
  { src: shakerAction, alt: "Bartender shaking cocktail", span: "col-span-1 row-span-1" },
  { src: premiumBar, alt: "Premium bar interior setup", span: "col-span-2 row-span-1" },
];

const BartendingGallery = () => {
  return (
    <section id="infrastructure" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Infrastructure</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Industry-Acclaimed <span className="text-primary">Bar Lab & Training</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Train with real bar equipment in our state-of-the-art lab — designed to replicate a professional 5-star hotel bar.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`${img.span} overflow-hidden rounded-xl group`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[200px] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BartendingGallery;
