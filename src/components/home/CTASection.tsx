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
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary-foreground/60 mb-4">
            Encrypted & Secure Channel
          </p>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl text-background">
            Initiate Secure Investigation Protocol
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-background/60">
            All intelligence operations are strictly guarded under enterprise NDA. Connect with our senior investigators to formulate your case strategy.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/inquiry"
              className="group flex items-center gap-2 bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Start Secure Investigation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 border border-background/20 px-8 py-4 text-sm font-semibold text-background transition-all hover:border-background/40 hover:bg-background/5"
            >
              <Phone className="h-4 w-4" />
              Speak With Intelligence Officer
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
