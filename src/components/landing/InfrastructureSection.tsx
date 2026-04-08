import { motion } from "framer-motion";
const chefInstructor = encodeURI("/images/Anubhav Semwal The Oberoi_s New Delhi 1.webp");
const breadMaking = encodeURI("/images/Kartik Kumar Hyatt Regency Dehradun 1.webp");
const bakingTools = encodeURI("/images/Kartik Kumar Hyatt Regency Dehradun 1 1.webp");
const fineDesert = encodeURI("/images/img3 1 1.webp");
const cakeDisplay = encodeURI("/images/Chirag Devi Ratn 1.webp");
const campus = encodeURI("/images/IMG-20250415-WA0046~2 1.webp");

const images = [
  { src: chefInstructor, alt: "Chef instructor demonstrating techniques", span: "md:col-span-2" },
  { src: breadMaking, alt: "Artisan bread making", span: "" },
  { src: bakingTools, alt: "Professional baking tools", span: "" },
  { src: fineDesert, alt: "Fine dining dessert plating", span: "" },
  { src: cakeDisplay, alt: "Wedding cake artistry", span: "" },
  { src: campus, alt: "Shri Ram Institute campus", span: "md:col-span-2" },
];

const InfrastructureSection = () => {
  return (
    <section id="infrastructure" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Infrastructure</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            State-of-the-Art <span className="text-primary">Culinary Labs</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional-grade kitchens, modern bakery labs, and smart classrooms — everything you need to master your craft.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl overflow-hidden ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
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
            { label: "Bakery Labs", value: "3" },
            { label: "Smart Classrooms", value: "10+" },
            { label: "Library & Resources", value: "5000+ Books" },
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

export default InfrastructureSection;
