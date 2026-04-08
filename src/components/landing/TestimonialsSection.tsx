import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Prabhdeep Singh",
    role: "Ribs & Burgers, Sydney, Australia",
    text: "Shri Ram Institute is one of the best hospitality management colleges in India. You will be moulded into a complete hospitality professional.",
    rating: 5,
  },
  {
    name: "Avinash Kumar Mishra",
    role: "Commis Chef, Carnival Cruise Line, USA",
    text: "The culinary training I received was world-class. Daily practicals and live workshops gave me the confidence to work on international cruise lines.",
    rating: 5,
  },
  {
    name: "Sumit Basera",
    role: "F&B Supervisor, Taj Dubai / MSC Cruises",
    text: "From learning the basics to serving at Taj Dubai — my journey wouldn't have been possible without the incredible faculty at Shri Ram Institute.",
    rating: 5,
  },
  {
    name: "Ravi Rawat",
    role: "Rickys All Day Grill, Alberta, Canada",
    text: "I had a great experience studying here. The faculty is well experienced and caring, guides students at every step of the way.",
    rating: 5,
  },
  {
    name: "Sweeta Mehra",
    role: "Bakery Graduate",
    text: "A great place and platform for the upcoming youth with highly qualified skilled and experienced staff who keep motivating the students.",
    rating: 5,
  },
  {
    name: "Disha Oberoi",
    role: "Culinary Arts Student",
    text: "Best teachers a student can ever get. Infrastructure is too good. Excellent atmosphere for learning culinary arts.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Student Speak</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Hear From Our <span className="text-primary">Success Stories</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-muted-foreground text-sm">4.9/5 on Google & Facebook</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 hover:shadow-xl transition-shadow"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-3" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
