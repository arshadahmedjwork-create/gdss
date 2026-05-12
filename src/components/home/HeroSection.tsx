import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroCorporate from "@/assets/image copy 23.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
      {/* Layer 1: Subtle intelligence network grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `
          linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* Layer 1b: Subtle data node dots */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        backgroundPosition: "30px 30px",
      }} />

      {/* Layer 1c: Faint diagonal analysis lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diag" width="120" height="120" patternUnits="userSpaceOnUse">
            <line x1="0" y1="120" x2="120" y2="0" stroke="hsl(var(--foreground))" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>

      {/* Layer 3: Left-to-right gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60 lg:to-transparent" />

      <div className="container relative mx-auto px-6 pt-32 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-6">
              Since 1993 · 30+ Years of Excellence
            </p>

            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.18,
                    delayChildren: 0.2
                  }
                }
              }}
              className="text-4xl font-heading font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              <span className="block overflow-hidden">
                <motion.span 
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { 
                      y: 0, 
                      opacity: 1,
                      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
                    }
                  }}
                  className="block"
                >
                  Corporate Investigation
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span 
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { 
                      y: 0, 
                      opacity: 1,
                      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
                    }
                  }}
                  className="block text-primary"
                >
                  & Intelligence Services
                </motion.span>
              </span>
            </motion.h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Professional investigations backed by over 30 years of experience.
              Protecting organizations and individuals with discreet, legally compliant
              intelligence operations across India.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/inquiry"
                className="navbar-cta-btn px-7 py-3.5 text-sm font-semibold flex items-center gap-2 group"
              >
                Start Investigation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="navbar-cta-btn px-7 py-3.5 text-sm font-medium"
              >
                Book Confidential Consultation
              </Link>
            </div>
          </motion.div>

          {/* Right: Editorial image with layered treatment */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={heroCorporate}
                  alt="Corporate investigation analysts reviewing intelligence reports"
                  className="w-full h-[520px] object-cover"
                  style={{ filter: "saturate(0.75) contrast(1.05)" }}
                />
                {/* Warm overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
              </div>

              {/* Red accent border offset */}
              <div className="absolute -bottom-3 -left-3 w-full h-full border border-primary/30 rounded-sm -z-10" />

              {/* Floating 30+ badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="absolute -bottom-6 -right-3 bg-background border border-border px-7 py-5 shadow-lg rounded-sm"
              >
                <p className="font-heading text-4xl font-bold text-primary leading-none">30+</p>
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1.5">Years Experience</p>
              </motion.div>

              {/* Top-left subtle data accent */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-3 -left-3 bg-background border border-border px-4 py-2.5 shadow-md rounded-sm"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Pan-India Network</p>
                <p className="font-heading text-lg font-bold text-foreground leading-tight">500+ Cases</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};

export default HeroSection;
