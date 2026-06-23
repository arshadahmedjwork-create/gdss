import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";
import gdssLogo from "@/assets/gdss-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
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
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">          {/* Column 1 — Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#cc0000]">{t.quickLinks}</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/" className="text-sm text-background/60 hover:text-background transition-colors">Home</Link>
              <Link to="/services" className="text-sm text-background/60 hover:text-background transition-colors">Services</Link>
              <Link to="/industries" className="text-sm text-background/60 hover:text-background transition-colors">Industries</Link>
              <Link to="/case-studies" className="text-sm text-background/60 hover:text-background transition-colors">Case Studies</Link>
              <Link to="/how-it-works" className="text-sm text-background/60 hover:text-background transition-colors">How It Works</Link>
              <Link to="/knowledge-center" className="text-sm text-background/60 hover:text-background transition-colors">Knowledge Center</Link>
              <Link to="/about" className="text-sm text-background/60 hover:text-background transition-colors">About Us</Link>
              <Link to="/contact" className="text-sm text-background/60 hover:text-background transition-colors">Contact</Link>
              <Link to="/sitemap" className="text-sm text-background/60 hover:text-background transition-colors">Sitemap</Link>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Services</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/services/corporate-bgv" className="text-sm text-background/60 hover:text-background transition-colors">Corporate Investigations</Link>
              <Link to="/services/insurance-fraud" className="text-sm text-background/60 hover:text-background transition-colors">Insurance Fraud</Link>
              <Link to="/services/due-diligence" className="text-sm text-background/60 hover:text-background transition-colors">Due Diligence</Link>
              <Link to="/services/matrimonial" className="text-sm text-background/60 hover:text-background transition-colors">Matrimonial Verification</Link>
              <Link to="/services/nri-verification" className="text-sm text-background/60 hover:text-background transition-colors">NRI Verification</Link>
            </div>
          </div>

          {/* Column 3 — Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#cc0000]">{t.contactUs}</h4>
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

          {/* Column 4 — Certifications & Security */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{t.trustCompliance}</h4>
            <div className="space-y-4">
              <div className="border border-background/10 p-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Experience</p>
                <p className="text-lg font-bold text-white mt-1">30+ Years</p>
                <p className="text-[10px] text-white/90 mt-1 leading-relaxed">
                  Professional investigation and corporate intelligence services since 1993.
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-[11px] text-background/60">
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> SSL Secured Platform</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> NDA Available</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Encrypted Communication</span>
              </div>
              <a href="/gdss-corporate-profile.pdf" download className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-foreground hover:bg-primary border border-primary px-4 py-2 mt-2 transition-colors">
                {t.downloadProfile}
              </a>
            </div>
          </div>
        </div>

        {/* Site-wide Compliance Statement */}
        <div className="mt-12 text-center border-t border-background/10 pt-8">
          <p className="text-xs text-background/50 uppercase tracking-widest font-semibold">
            We operate strictly within applicable Indian laws and ethical investigation standards.
          </p>
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

          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
            <Link to="/legal/privacy-policy" className="text-[10px] text-background/40 hover:text-background transition-colors cursor-pointer">Privacy Policy</Link>
            <span className="text-[10px] text-background/40">|</span>
            <Link to="/legal/terms-of-service" className="text-[10px] text-background/40 hover:text-background transition-colors cursor-pointer">Terms of Service</Link>
            <span className="text-[10px] text-background/40">|</span>
            <Link to="/legal/confidentiality-policy" className="text-[10px] text-background/40 hover:text-background transition-colors cursor-pointer">Confidentiality Policy</Link>
            <span className="text-[10px] text-background/40">|</span>
            <Link to="/legal/data-protection-policy" className="text-[10px] text-background/40 hover:text-background transition-colors cursor-pointer">Data Protection</Link>
            <span className="text-[10px] text-background/40">|</span>
            <Link to="/legal/ethical-investigation-practices" className="text-[10px] text-background/40 hover:text-background transition-colors cursor-pointer">Ethics</Link>
            <span className="text-[10px] text-background/40">|</span>
            <Link to="/legal/disclaimer" className="text-[10px] text-background/40 hover:text-background transition-colors cursor-pointer">Disclaimer</Link>
            <span className="text-[10px] text-background/40">|</span>
            <Link to="/admin" className="text-[10px] text-background/40 hover:text-background transition-colors">Admin Portal</Link>
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
