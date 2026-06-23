import { motion } from "framer-motion";
import { Search, Users, Globe, Database, Cpu, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: Search,
    title: "Digital Footprint Analysis",
    desc: "Comprehensive analysis of an individual's or entity's digital presence — web mentions, public records, and online activity — to surface inconsistencies and hidden associations.",
  },
  {
    icon: Users,
    title: "Social Media Intelligence",
    desc: "Open-source social media analysis to verify claims, identify lifestyle inconsistencies, and track relevant associations. Used responsibly in corporate and personal cases.",
  },
  {
    icon: Globe,
    title: "Geo-Location Verification",
    desc: "Field visits combined with digital evidence analysis — EXIF metadata, check-in records, and location cross-referencing — to confirm or disprove claimed locations in fraud and verification cases.",
  },
  {
    icon: Database,
    title: "Database-Assisted Verification",
    desc: "Cross-referencing individuals and entities against court records, adverse media, regulatory blacklists, and proprietary datasets for rapid, accurate risk assessment.",
  },
  {
    icon: Cpu,
    title: "AI-Assisted Document Screening",
    desc: "Machine learning tools assist in detecting document forgeries, altered certificates, and metadata anomalies. All AI-flagged findings are reviewed and validated by licensed investigators.",
  },
  {
    icon: Shield,
    title: "Evidence-Based Reporting",
    desc: "All intelligence is compiled into structured, legally responsible reports. Methods are ethical, admissible, and compliant with Indian privacy laws and investigation standards.",
  },
];

const AITechnologySection = () => {
  return (
    <section className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Technology & Intelligence</span>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">AI & Technology Positioning</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            We use responsible, technology-assisted investigation methods to enhance accuracy and speed — always with licensed human investigators reviewing every finding.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group border border-border bg-card p-6 hover:border-primary transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-primary/10 border border-primary/20 shrink-0 group-hover:bg-primary/20 transition-colors">
                  <cap.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-2">{cap.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Responsible Use Notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 border border-primary/20 bg-primary/5 p-5 flex gap-4"
        >
          <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Responsible Use of Technology</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Technology tools are investigative aids — not automated decision makers. All AI-assisted and database findings are reviewed by our licensed investigators before any report is issued. We operate strictly within Indian law and ethical investigation standards.
            </p>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <Link
            to="/knowledge-center"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Learn more about our investigation capabilities →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AITechnologySection;
