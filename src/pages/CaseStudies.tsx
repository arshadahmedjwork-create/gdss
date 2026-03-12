import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cases = [
  {
    tag: "Corporate",
    title: "Multi-Million Rupee Employee Fraud Detection",
    problem: "A leading manufacturing company suspected systematic financial fraud by a senior procurement executive over a period of 3 years.",
    method: "Forensic analysis of procurement records, vendor due diligence, covert surveillance, and financial trail investigation over 6 weeks.",
    outcome: "Uncovered ₹2.3 Cr in fraudulent vendor payments. Evidence led to successful criminal prosecution and asset recovery.",
  },
  {
    tag: "Insurance",
    title: "Health Insurance Claim Fraud Ring",
    problem: "An insurance provider identified suspicious patterns across multiple health insurance claims in a metropolitan area.",
    method: "Coordinated investigation across hospitals, verification of medical records, covert field operations, and digital intelligence analysis.",
    outcome: "Exposed a fraud network involving 3 hospitals and 47 fraudulent claims worth ₹85 lakhs. Resulted in policy cancellations and FIRs.",
  },
  {
    tag: "Background Verification",
    title: "Executive Background Verification Saves Multinational",
    problem: "A multinational firm needed thorough due diligence on a C-suite hire with overseas credentials and a complex career history.",
    method: "International credential verification, employment history validation, criminal record checks, and discreet reference checks across 4 countries.",
    outcome: "Identified falsified MBA credentials and undisclosed litigation history, preventing a high-risk appointment worth ₹1.5 Cr annual package.",
  },
  {
    tag: "Private",
    title: "Prematrimonial Investigation Reveals Critical Information",
    problem: "A family sought discreet verification of a prospective match's background before finalizing a marriage alliance.",
    method: "Comprehensive background check including employment verification, family background, financial standing, and social reputation assessment.",
    outcome: "Uncovered undisclosed previous marriage and significant debt obligations, enabling the family to make an informed decision.",
  },
];

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Results</span>
            <h1 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">Case Studies</h1>
            <p className="mt-4 text-muted-foreground">Real investigation outcomes demonstrating our expertise and methodology.</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {cases.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-md border border-border/50 bg-card/40 p-8"
              >
                <span className="mb-3 inline-flex rounded-sm bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{c.tag}</span>
                <h3 className="font-heading text-xl font-semibold leading-snug">{c.title}</h3>
                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase text-primary/70 mb-1">Problem</p>
                    <p className="text-sm text-muted-foreground">{c.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-primary/70 mb-1">Investigation Method</p>
                    <p className="text-sm text-muted-foreground">{c.method}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-primary/70 mb-1">Outcome</p>
                    <p className="text-sm text-muted-foreground">{c.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
