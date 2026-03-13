import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/60 mb-4">
            30+ Years of Investigation Experience
          </p>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl text-background">
            Start Your Investigation Today
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-background/60">
            All inquiries are handled with strict confidentiality. Our investigation team
            is ready to discuss your requirements.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/inquiry"
              className="group flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Submit Confidential Inquiry
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 border border-background/20 px-7 py-3.5 text-sm font-medium text-background transition-all hover:border-background/40"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
