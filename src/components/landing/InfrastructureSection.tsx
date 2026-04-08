import { motion } from "framer-motion";
import chefInstructor from "@/assets/chef-instructor.jpg";
import breadMaking from "@/assets/bread-making.jpg";
import bakingTools from "@/assets/baking-tools.jpg";
import fineDesert from "@/assets/fine-dessert.jpg";
import cakeDisplay from "@/assets/cake-display.jpg";
import campus from "@/assets/campus.jpg";

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
