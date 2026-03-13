import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const useCases = [
  "Employee Fraud Detection",
  "Vendor Verification",
  "Corporate Due Diligence",
  "Internal Misconduct Investigations",
];

const CorporateClientSection = () => {
  return (
    <section className="py-24 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">For Corporates</span>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">
              Protect Your Organization with Professional Investigations
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Safeguard your business from internal threats, fraudulent vendors, and compliance risks. Our corporate investigation team serves HR departments, procurement teams, and compliance officers.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Book Corporate Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="space-y-4">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 border-l-2 border-primary bg-subtle p-5 transition-colors"
              >
                <span className="text-xs font-mono text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium text-foreground">{uc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateClientSection;
