import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      description: "We dive deep into your business goals, target audience, and market landscape to craft the perfect strategy.",
    },
    {
      number: "02",
      icon: PenTool,
      title: "Design",
      description: "Our design team creates intuitive, beautiful interfaces that align with your brand and delight users.",
    },
    {
      number: "03",
      icon: Code,
      title: "Development",
      description: "Using cutting-edge technologies, we build scalable solutions with clean, maintainable code.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch & Scale",
      description: "We deploy, monitor, and continuously optimize your product for maximum performance and growth.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            From Idea to Reality
          </h2>
          <p className="text-muted-foreground text-lg">
            Our proven methodology ensures every project is delivered on time, on budget, and beyond expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-accent/50 to-accent/10" />
              )}

              <div className="relative text-center p-6">
                <div className="relative inline-flex mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-accent" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
