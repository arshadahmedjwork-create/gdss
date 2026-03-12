import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Target, Search, FileText } from "lucide-react";

const steps = [
  { icon: MessageSquare, num: "01", title: "Confidential Consultation", desc: "Initial discussion to understand your investigation needs." },
  { icon: ClipboardList, num: "02", title: "Case Assessment", desc: "Evaluate scope, legal requirements, and investigation approach." },
  { icon: Target, num: "03", title: "Investigation Planning", desc: "Design a tailored investigation strategy and timeline." },
  { icon: Search, num: "04", title: "Evidence Collection", desc: "Discreet field operations and digital intelligence gathering." },
  { icon: FileText, num: "05", title: "Confidential Report", desc: "Comprehensive investigation report with actionable findings." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-card/20 border-y border-border/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Process</span>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">How Investigations Work</h2>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border/50 hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="pt-1">
                  <p className="text-xs text-primary font-mono">{step.num}</p>
                  <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
