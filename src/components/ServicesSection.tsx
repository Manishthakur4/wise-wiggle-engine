import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Palette,
  Smartphone,
  TrendingUp,
  Globe,
  Layers,
  Sparkles,
} from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Powerful, scalable, and built for real-world performance.",
      items: [
        "Custom CRM Development",
        "ERP Software Development",
        "AR & VR Development",
        "Microservices-Based Architecture",
      ],
    },
    {
      icon: Palette,
      title: "Design & Product Strategy",
      description: "Where creative vision meets functional excellence.",
      items: [
        "UI/UX Design",
        "Packaging Design",
        "3D & CGI Visualization",
        "Custom Illustrations",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Modern apps with seamless performance.",
      items: [
        "React Native Applications",
        "Progressive Web Applications (PWA)",
        "Flutter Applications",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic, data-driven growth for your brand.",
      items: [
        "Search Engine Optimization (SEO)",
        "Email Marketing",
        "Content Marketing",
        "Performance Marketing",
        "Social Media Marketing",
      ],
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Fast, secure, and future-ready websites & web systems.",
      items: [
        "Website Development",
        "Custom Web Application Development",
        "CMS-Based Solutions",
        "API Development & Integrations",
      ],
    },
    {
      icon: Layers,
      title: "Blockchain Development",
      description: "Build trust, transparency, and innovation through Web3.",
      items: [
        "Supply Chain Blockchain Solutions",
        "Decentralized Identity Systems",
        "NFT Marketplace Development",
      ],
    },
  ];

  const additionalServices = [
    "AI Automation",
    "Cloud Architecture",
    "DevOps",
    "Cybersecurity",
    "Product Consulting",
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to deployment, we deliver end-to-end solutions that drive business growth.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional services */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-accent mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">And Much More</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {additionalServices.map((service) => (
              <span
                key={service}
                className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm text-foreground/80 hover:border-accent/30 transition-colors"
              >
                {service}
              </span>
            ))}
          </div>
          <p className="text-lg text-muted-foreground font-medium">
            If it is digital — <span className="text-accent">WiseWigle</span> can build it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
