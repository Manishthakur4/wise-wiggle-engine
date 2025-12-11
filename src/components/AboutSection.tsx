import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Rocket } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge solutions that push boundaries",
    },
    {
      icon: Target,
      title: "Intelligence",
      description: "AI-driven approaches for smarter outcomes",
    },
    {
      icon: Rocket,
      title: "Technology",
      description: "Modern stacks built for scale",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
            About WiseWigle
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Where Innovation Meets Intelligence
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            At WiseWigle, we bring innovation, intelligence, and technology together 
            to create digital products that help businesses scale. We are a full-stack 
            development and creative engineering company specializing in building modern 
            software systems, mobile apps, immersive experiences, and AI-powered solutions.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/50"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Mission
          </span>
          <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">
            Build technology that elevates brands, optimizes operations, and unlocks growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
