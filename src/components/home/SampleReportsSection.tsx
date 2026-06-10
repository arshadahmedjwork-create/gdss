import { motion } from "framer-motion";
import { FileText, Download, ShieldCheck } from "lucide-react";

const reports = [
  { title: "Sample Background Verification Report", type: "Corporate BGV", file: "/sample-bgv.pdf" },
  { title: "Sample Insurance Claim Report", type: "Insurance Fraud", file: "/sample-insurance.pdf" },
  { title: "Sample Matrimonial Verification", type: "Matrimonial", file: "/sample-matrimonial.pdf" },
];

const SampleReportsSection = () => {
  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Transparency</span>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">Sample Intelligence Reports</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed mb-6">
              Review our meticulous, legally compliant reporting format. All personal identifiable information (PII) has been redacted to ensure strict confidentiality.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider bg-subtle px-4 py-2 border border-border">
              <ShieldCheck className="h-4 w-4 text-primary" /> Data Redacted for Privacy
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, i) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border p-6 flex flex-col hover:border-primary/50 transition-colors shadow-sm"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">{report.type}</div>
                <h3 className="font-heading text-sm font-bold text-foreground mb-6 flex-1">{report.title}</h3>
                <a
                  href={report.file}
                  download
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider mt-auto"
                >
                  <Download className="h-4 w-4" /> Download PDF
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleReportsSection;
