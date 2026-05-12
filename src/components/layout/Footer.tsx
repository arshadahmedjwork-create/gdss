import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";
import gdssLogo from "@/assets/gdss-logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, color: "#1877F2", label: "Facebook" },
    { icon: Instagram, color: "#E1306C", label: "Instagram" },
    { icon: Linkedin, color: "#0A66C2", label: "LinkedIn" },
    { icon: Twitter, color: "#000000", label: "Twitter/X" },
    { icon: MessageCircle, color: "#25D366", label: "WhatsApp" },
  ];

  return (
    <footer className="border-t border-border bg-foreground text-background">
      {/* Credibility bar */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-6 py-6 text-center">
          <p className="font-heading text-lg font-bold text-background">
            30+ Years of Investigation Experience · Since 1993
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#cc0000]">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/" className="text-sm text-background/60 hover:text-background transition-colors">Home</Link>
              <Link to="/services" className="text-sm text-background/60 hover:text-background transition-colors">Services</Link>
              <Link to="/industries" className="text-sm text-background/60 hover:text-background transition-colors">Industries</Link>
              <Link to="/case-studies" className="text-sm text-background/60 hover:text-background transition-colors">Case Studies</Link>
              <Link to="/how-it-works" className="text-sm text-background/60 hover:text-background transition-colors">How It Works</Link>
              <Link to="/insights" className="text-sm text-background/60 hover:text-background transition-colors">Insights</Link>
              <Link to="/about" className="text-sm text-background/60 hover:text-background transition-colors">About Us</Link>
              <Link to="/contact" className="text-sm text-background/60 hover:text-background transition-colors">Contact</Link>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#cc0000]">Services</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/services/corporate" className="text-sm text-background/60 hover:text-background transition-colors">Corporate Investigations</Link>
              <Link to="/services/background-verification" className="text-sm text-background/60 hover:text-background transition-colors">Background Verification</Link>
              <Link to="/services/insurance" className="text-sm text-background/60 hover:text-background transition-colors">Insurance Investigation</Link>
              <Link to="/services/private" className="text-sm text-background/60 hover:text-background transition-colors">Private Investigation</Link>
            </div>
          </div>

          {/* Column 3 — Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#cc0000]">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+919999999999" className="flex items-center gap-3 text-sm text-background/60 hover:text-background transition-colors">
                <Phone className="h-4 w-4 shrink-0" /> +91 99999 99999
              </a>
              <a href="mailto:info@gdssinvestigations.com" className="flex items-center gap-3 text-sm text-background/60 hover:text-background transition-colors">
                <Mail className="h-4 w-4 shrink-0" /> info@gdssinvestigations.com
              </a>
              <div className="flex items-start gap-3 text-sm text-background/60">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> New Delhi, India
              </div>
            </div>
          </div>

          {/* Column 4 — Certifications */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#cc0000]">Certifications</h4>
            <div className="space-y-4">
              <div className="border border-background/10 p-4">
                <p className="text-xs font-bold text-background uppercase tracking-wider">Experience</p>
                <p className="text-lg font-bold text-[#cc0000] mt-1">30+ Years</p>
                <p className="text-[10px] text-background/40 mt-1 leading-relaxed">
                  Professional investigation and corporate intelligence services since 1993.
                </p>
              </div>
              <p className="text-[10px] leading-relaxed text-background/40">
                A division of Gautam Diligent Security Solutions & IFM Services Pvt Ltd.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={gdssLogo} alt="GDSS Investigations" className="h-8 brightness-1" />
            <p className="text-[10px] text-background/40">
              © {new Date().getFullYear()} GDSS Investigations. All rights reserved.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#"
                className={`group p-2 transition-colors duration-300 social-icon-${social.label.toLowerCase().split('/')[0]}`}
                aria-label={social.label}
              >
                <social.icon 
                  size={20} 
                  className="text-background/60 transition-colors duration-250 ease-in-out"
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[10px] text-background/40 hover:text-background transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-[10px] text-background/40">|</span>
            <Link to="/admin" className="text-[10px] text-background/40 hover:text-background transition-colors">Admin</Link>
            <span className="text-[10px] text-background/40 hover:text-background transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
      
      {/* Inline style for social icons hover effect */}
      <style>{`
        .social-icon-facebook:hover svg { color: #1877F2 !important; }
        .social-icon-instagram:hover svg { color: #E1306C !important; }
        .social-icon-linkedin:hover svg { color: #0A66C2 !important; }
        .social-icon-twitter:hover svg { color: #000000 !important; }
        .social-icon-whatsapp:hover svg { color: #25D366 !important; }
      `}</style>
    </footer>
  );
};

export default Footer;
