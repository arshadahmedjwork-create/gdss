import { Phone, MessageCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const MobileStickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between border-t border-border bg-background px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] lg:hidden">
      <a href="tel:+919999999999" className="flex flex-col items-center justify-center gap-1 text-xs font-semibold text-foreground hover:text-primary transition-colors">
        <Phone className="h-5 w-5" />
        Call Now
      </a>
      <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-1 text-xs font-semibold text-green-600 hover:text-green-700 transition-colors">
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
      <Link to="/inquiry" className="flex flex-col items-center justify-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
        <Shield className="h-5 w-5" />
        Confidential Enquiry
      </Link>
    </div>
  );
};

export default MobileStickyCTA;
