import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Confidential Consultation", desc: "Initial discussion to understand your investigation needs." },
  { num: "02", title: "Case Assessment", desc: "Evaluate scope, legal requirements, and investigation approach." },
  { num: "03", title: "Investigation Planning", desc: "Design a tailored investigation strategy and timeline." },
  { num: "04", title: "Evidence Collection", desc: "Discreet field operations and digital intelligence gathering." },
  { num: "05", title: "Confidential Report", desc: "Comprehensive investigation report with actionable findings." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-subtle border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Process</span>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">How Investigations Work</h2>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-8 items-stretch"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary text-primary-foreground font-heading font-bold text-sm">
                  {step.num}
                </div>
                {i < steps.length - 1 && <div className="flex-1 w-px bg-border" />}
              </div>
              <div className="pb-10 pt-2">
                <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
