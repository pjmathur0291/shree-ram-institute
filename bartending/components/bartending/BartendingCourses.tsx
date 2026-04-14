import { motion } from "framer-motion";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import cocktailLineup from "../../assets/bartending/cocktail-lineup.jpg";
import flairBartending from "../../assets/bartending/flair-bartending.jpg";
import mocktailPrep from "../../assets/bartending/mocktail-prep.jpg";
import baristaCoffee from "../../assets/bartending/barista-coffee.jpg";

const courses = [
  {
    title: "Advanced Professional Diploma in Bartending",
    image: flairBartending,
    duration: "6 Months",
    eligibility: "10th / 12th Pass",
    highlights: [
      "Advanced Flair & Fire Bartending",
      "60+ Cocktail & Mocktail Mastery",
      "Wine, Spirit & Beer Sommelier Training",
      "Bar Management & Entrepreneurship",
    ],
    badge: "Most Popular",
  },
  {
    title: "Professional Diploma in Bartending",
    image: cocktailLineup,
    duration: "3 Months",
    eligibility: "10th Pass | 18+ Age",
    highlights: [
      "Fast-Paced Cocktail & Mocktail Practicals",
      "Classic & Modern Mixology Techniques",
      "Customer Service & Selling Skills",
      "100% Placement Assistance",
    ],
    badge: "Quick Start",
  },
  {
    title: "Mocktail & Non-Alcoholic Beverage Specialist",
    image: mocktailPrep,
    duration: "3 Months",
    eligibility: "10th Pass",
    highlights: [
      "Creative Non-Alcoholic Mixology",
      "Molecular Beverage Techniques",
      "Fruit Carving & Garnishing Art",
      "Café & Lounge Bar Setup",
    ],
    badge: null,
  },
  {
    title: "Complimentary Barista Certification",
    image: baristaCoffee,
    duration: "Included FREE",
    eligibility: "With any Bartending Program",
    highlights: [
      "Espresso & Latte Art Mastery",
      "Coffee Bean Origins & Roasting",
      "Hot & Cold Brew Techniques",
      "Café Operations & Management",
    ],
    badge: "FREE Bonus",
  },
];

const BartendingCourses = () => {
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
            Choose Your <span className="text-primary">Bartending Path</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Industry-ready programs with 100% placement assistance. Day, evening & weekend batches available.
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

export default BartendingCourses;
