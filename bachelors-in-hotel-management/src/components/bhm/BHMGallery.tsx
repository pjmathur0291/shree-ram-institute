import { motion } from "framer-motion";
import smartClassroom from "../../assets/bhm/Ritz Carlton  1.webp";
import campusBuilding from "../../assets/bhm/Shubham Singh Sirohi Ritz Carlton, Bengalore 1.webp";
import library from "../../assets/bhm/Rohit Negi Ritz Carlton 1.webp";
import personalityDev from "../../assets/bhm/Taj Rambhag Palace 1.webp";
import culinaryKitchen from "../../assets/bhm/l24cmsj1_Taj Ram Bagh 1.webp";
import foodBeverage from "../../assets/bhm/DSC03573 1.webp";

const galleryImages = [
  { src: campusBuilding, alt: "SRIHM Campus Building, Dehradun", span: "col-span-2 row-span-1" },
  { src: smartClassroom, alt: "Smart classrooms with modern tech", span: "col-span-1 row-span-1" },
  { src: library, alt: "Library & Resource Center", span: "col-span-1 row-span-1" },
  { src: personalityDev, alt: "Personality development workshop", span: "col-span-1 row-span-1" },
  { src: culinaryKitchen, alt: "Professional culinary training kitchen", span: "col-span-1 row-span-1" },
  { src: foodBeverage, alt: "F&B service training hall", span: "col-span-2 row-span-1" },
];

const BHMGallery = () => {
  return (
    <section id="infrastructure" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Campus</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            World-Class <span className="text-primary">Infrastructure</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Located in the heart of Dehradun — a safe, beautiful & cosmopolitan education city.
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-4 gap-6 text-center"
        >
          {[
            { label: "Training Kitchens", value: "6+" },
            { label: "Smart Classrooms", value: "10+" },
            { label: "Library Books", value: "5000+" },
            { label: "Bakery Labs", value: "3" },
          ].map((item, i) => (
            <div key={i} className="glass-card p-6">
              <p className="font-display text-2xl font-bold text-primary">{item.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BHMGallery;
