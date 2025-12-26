import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Code, Palette, Smartphone, TrendingUp, Globe, Layers } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";

// Service data with all details
const servicesData: Record<string, {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  icon: typeof Code;
  gradient: string;
}> = {
  // Software Development
  "custom-crm-development": {
    title: "Custom CRM Development",
    category: "Software Development",
    description: "Build powerful, tailored CRM solutions that streamline your customer relationships and boost sales performance.",
    longDescription: "Our custom CRM development services help businesses manage customer interactions, automate workflows, and gain valuable insights. We build scalable solutions that integrate seamlessly with your existing systems and grow with your business needs.",
    features: [
      "Customer data management & segmentation",
      "Sales pipeline automation",
      "Marketing campaign integration",
      "Analytics & reporting dashboards",
      "Third-party integrations (email, social, etc.)",
      "Mobile-responsive design",
    ],
    benefits: [
      "Increase sales efficiency by up to 40%",
      "360-degree customer view",
      "Automated lead nurturing",
      "Data-driven decision making",
    ],
    icon: Code,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  "erp-software-development": {
    title: "ERP Software Development",
    category: "Software Development",
    description: "Enterprise resource planning solutions that unify your business operations and drive efficiency.",
    longDescription: "We develop comprehensive ERP systems that integrate all facets of your business operations—from inventory and supply chain to HR and finance—into a single, cohesive platform that enhances productivity and decision-making.",
    features: [
      "Financial management & accounting",
      "Inventory & supply chain management",
      "Human resources management",
      "Manufacturing & production planning",
      "Business intelligence & analytics",
      "Multi-location & multi-currency support",
    ],
    benefits: [
      "Unified business operations",
      "Real-time data visibility",
      "Reduced operational costs",
      "Improved compliance & reporting",
    ],
    icon: Code,
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  "ar-vr-development": {
    title: "AR/VR Development",
    category: "Software Development",
    description: "Immersive augmented and virtual reality experiences that transform how users interact with your brand.",
    longDescription: "We create cutting-edge AR/VR applications for training, marketing, retail, and entertainment. Our solutions leverage the latest technologies to deliver unforgettable immersive experiences that engage users and drive results.",
    features: [
      "Virtual reality training simulations",
      "Augmented reality product visualization",
      "Interactive 3D environments",
      "Cross-platform compatibility",
      "Gesture & motion tracking",
      "Multiplayer VR experiences",
    ],
    benefits: [
      "Enhanced user engagement",
      "Reduced training costs",
      "Innovative brand experiences",
      "Competitive differentiation",
    ],
    icon: Code,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  "microservices": {
    title: "Microservices Architecture",
    category: "Software Development",
    description: "Scalable, modular architecture that enables rapid development and seamless scaling.",
    longDescription: "We help organizations transition to microservices architecture, breaking down monolithic applications into independent, loosely coupled services that can be developed, deployed, and scaled independently.",
    features: [
      "Service decomposition strategy",
      "API gateway implementation",
      "Container orchestration (Kubernetes)",
      "Event-driven architecture",
      "Service mesh implementation",
      "Monitoring & observability",
    ],
    benefits: [
      "Faster time to market",
      "Independent scaling",
      "Technology flexibility",
      "Improved fault isolation",
    ],
    icon: Code,
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  // Design & Product Strategy
  "ui-ux": {
    title: "UI/UX Design",
    category: "Design & Product Strategy",
    description: "User-centered design that creates intuitive, engaging digital experiences.",
    longDescription: "Our UI/UX design process combines research, strategy, and creativity to deliver interfaces that users love. We focus on understanding your users' needs and behaviors to create seamless experiences that drive conversions and satisfaction.",
    features: [
      "User research & personas",
      "Information architecture",
      "Wireframing & prototyping",
      "Visual design & branding",
      "Usability testing",
      "Design system creation",
    ],
    benefits: [
      "Increased user satisfaction",
      "Higher conversion rates",
      "Reduced development costs",
      "Consistent brand experience",
    ],
    icon: Palette,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  "packaging-design": {
    title: "Packaging Design",
    category: "Design & Product Strategy",
    description: "Eye-catching packaging that stands out on shelves and communicates your brand story.",
    longDescription: "We create packaging designs that not only protect your products but also tell your brand story and capture consumer attention. Our designs balance aesthetics with functionality and sustainability considerations.",
    features: [
      "Brand-aligned visual design",
      "Structural packaging design",
      "Sustainable materials consultation",
      "Print-ready artwork",
      "Mockup & prototype creation",
      "Regulatory compliance review",
    ],
    benefits: [
      "Increased shelf visibility",
      "Stronger brand recognition",
      "Enhanced unboxing experience",
      "Eco-friendly options",
    ],
    icon: Palette,
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  "3d-cgi": {
    title: "3D & CGI Visualization",
    category: "Design & Product Strategy",
    description: "Photorealistic 3D renders and animations that bring your products and ideas to life.",
    longDescription: "Our 3D visualization services create stunning photorealistic renders and animations for products, architecture, and marketing. We help you visualize concepts before production and create compelling visual content for marketing.",
    features: [
      "Product 3D modeling",
      "Photorealistic rendering",
      "Animation & motion graphics",
      "Architectural visualization",
      "Virtual product photography",
      "360° interactive views",
    ],
    benefits: [
      "Reduce photography costs",
      "Visualize before production",
      "Unlimited creative possibilities",
      "Consistent visual quality",
    ],
    icon: Palette,
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  "illustration": {
    title: "Custom Illustration",
    category: "Design & Product Strategy",
    description: "Unique illustrations that add personality and visual storytelling to your brand.",
    longDescription: "We create custom illustrations that capture your brand's personality and communicate complex ideas in engaging ways. From editorial illustrations to icon sets and infographics, our artwork makes your content memorable.",
    features: [
      "Brand illustration systems",
      "Editorial & marketing illustrations",
      "Icon design & iconography",
      "Infographic design",
      "Character design",
      "Motion illustration",
    ],
    benefits: [
      "Unique visual identity",
      "Enhanced storytelling",
      "Improved content engagement",
      "Versatile brand assets",
    ],
    icon: Palette,
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  // Mobile App Development
  "react-native": {
    title: "React Native Development",
    category: "Mobile App Development",
    description: "Cross-platform mobile apps with native performance and a single codebase.",
    longDescription: "We build high-performance mobile applications using React Native, delivering native-like experiences for both iOS and Android from a single codebase. This approach reduces development time and costs while maintaining quality.",
    features: [
      "Cross-platform development",
      "Native UI components",
      "Offline functionality",
      "Push notifications",
      "Third-party integrations",
      "App store deployment",
    ],
    benefits: [
      "Single codebase for iOS & Android",
      "Faster development cycles",
      "Cost-effective maintenance",
      "Native performance",
    ],
    icon: Smartphone,
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  "pwa": {
    title: "Progressive Web Applications",
    category: "Mobile App Development",
    description: "Web apps that work like native apps with offline support and push notifications.",
    longDescription: "We develop Progressive Web Applications that combine the best of web and mobile apps. PWAs are fast, reliable, and engaging, working offline and installable on any device without app store distribution.",
    features: [
      "Offline-first architecture",
      "Push notifications",
      "Home screen installation",
      "Background sync",
      "Responsive design",
      "SEO-friendly",
    ],
    benefits: [
      "No app store required",
      "Lower development costs",
      "Instant updates",
      "Broader reach",
    ],
    icon: Smartphone,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  "flutter": {
    title: "Flutter Development",
    category: "Mobile App Development",
    description: "Beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    longDescription: "Our Flutter development services deliver stunning, high-performance apps with smooth animations and native feel. Flutter's widget-based architecture allows for rapid development and beautiful, customizable UIs.",
    features: [
      "Single codebase for all platforms",
      "Custom widget development",
      "Hot reload for fast development",
      "Native performance",
      "Beautiful animations",
      "Platform-specific adaptations",
    ],
    benefits: [
      "Expressive & flexible UI",
      "Faster development",
      "Consistent cross-platform experience",
      "Growing ecosystem",
    ],
    icon: Smartphone,
    gradient: "from-sky-500/20 to-blue-500/20",
  },
  // Digital Marketing
  "seo": {
    title: "Search Engine Optimization",
    category: "Digital Marketing",
    description: "Data-driven SEO strategies that improve your visibility and drive organic traffic.",
    longDescription: "Our SEO services combine technical expertise, content strategy, and link building to improve your search rankings. We focus on sustainable, white-hat techniques that deliver long-term results and protect your brand.",
    features: [
      "Technical SEO audits",
      "Keyword research & strategy",
      "On-page optimization",
      "Content strategy & creation",
      "Link building campaigns",
      "Local SEO optimization",
    ],
    benefits: [
      "Increased organic traffic",
      "Higher search rankings",
      "Better user experience",
      "Long-term ROI",
    ],
    icon: TrendingUp,
    gradient: "from-green-500/20 to-teal-500/20",
  },
  "email-marketing": {
    title: "Email Marketing",
    category: "Digital Marketing",
    description: "Strategic email campaigns that nurture leads and drive conversions.",
    longDescription: "We create and manage email marketing campaigns that engage your audience, nurture leads, and drive sales. From strategy to execution, we handle segmentation, automation, design, and analytics.",
    features: [
      "Campaign strategy & planning",
      "Email template design",
      "List segmentation & management",
      "Marketing automation",
      "A/B testing & optimization",
      "Performance analytics",
    ],
    benefits: [
      "High ROI marketing channel",
      "Personalized customer journeys",
      "Automated lead nurturing",
      "Measurable results",
    ],
    icon: TrendingUp,
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
  "content-marketing": {
    title: "Content Marketing",
    category: "Digital Marketing",
    description: "Strategic content that attracts, engages, and converts your target audience.",
    longDescription: "Our content marketing services help you create valuable, relevant content that attracts and retains your audience. We develop content strategies, create compelling content, and measure its impact on your business goals.",
    features: [
      "Content strategy development",
      "Blog & article writing",
      "Video content production",
      "Infographic design",
      "Content distribution",
      "Performance measurement",
    ],
    benefits: [
      "Increased brand awareness",
      "Thought leadership positioning",
      "Lead generation",
      "SEO improvements",
    ],
    icon: TrendingUp,
    gradient: "from-rose-500/20 to-pink-500/20",
  },
  "performance-marketing": {
    title: "Performance Marketing",
    category: "Digital Marketing",
    description: "ROI-focused paid advertising campaigns across search, social, and display networks.",
    longDescription: "We manage performance marketing campaigns across Google Ads, Meta, LinkedIn, and other platforms. Our data-driven approach focuses on maximizing ROI through continuous testing, optimization, and scaling.",
    features: [
      "PPC campaign management",
      "Social media advertising",
      "Retargeting campaigns",
      "Conversion tracking setup",
      "Landing page optimization",
      "Budget optimization",
    ],
    benefits: [
      "Measurable ROI",
      "Scalable growth",
      "Targeted reach",
      "Quick results",
    ],
    icon: TrendingUp,
    gradient: "from-red-500/20 to-orange-500/20",
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    category: "Digital Marketing",
    description: "Strategic social media management that builds community and drives engagement.",
    longDescription: "We develop and execute social media strategies that grow your audience, build community, and drive business results. From content creation to community management, we handle all aspects of your social presence.",
    features: [
      "Social media strategy",
      "Content creation & curation",
      "Community management",
      "Influencer partnerships",
      "Social listening",
      "Analytics & reporting",
    ],
    benefits: [
      "Increased brand awareness",
      "Community building",
      "Customer engagement",
      "Traffic generation",
    ],
    icon: TrendingUp,
    gradient: "from-purple-500/20 to-violet-500/20",
  },
  // Web Development
  "website-development": {
    title: "Website Development",
    category: "Web Development",
    description: "Fast, responsive, and SEO-optimized websites that convert visitors into customers.",
    longDescription: "We build modern, high-performance websites that represent your brand beautifully and drive business results. Our websites are fast, secure, mobile-friendly, and optimized for search engines.",
    features: [
      "Responsive web design",
      "Performance optimization",
      "SEO-friendly architecture",
      "Content management system",
      "Analytics integration",
      "Security best practices",
    ],
    benefits: [
      "Professional online presence",
      "Higher search rankings",
      "Better user experience",
      "Increased conversions",
    ],
    icon: Globe,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  "custom-web-application": {
    title: "Custom Web Applications",
    category: "Web Development",
    description: "Powerful, scalable web applications tailored to your unique business needs.",
    longDescription: "We develop custom web applications that solve complex business problems and streamline operations. From SaaS platforms to internal tools, we build scalable solutions using modern technologies.",
    features: [
      "Custom functionality development",
      "Scalable architecture",
      "Database design & optimization",
      "API development",
      "User authentication & authorization",
      "Third-party integrations",
    ],
    benefits: [
      "Tailored to your needs",
      "Scalable growth",
      "Competitive advantage",
      "Full ownership",
    ],
    icon: Globe,
    gradient: "from-indigo-500/20 to-blue-500/20",
  },
  "cms-development": {
    title: "CMS Development",
    category: "Web Development",
    description: "Content management solutions that empower your team to manage content effortlessly.",
    longDescription: "We implement and customize content management systems that make it easy for your team to update and manage website content. Whether WordPress, headless CMS, or custom solutions, we deliver the right fit for your needs.",
    features: [
      "CMS selection & implementation",
      "Custom theme development",
      "Plugin/extension development",
      "Content migration",
      "Training & documentation",
      "Ongoing support",
    ],
    benefits: [
      "Easy content updates",
      "Reduced maintenance costs",
      "Faster time to publish",
      "Non-technical friendly",
    ],
    icon: Globe,
    gradient: "from-emerald-500/20 to-green-500/20",
  },
  "api-development": {
    title: "API Development & Integration",
    category: "Web Development",
    description: "Robust APIs that connect your systems and enable seamless data flow.",
    longDescription: "We design and develop APIs that power your applications and connect disparate systems. Our APIs are secure, well-documented, and built for performance and scalability.",
    features: [
      "RESTful API design",
      "GraphQL implementation",
      "Third-party API integration",
      "API documentation",
      "Authentication & security",
      "Rate limiting & caching",
    ],
    benefits: [
      "System interoperability",
      "Data accessibility",
      "Scalable architecture",
      "Developer-friendly",
    ],
    icon: Globe,
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  // Blockchain Development
  "supply-chain-blockchain": {
    title: "Supply Chain Blockchain Solutions",
    category: "Blockchain Development",
    description: "Transparent, traceable supply chain solutions powered by blockchain technology.",
    longDescription: "We develop blockchain-based supply chain solutions that provide end-to-end visibility, traceability, and trust. Our solutions help reduce fraud, improve efficiency, and ensure product authenticity.",
    features: [
      "Product traceability",
      "Smart contract automation",
      "IoT device integration",
      "Real-time tracking",
      "Compliance documentation",
      "Multi-party collaboration",
    ],
    benefits: [
      "Complete transparency",
      "Reduced fraud",
      "Improved efficiency",
      "Consumer trust",
    ],
    icon: Layers,
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  "identity-management": {
    title: "Identity Management Solutions",
    category: "Blockchain Development",
    description: "Decentralized identity solutions that give users control over their data.",
    longDescription: "We build decentralized identity management systems that enable secure, user-controlled identity verification. Our solutions reduce fraud, simplify compliance, and enhance privacy.",
    features: [
      "Self-sovereign identity",
      "Verifiable credentials",
      "KYC/AML automation",
      "Privacy-preserving verification",
      "Multi-platform support",
      "Compliance integration",
    ],
    benefits: [
      "User data control",
      "Reduced identity fraud",
      "Simplified compliance",
      "Enhanced privacy",
    ],
    icon: Layers,
    gradient: "from-slate-500/20 to-gray-500/20",
  },
  "nft-marketplace": {
    title: "NFT Marketplace Development",
    category: "Blockchain Development",
    description: "Custom NFT marketplaces for digital art, collectibles, and tokenized assets.",
    longDescription: "We develop feature-rich NFT marketplaces that enable creators and collectors to mint, buy, sell, and trade digital assets. Our platforms support multiple blockchain networks and include robust auction and payment systems.",
    features: [
      "NFT minting & listing",
      "Auction & fixed-price sales",
      "Wallet integration",
      "Royalty management",
      "Multi-chain support",
      "Creator verification",
    ],
    benefits: [
      "New revenue streams",
      "Global marketplace reach",
      "Creator royalties",
      "Community building",
    ],
    icon: Layers,
    gradient: "from-fuchsia-500/20 to-purple-500/20",
  },
};

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
  if (!serviceSlug || !servicesData[serviceSlug]) {
    return <Navigate to="/services" replace />;
  }

  const service = servicesData[serviceSlug];
  const IconComponent = service.icon;

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
              <span className="text-sm font-medium">{service.category}</span>
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                  About This Service
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.longDescription}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                  What We Deliver
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50"
                    >
                      <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                  Key Benefits
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className={`p-6 rounded-2xl bg-gradient-to-br ${service.gradient} border border-border/50`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                        <span className="text-accent font-bold">{index + 1}</span>
                      </div>
                      <p className="text-foreground font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sticky top-32 space-y-8"
              >
                {/* CTA Card */}
                <div className="p-8 rounded-2xl bg-card border border-border/50">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">
                    Ready to Get Started?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss how we can help you with {service.title.toLowerCase()}.
                  </p>
                  <Link to="/contact">
                    <Button variant="accent" className="w-full">
                      Get a Free Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                {/* Related Link */}
                <div className="p-6 rounded-xl bg-secondary/50 border border-border/50">
                  <p className="text-sm text-muted-foreground mb-2">Explore More</p>
                  <Link 
                    to="/services" 
                    className="text-accent font-medium hover:underline"
                  >
                    View All Services →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default ServiceDetail;