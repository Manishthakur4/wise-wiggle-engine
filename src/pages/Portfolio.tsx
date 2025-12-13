import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "FinTech", "Healthcare", "E-Commerce", "Enterprise", "Blockchain"];

  const projects = [
    {
      title: "FinFlow Enterprise",
      category: "FinTech",
      description: "AI-powered financial management platform processing $2B+ annually. Features include real-time analytics, automated compliance, and predictive insights.",
      tags: ["React", "Node.js", "AI/ML", "AWS"],
      color: "from-blue-500/20 to-cyan-500/20",
      stats: "$2B+ Processed",
    },
    {
      title: "HealthSync Pro",
      category: "Healthcare",
      description: "HIPAA-compliant telemedicine platform connecting patients with healthcare providers. Includes video consultations, EHR integration, and appointment scheduling.",
      tags: ["React Native", "Python", "PostgreSQL"],
      color: "from-emerald-500/20 to-teal-500/20",
      stats: "500K+ Patients",
    },
    {
      title: "RetailX Commerce",
      category: "E-Commerce",
      description: "Headless commerce solution with advanced inventory management, multi-channel selling, and AI-powered product recommendations.",
      tags: ["Next.js", "Shopify", "Stripe"],
      color: "from-purple-500/20 to-pink-500/20",
      stats: "99.9% Uptime",
    },
    {
      title: "ChainTrack Supply",
      category: "Blockchain",
      description: "Blockchain-based supply chain transparency platform enabling real-time tracking and verification of products from source to consumer.",
      tags: ["Solidity", "React", "Node.js"],
      color: "from-amber-500/20 to-orange-500/20",
      stats: "1M+ Products Tracked",
    },
    {
      title: "EnterpriseHub CRM",
      category: "Enterprise",
      description: "Custom CRM solution with AI-powered lead scoring, automated workflows, and deep integration with existing enterprise systems.",
      tags: ["React", "Python", "Salesforce"],
      color: "from-indigo-500/20 to-violet-500/20",
      stats: "40% Efficiency Gain",
    },
    {
      title: "InvestSmart App",
      category: "FinTech",
      description: "Mobile investment platform with robo-advisory features, portfolio management, and real-time market data integration.",
      tags: ["React Native", "Python", "AWS"],
      color: "from-sky-500/20 to-blue-500/20",
      stats: "200K+ Users",
    },
    {
      title: "MediTrack Pro",
      category: "Healthcare",
      description: "Patient monitoring system with IoT integration, real-time alerts, and predictive health analytics for hospitals and clinics.",
      tags: ["React", "IoT", "Machine Learning"],
      color: "from-rose-500/20 to-red-500/20",
      stats: "50+ Hospitals",
    },
    {
      title: "NFT Artistry",
      category: "Blockchain",
      description: "Full-featured NFT marketplace with auction system, creator royalties, and social features for digital artists and collectors.",
      tags: ["Next.js", "Solidity", "IPFS"],
      color: "from-fuchsia-500/20 to-purple-500/20",
      stats: "$5M+ Trading Volume",
    },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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
              <span className="text-sm font-medium">Our Portfolio</span>
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Projects That <span className="text-gradient">Make Impact</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed">
              Explore our collection of successful projects across industries. 
              Each one represents our commitment to excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border/50 sticky top-[68px] bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-xl"
              >
                {/* Gradient header */}
                <div className={`h-56 bg-gradient-to-br ${project.color} relative overflow-hidden p-6 flex flex-col justify-between`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
                  
                  <div className="flex justify-between items-start relative">
                    <span className="inline-block px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground">
                      {project.category}
                    </span>
                    <ArrowUpRight className="w-6 h-6 text-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="relative">
                    <span className="inline-block px-4 py-2 rounded-lg bg-background/90 backdrop-blur-sm text-sm font-semibold text-accent">
                      {project.stats}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default Portfolio;
