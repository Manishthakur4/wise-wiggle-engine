import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PortfolioPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "FinFlow Enterprise",
      category: "FinTech",
      description: "AI-powered financial management platform processing $2B+ annually",
      tags: ["React", "Node.js", "AI/ML", "AWS"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "HealthSync Pro",
      category: "Healthcare",
      description: "HIPAA-compliant telemedicine platform serving 500K+ patients",
      tags: ["React Native", "Python", "PostgreSQL"],
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "RetailX Commerce",
      category: "E-Commerce",
      description: "Headless commerce solution with 99.9% uptime guarantee",
      tags: ["Next.js", "Shopify", "Stripe"],
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Work
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              Featured Projects
            </h2>
          </div>
          <Link to="/portfolio">
            <Button variant="outline" className="group">
              View All Projects
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-xl"
            >
              {/* Gradient header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
                    {project.category}
                  </span>
                </div>
                <ExternalLink className="absolute top-4 right-4 w-5 h-5 text-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
