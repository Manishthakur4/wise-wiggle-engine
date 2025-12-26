import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Code,
  Palette,
  Smartphone,
  TrendingUp,
  Globe,
  Layers,
  Zap,
} from "lucide-react";

// Service categories matching the What We Do dropdown
const serviceCategories = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom enterprise solutions built for performance, scalability, and reliability.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    services: [
      { name: "Custom CRM Development", href: "/services/custom-crm-development" },
      { name: "ERP Software Development", href: "/services/erp-software-development" },
      { name: "AR/VR Development", href: "/services/ar-vr-development" },
      { name: "Microservices", href: "/services/microservices" },
    ],
  },
  {
    icon: Palette,
    title: "Design & Product Strategy",
    description: "User-centered design that converts visitors into loyal customers.",
    gradient: "from-purple-500/20 to-pink-500/20",
    services: [
      { name: "UI/UX", href: "/services/ui-ux" },
      { name: "Packaging Design", href: "/services/packaging-design" },
      { name: "3D & CGI", href: "/services/3d-cgi" },
      { name: "Illustration", href: "/services/illustration" },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform apps that users love.",
    gradient: "from-orange-500/20 to-red-500/20",
    services: [
      { name: "React Native Application", href: "/services/react-native" },
      { name: "Progressive Web Application", href: "/services/pwa" },
      { name: "Flutter Application", href: "/services/flutter" },
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven strategies that drive growth and ROI.",
    gradient: "from-rose-500/20 to-pink-500/20",
    services: [
      { name: "Search Engine Optimization", href: "/services/seo" },
      { name: "Email Marketing", href: "/services/email-marketing" },
      { name: "Content Marketing", href: "/services/content-marketing" },
      { name: "Performance Marketing", href: "/services/performance-marketing" },
      { name: "Social Media Marketing", href: "/services/social-media-marketing" },
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Fast, secure, and SEO-optimized websites and web applications.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    services: [
      { name: "Website Development", href: "/services/website-development" },
      { name: "Custom Web Application", href: "/services/custom-web-application" },
      { name: "CMS Development", href: "/services/cms-development" },
      { name: "API Development & Integration", href: "/services/api-development" },
    ],
  },
  {
    icon: Layers,
    title: "Blockchain Development",
    description: "Decentralized solutions for transparency, security, and trust.",
    gradient: "from-amber-500/20 to-orange-500/20",
    services: [
      { name: "Supply Chain Solutions", href: "/services/supply-chain-blockchain" },
      { name: "Identity Management Solutions", href: "/services/identity-management" },
      { name: "NFT Marketplace", href: "/services/nft-marketplace" },
    ],
  },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-30" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
              <span className="text-sm font-medium">Our Services</span>
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              End-to-End <span className="text-gradient">Digital Solutions</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed">
              From strategy to execution, we deliver comprehensive services that 
              transform your business and drive measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-border/50 hover:border-accent/30 overflow-hidden bg-card hover:shadow-xl transition-all duration-500"
              >
                {/* Header with gradient */}
                <div className={`p-6 bg-gradient-to-br ${category.gradient} relative`}>
                  <div className="w-14 h-14 rounded-xl bg-background/90 flex items-center justify-center">
                    <category.icon className="w-7 h-7 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link 
                          to={service.href}
                          className="flex items-start gap-3 text-sm group/item hover:text-accent transition-colors"
                        >
                          <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          <span className="text-foreground/80 group-hover/item:text-accent transition-colors">
                            {service.name}
                          </span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity ml-auto mt-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center p-12 rounded-3xl bg-gradient-to-br from-accent/5 to-primary/5 border border-border/50"
          >
            <Zap className="w-12 h-12 text-accent mx-auto mb-6" />
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Need Something Custom?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We specialize in creating tailored solutions for unique business challenges. 
              Let's discuss how we can help you achieve your specific goals.
            </p>
            <Link to="/contact">
              <Button variant="accent" size="lg">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default Services;