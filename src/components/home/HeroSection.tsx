import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, MapPin, Clock, CheckCircle } from "lucide-react";
import heroCorporate from "@/assets/image copy 23.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-background pt-24 pb-12">
      {/* Background intelligence-agency aesthetic */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/50 z-[1]" />

      <div className="container relative mx-auto px-6 z-10 flex-1 flex flex-col justify-center">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-8">
              <ShieldCheck className="h-4 w-4" />
              Corporate Security & Intelligence
            </div>

            <h1 className="text-4xl font-heading font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
              Confidential Investigation & <span className="text-primary">Verification Services</span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground mb-10">
              Professional investigations backed by over 30 years of experience.
              Protecting organizations and individuals with discreet, evidence-based intelligence operations across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/inquiry"
                className="inline-flex justify-center items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold hover:bg-primary/90 transition-colors shadow-lg"
              >
                Request Discreet Verification
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+919999999999"
                className="inline-flex justify-center items-center gap-2 border border-primary text-primary px-8 py-4 text-sm font-semibold hover:bg-primary/5 transition-colors"
              >
                Speak Confidentially With an Investigator
              </a>
            </div>

            {/* Compliance Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                <CheckCircle className="h-4 w-4 text-primary" /> Corporate NDA Supported
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                <CheckCircle className="h-4 w-4 text-primary" /> GST Registered
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                <CheckCircle className="h-4 w-4 text-primary" /> MSME Certified
              </div>
            </div>
          </motion.div>

          {/* Right: Editorial image with Trust Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative overflow-hidden rounded-sm border border-border shadow-2xl bg-card">
              <img
                src={heroCorporate}
                alt="Corporate intelligence operations"
                className="w-full h-[480px] object-cover mix-blend-luminosity opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              {/* Floating Stat Cards inside image container */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                <div className="bg-background/95 backdrop-blur-md border border-border p-4 shadow-lg">
                  <div className="text-2xl font-bold text-primary mb-1">10,000+</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Verifications Completed</div>
                </div>
                <div className="bg-background/95 backdrop-blur-md border border-border p-4 shadow-lg">
                  <div className="text-2xl font-bold text-primary mb-1">30+ Years</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Industry Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="relative z-10 container mx-auto px-6 mt-16 lg:mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-border divide-x divide-border">
          <div className="py-6 px-4 flex flex-col items-center text-center justify-center gap-2 bg-subtle/50">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-foreground">PAN India Operations</span>
          </div>
          <div className="py-6 px-4 flex flex-col items-center text-center justify-center gap-2 bg-subtle/50">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-foreground">24-Hour Response</span>
          </div>
          <div className="py-6 px-4 flex flex-col items-center text-center justify-center gap-2 bg-subtle/50">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-foreground">Evidence-Based</span>
          </div>
          <div className="py-6 px-4 flex flex-col items-center text-center justify-center gap-2 bg-subtle/50">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-foreground">Legally Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
