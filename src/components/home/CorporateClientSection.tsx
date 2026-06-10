import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";

const enterpriseFeatures = [
  "Bulk Employee Background Verification Workflows",
  "Dedicated Enterprise Onboarding & Account Manager",
  "Strict TAT Timelines with SLA Support",
  "Secure API Integration Capabilities",
  "Flexible Monthly Verification Contracts",
  "Compliance & Ethics Auditing"
];

const CorporateClientSection = () => {
  return (
    <section className="py-24 bg-subtle/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
              <ShieldAlert className="h-4 w-4" />
              For HR Teams & Enterprises
            </div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl text-foreground">
              Enterprise-Grade Background Verification Funnel
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Safeguard your organization with our bulk verification and corporate intelligence workflows. We partner with HR departments, procurement teams, and compliance officers to deliver fast, secure, and legally compliant reports.
            </p>
            <div className="mt-8">
              <Link
                to="/services/corporate-bgv"
                className="inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                Access Corporate Funnel
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {enterpriseFeatures.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-background border border-border p-5 shadow-sm hover:border-primary/50 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-bold text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateClientSection;
