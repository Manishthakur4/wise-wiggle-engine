import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const serviceCategories = [
  {
    title: "Software Development",
    items: [
      { name: "Custom CRM Development", href: "/services/custom-crm-development" },
      { name: "ERP Software Development", href: "/services/erp-software-development" },
      { name: "AR/VR Development", href: "/services/ar-vr-development" },
      { name: "Microservices", href: "/services/microservices" },
    ],
  },
  {
    title: "Design & Product Strategy",
    items: [
      { name: "UI/UX", href: "/services/ui-ux" },
      { name: "Packaging Design", href: "/services/packaging-design" },
      { name: "3D & CGI", href: "/services/3d-cgi" },
      { name: "Illustration", href: "/services/illustration" },
    ],
  },
  {
    title: "Mobile App Development",
    items: [
      { name: "React Native Application", href: "/services/react-native" },
      { name: "Progressive Web Application", href: "/services/pwa" },
      { name: "Flutter Application", href: "/services/flutter" },
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      { name: "Search Engine Optimization", href: "/services/seo" },
      { name: "Email Marketing", href: "/services/email-marketing" },
      { name: "Content Marketing", href: "/services/content-marketing" },
      { name: "Performance Marketing", href: "/services/performance-marketing" },
      { name: "Social Media Marketing", href: "/services/social-media-marketing" },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "Website Development", href: "/services/website-development" },
      { name: "Custom Web Application", href: "/services/custom-web-application" },
      { name: "CMS Development", href: "/services/cms-development" },
      { name: "API Development & Integration", href: "/services/api-development" },
    ],
  },
  {
    title: "Blockchain Development",
    items: [
      { name: "Supply Chain Solutions", href: "/services/supply-chain-blockchain" },
      { name: "Identity Management Solutions", href: "/services/identity-management" },
      { name: "NFT Marketplace", href: "/services/nft-marketplace" },
    ],
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [mobileWhatWeDoOpen, setMobileWhatWeDoOpen] = useState(false);
  const location = useLocation();

  // Pages with dark hero sections that need light navbar text
  const darkHeroPages = ["/", "/about", "/services", "/portfolio", "/contact"];
  const hasDarkHero = darkHeroPages.includes(location.pathname) || location.pathname.startsWith("/services/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsWhatWeDoOpen(false);
    };
    if (isWhatWeDoOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isWhatWeDoOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileWhatWeDoOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  // Show light text on dark hero pages when not scrolled
  const showLightText = hasDarkHero && !isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className={`font-serif text-2xl font-bold transition-colors duration-300 ${
            showLightText ? "text-primary-foreground" : "text-primary"
          }`}>
            Wise<span className="text-accent">Wigle</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* What We Do Dropdown */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsWhatWeDoOpen(!isWhatWeDoOpen);
              }}
              className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                showLightText 
                  ? "text-primary-foreground/70 hover:text-accent" 
                  : "text-foreground/70 hover:text-accent"
              }`}
            >
              What We Do
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isWhatWeDoOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isWhatWeDoOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[800px] p-6 rounded-2xl bg-card border border-border shadow-xl z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="grid grid-cols-3 gap-6">
                    {serviceCategories.map((category) => (
                      <div key={category.title}>
                        <h4 className="text-sm font-semibold text-foreground mb-3 pb-2 border-b border-border/50">
                          {category.title}
                        </h4>
                        <ul className="space-y-2">
                          {category.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.href}
                                className="text-sm text-muted-foreground hover:text-accent transition-colors block py-1"
                                onClick={() => setIsWhatWeDoOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/50 flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                      Explore all our services and solutions
                    </p>
                    <Link
                      to="/services"
                      className="text-sm font-medium text-accent hover:underline"
                      onClick={() => setIsWhatWeDoOpen(false)}
                    >
                      View All Services →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                showLightText 
                  ? "text-primary-foreground/70 hover:text-accent" 
                  : "text-foreground/70 hover:text-accent"
              } ${location.pathname === link.href ? "text-accent" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/contact">
            <Button variant="accent" size="sm">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 transition-colors ${showLightText ? "text-primary-foreground" : "text-foreground"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <nav className="flex flex-col p-4 gap-2">
              {/* What We Do Mobile Accordion */}
              <button
                onClick={() => setMobileWhatWeDoOpen(!mobileWhatWeDoOpen)}
                className="flex items-center justify-between px-4 py-3 rounded-lg text-foreground/70 hover:text-accent hover:bg-accent/5 transition-all"
              >
                <span>What We Do</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileWhatWeDoOpen ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {mobileWhatWeDoOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 space-y-4"
                  >
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="space-y-1">
                        <h4 className="text-xs font-semibold text-accent uppercase tracking-wider px-4 py-2">
                          {category.title}
                        </h4>
                        {category.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 rounded-lg transition-all ${
                    location.pathname === link.href 
                      ? "text-accent bg-accent/10" 
                      : "text-foreground/70 hover:text-accent hover:bg-accent/5"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="accent" className="w-full justify-center">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;