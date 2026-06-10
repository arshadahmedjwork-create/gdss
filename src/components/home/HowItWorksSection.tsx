import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Confidential Consultation", desc: "Initial secure discussion to understand your unique investigation needs." },
  { num: "02", title: "Requirement Analysis", desc: "Deep dive into the subject matter, legal boundaries, and objectives." },
  { num: "03", title: "Confidential Agreement", desc: "Signing of Non-Disclosure Agreements (NDA) to ensure absolute secrecy." },
  { num: "04", title: "Investigation Planning", desc: "Formulation of a strategic intelligence gathering blueprint." },
  { num: "05", title: "Field Investigation", desc: "Deployment of specialized operatives for discreet on-ground intelligence." },
  { num: "06", title: "Evidence Collection", desc: "Gathering of irrefutable, legally admissible evidence and digital artifacts." },
  { num: "07", title: "Report Preparation", desc: "Drafting of a comprehensive, executive-grade intelligence report." },
  { num: "08", title: "Client Consultation", desc: "Final secure debriefing and handover of the investigation dossier." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-card border-y border-border relative overflow-hidden">
      {/* Background intelligence aesthetic */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: "40px 100%",
      }} />

      <div className="container relative mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Intelligence Protocol</span>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">How Our Investigation Process Works</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A systematic, legally compliant, and highly confidential eight-step protocol ensures irrefutable results and maximum security for our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border p-6 shadow-sm hover:border-primary/50 transition-all relative"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 font-heading text-6xl font-bold text-primary">
                {step.num}
              </div>
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary font-bold mb-6">
                {step.num}
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2 relative z-10">{step.title}</h3>
              <p className="text-sm text-muted-foreground relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
