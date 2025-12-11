import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Users,
  MessageSquare,
  Shield,
  Rocket,
} from "lucide-react";

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Brain,
      title: "AI-Infused Development",
      description: "We integrate artificial intelligence into our development process for smarter, more efficient solutions.",
    },
    {
      icon: Users,
      title: "Senior Developers & Strategists",
      description: "Our team consists of experienced professionals who bring expertise and creativity to every project.",
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description: "Clear, consistent updates throughout your project lifecycle with no surprises.",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Industry-leading security practices to protect your data and systems.",
    },
    {
      icon: Rocket,
      title: "End-to-End Support",
      description: "From initial concept to launch and beyond, we're with you every step of the way.",
    },
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
            Why WiseWigle
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Built Different. Built Better.
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine cutting-edge technology with proven methodologies to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative ${
                index === reasons.length - 1 && reasons.length % 3 === 2
                  ? "md:col-span-2 lg:col-span-1 lg:col-start-2"
                  : ""
              }`}
            >
              <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-500 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/10 transition-all">
                  <reason.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
