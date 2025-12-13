import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket, Users, Award, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We push boundaries with cutting-edge solutions that anticipate tomorrow's challenges.",
    },
    {
      icon: Target,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable business outcomes.",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "We work as an extension of your team, fostering transparent partnerships.",
    },
    {
      icon: Award,
      title: "Excellence Always",
      description: "Quality is non-negotiable. We maintain the highest standards in everything we do.",
    },
    {
      icon: Rocket,
      title: "Agile Delivery",
      description: "Fast, iterative development that adapts to changing needs without compromising quality.",
    },
    {
      icon: Globe,
      title: "Global Mindset",
      description: "Serving clients worldwide with cultural awareness and 24/7 support capabilities.",
    },
  ];

  const team = [
    { name: "Alex Thompson", role: "CEO & Founder", initial: "AT" },
    { name: "Priya Sharma", role: "CTO", initial: "PS" },
    { name: "Marcus Chen", role: "Head of Design", initial: "MC" },
    { name: "Sarah Williams", role: "VP of Engineering", initial: "SW" },
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
              <span className="text-sm font-medium">About Us</span>
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              We Build What <span className="text-gradient">Matters</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed">
              WiseWigle is a team of passionate engineers, designers, and strategists 
              dedicated to transforming ideas into powerful digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2016, WiseWigle began with a simple mission: to bridge the gap 
                  between innovative ideas and world-class technology execution.
                </p>
                <p>
                  What started as a small team of three passionate developers has grown into 
                  a full-service digital agency with expertise spanning software development, 
                  AI/ML, blockchain, and digital marketing.
                </p>
                <p>
                  Today, we partner with startups, enterprises, and everything in between, 
                  delivering solutions that drive real business growth. Our client-first 
                  approach and commitment to excellence have made us a trusted partner for 
                  over 50 organizations worldwide.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/20 to-primary/20 p-8">
                <div className="w-full h-full rounded-2xl bg-card border border-border/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-serif text-6xl text-accent mb-2">8+</div>
                    <p className="text-muted-foreground">Years of Excellence</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-serif text-2xl text-foreground">150+</div>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
              Our Values
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Principles That Guide Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent text-sm font-semibold uppercase tracking-wider mb-4 block">
              Leadership
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground">
              Experienced leaders driving innovation and excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center group-hover:from-accent/40 group-hover:to-accent/20 transition-all duration-300">
                  <span className="font-serif text-3xl text-accent font-bold">{member.initial}</span>
                </div>
                <h3 className="font-serif text-lg text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
