import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cases = [
  {
    tag: "Corporate",
    title: "Multi-Million Rupee Employee Fraud Detection",
    problem: "A leading manufacturing company suspected systematic financial fraud by a senior procurement executive.",
    method: "Forensic analysis of procurement records, vendor due diligence, and discreet surveillance over 6 weeks.",
    outcome: "Uncovered ₹2.3 Cr in fraudulent vendor payments. Evidence led to successful criminal prosecution.",
  },
  {
    tag: "Insurance",
    title: "Health Insurance Claim Fraud Ring",
    problem: "An insurance provider identified suspicious patterns across multiple health insurance claims.",
    method: "Coordinated investigation across hospitals, verification of medical records, and covert field operations.",
    outcome: "Exposed a network involving 3 hospitals and 47 fraudulent claims worth ₹85 lakhs.",
  },
  {
    tag: "Background",
    title: "Executive Background Verification",
    problem: "A multinational firm needed thorough due diligence on a C-suite hire with overseas credentials.",
    method: "International credential verification, employment history validation, and reference checks across 4 countries.",
    outcome: "Identified falsified MBA credentials and undisclosed litigation history.",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Results</span>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">Case Studies</h2>
          </div>
          <Link to="/case-studies" className="hidden text-sm font-medium text-primary hover:underline sm:block">
            View all cases →
          </Link>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border p-8"
            >
              <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.15em] text-primary">
                {c.tag}
              </span>
              <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">{c.title}</h3>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground">{c.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Method</p>
                  <p className="text-sm text-muted-foreground">{c.method}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Outcome</p>
                  <p className="text-sm text-muted-foreground">{c.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
