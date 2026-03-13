import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import gdssLogo from "@/assets/gdss-logo.png";

const Footer = () => {
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
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <img src={gdssLogo} alt="GDSS Investigations" className="h-10 brightness-0 invert" />
            <p className="text-sm leading-relaxed text-background/60">
              Professional investigation and corporate intelligence services since 1993. A division of Gautam Diligent Security Solutions & IFM Services Pvt Ltd.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/40">Services</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/services/corporate" className="text-sm text-background/60 hover:text-background transition-colors">Corporate Investigations</Link>
              <Link to="/services/background-verification" className="text-sm text-background/60 hover:text-background transition-colors">Background Verification</Link>
              <Link to="/services/insurance" className="text-sm text-background/60 hover:text-background transition-colors">Insurance Investigation</Link>
              <Link to="/services/private" className="text-sm text-background/60 hover:text-background transition-colors">Private Investigation</Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/40">Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/about" className="text-sm text-background/60 hover:text-background transition-colors">About Us</Link>
              <Link to="/case-studies" className="text-sm text-background/60 hover:text-background transition-colors">Case Studies</Link>
              <Link to="/how-it-works" className="text-sm text-background/60 hover:text-background transition-colors">How It Works</Link>
              <Link to="/insights" className="text-sm text-background/60 hover:text-background transition-colors">Insights</Link>
              <Link to="/inquiry" className="text-sm text-background/60 hover:text-background transition-colors">Confidential Inquiry</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/40">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+919999999999" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <Phone className="h-4 w-4 shrink-0" /> +91 99999 99999
              </a>
              <a href="mailto:info@gdssinvestigations.com" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <Mail className="h-4 w-4 shrink-0" /> info@gdssinvestigations.com
              </a>
              <div className="flex items-start gap-2 text-sm text-background/60">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> New Delhi, India
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} GDSS Investigations. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="text-xs text-background/40 hover:text-background transition-colors">Contact</Link>
            <span className="text-xs text-background/40">Privacy Policy</span>
            <span className="text-xs text-background/40">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
