import { motion } from "framer-motion";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import bakeryKitchen from "@/assets/bakery-kitchen.jpg";
import culinaryPlating from "@/assets/culinary-plating.jpg";
import chocolateArt from "@/assets/chocolate-art.jpg";
import pastryDisplay from "@/assets/pastry-display.jpg";

const courses = [
  {
    title: "Diploma in Culinary Arts",
    image: culinaryPlating,
    duration: "1 Year",
    eligibility: "10th / 10+2 Pass",
    highlights: [
      "Continental, Indian & Asian Cuisines",
      "Garde Manger & Food Presentation",
      "Live workshops with celebrity chefs",
      "Industrial training at 5-star hotels",
    ],
    badge: "Most Popular",
  },
  {
    title: "Diploma in Bakery & Confectionery",
    image: bakeryKitchen,
    duration: "6 Months – 1 Year",
    eligibility: "10th Pass",
    highlights: [
      "Artisan Breads & Viennoiserie",
      "Cakes, Pastries & Desserts",
      "Chocolate Tempering & Sugar Art",
      "Entrepreneurship & Bakery Business",
    ],
    badge: "High Demand",
  },
  {
    title: "Certificate in Chocolate & Confections",
    image: chocolateArt,
    duration: "6 Months",
    eligibility: "10th Pass",
    highlights: [
      "Bean-to-Bar Chocolate Making",
      "Truffle & Bonbon Techniques",
      "Showpiece & Centerpiece Design",
      "FSSAI & HACCP Certification",
    ],
    badge: null,
  },
  {
    title: "Advanced Pastry Arts",
    image: pastryDisplay,
    duration: "6 Months",
    eligibility: "Basic Culinary Knowledge",
    highlights: [
      "French Patisserie Techniques",
      "Plated Desserts & Petit Fours",
      "Wedding & Celebration Cakes",
      "Menu Planning & Costing",
    ],
    badge: "New",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Programs</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Choose Your <span className="text-primary">Culinary Path</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Industry-ready programs with 100% placement assistance. Scholarships up to ₹3 Crores for meritorious students.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group hover:shadow-2xl transition-all"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                {course.badge && (
                  <span className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                    {course.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{course.title}</h3>
                <div className="flex gap-4 mb-4">
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-accent" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4 text-accent" />
                    {course.eligibility}
                  </span>
                </div>
                <ul className="space-y-2 mb-5">
                  {course.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
