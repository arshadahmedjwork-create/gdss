import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />

      <div className="container relative mx-auto px-6 pt-32 pb-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-6">
              Since 1993 · 30+ Years of Excellence
            </p>

            <h1 className="text-4xl font-heading font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Corporate Investigation
              <br />
              <span className="text-primary">&amp; Intelligence Services</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Professional investigations backed by over 30 years of experience.
              Protecting organizations and individuals with discreet, legally compliant
              intelligence operations across India.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/inquiry"
                className="group flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                Start Investigation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="border border-foreground/20 px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
              >
                Book Confidential Consultation
              </Link>
            </div>
          </motion.div>

          {/* Right side — large typographic credibility block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-end text-right"
          >
            <div className="border-r-4 border-primary pr-8">
              <p className="font-heading text-8xl font-bold text-foreground leading-none">30+</p>
              <p className="font-heading text-2xl font-semibold text-foreground mt-2">YEARS</p>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mt-1">
                of Investigation Experience
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-10 gap-y-4 text-right">
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">500+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Cases Annually</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-bold text-foreground">Pan-India</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Coverage</p>
              </div>
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
