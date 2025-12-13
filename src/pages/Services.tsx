import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import {
  Code,
  Palette,
  Smartphone,
  TrendingUp,
  Globe,
  Layers,
  Brain,
  Cloud,
  Shield,
  Zap,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom enterprise solutions built for performance, scalability, and reliability.",
      features: [
        "Custom CRM & ERP Development",
        "AR & VR Immersive Experiences",
        "Microservices Architecture",
        "Legacy System Modernization",
        "API Development & Integration",
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Palette,
      title: "Design & Product Strategy",
      description: "User-centered design that converts visitors into loyal customers.",
      features: [
        "UI/UX Design & Research",
        "Brand Identity & Guidelines",
        "3D & CGI Visualization",
        "Packaging Design",
        "Design System Development",
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform apps that users love.",
      features: [
        "React Native Applications",
        "Flutter Development",
        "iOS & Android Native",
        "Progressive Web Apps (PWA)",
        "App Store Optimization",
      ],
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Fast, secure, and SEO-optimized websites and web applications.",
      features: [
        "Custom Web Applications",
        "E-Commerce Solutions",
        "CMS Development",
        "Headless Architecture",
        "Performance Optimization",
      ],
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent automation and data-driven insights for your business.",
      features: [
        "Custom AI Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI-Powered Automation",
      ],
      gradient: "from-indigo-500/20 to-purple-500/20",
    },
    {
      icon: Layers,
      title: "Blockchain Development",
      description: "Decentralized solutions for transparency, security, and trust.",
      features: [
        "Smart Contract Development",
        "DeFi Applications",
        "NFT Marketplace Development",
        "Supply Chain Solutions",
        "Tokenization Services",
      ],
      gradient: "from-amber-500/20 to-orange-500/20",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven strategies that drive growth and ROI.",
      features: [
        "SEO & Content Marketing",
        "Performance Marketing (PPC)",
        "Social Media Management",
        "Email Marketing Automation",
        "Analytics & Reporting",
      ],
      gradient: "from-rose-500/20 to-pink-500/20",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and streamlined development workflows.",
      features: [
        "AWS, Azure, GCP Solutions",
        "CI/CD Pipeline Setup",
        "Container Orchestration",
        "Infrastructure as Code",
        "24/7 Monitoring & Support",
      ],
      gradient: "from-sky-500/20 to-blue-500/20",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      features: [
        "Security Audits & Penetration Testing",
        "Compliance (GDPR, HIPAA, SOC2)",
        "Identity & Access Management",
        "Threat Detection & Response",
        "Security Training Programs",
      ],
      gradient: "from-slate-500/20 to-gray-500/20",
    },
  ];

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
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-border/50 hover:border-accent/30 overflow-hidden bg-card hover:shadow-xl transition-all duration-500"
              >
                {/* Header with gradient */}
                <div className={`p-6 bg-gradient-to-br ${service.gradient} relative`}>
                  <div className="w-14 h-14 rounded-xl bg-background/90 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
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
            <Button variant="accent" size="lg">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default Services;
