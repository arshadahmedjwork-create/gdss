import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, UserX, ClipboardCheck, Building, ArrowRight } from "lucide-react";

const useCases = [
  { icon: UserX, label: "Employee Fraud Detection" },
  { icon: ClipboardCheck, label: "Vendor Verification" },
  { icon: Building, label: "Corporate Due Diligence" },
  { icon: ShieldCheck, label: "Internal Misconduct Investigations" },
];

const CorporateClientSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">For Corporates</span>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              Protect Your Organization with Professional Investigations
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Safeguard your business from internal threats, fraudulent vendors, and compliance risks. Our corporate investigation team serves HR departments, procurement teams, and compliance officers.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Book Corporate Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 rounded-md border border-border/50 bg-card/40 p-5 transition-colors hover:border-primary/20"
              >
                <uc.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">{uc.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateClientSection;
