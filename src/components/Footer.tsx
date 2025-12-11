import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      "Software Development",
      "Mobile Apps",
      "Web Development",
      "Digital Marketing",
      "Blockchain",
    ],
    Company: [
      "About Us",
      "Careers",
      "Blog",
      "Case Studies",
      "Contact",
    ],
    Resources: [
      "Documentation",
      "Support",
      "Privacy Policy",
      "Terms of Service",
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold">
                Wise<span className="text-accent">Wigle</span>
              </span>
            </a>
            <p className="text-primary-foreground/60 text-sm mb-6 max-w-xs">
              Building intelligent digital solutions that help businesses scale and thrive.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/60 hover:text-accent transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} WiseWigle. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Designed with intelligence. Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
