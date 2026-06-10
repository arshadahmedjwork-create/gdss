import { useState, useEffect } from "react";
import { X, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when cursor leaves the top of the window
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-lg bg-background p-8 shadow-2xl border border-primary/20"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-foreground">Need confidential verification assistance?</h3>
              <p className="mb-8 text-muted-foreground">
                Don't leave your corporate security or personal matters to chance. Speak confidentially with one of our senior investigators right now.
              </p>
              
              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <Link
                  to="/inquiry"
                  onClick={() => setIsVisible(false)}
                  className="flex-1 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Request Discreet Verification
                </Link>
                <a
                  href="tel:+919999999999"
                  className="flex-1 border border-primary text-primary px-6 py-3 text-sm font-semibold hover:bg-primary/5 transition-colors"
                >
                  Call +91 99999 99999
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
