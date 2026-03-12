import { motion } from "framer-motion";
import { MessageSquare, ClipboardList, Target, Search, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const steps = [
  { icon: MessageSquare, num: "01", title: "Confidential Consultation", desc: "We begin with a secure, confidential discussion to understand your investigation needs, objectives, and constraints. All information shared is protected under strict non-disclosure protocols." },
  { icon: ClipboardList, num: "02", title: "Case Assessment", desc: "Our senior investigators evaluate the scope of the case, assess legal requirements, determine resource needs, and provide a detailed case assessment report with recommended approaches." },
  { icon: Target, num: "03", title: "Investigation Planning", desc: "A tailored investigation strategy is designed, including timelines, methodologies, resource allocation, and risk mitigation measures. The plan is reviewed and approved before execution." },
  { icon: Search, num: "04", title: "Evidence Collection", desc: "Our field investigators and intelligence analysts execute the investigation plan. This includes surveillance, digital forensics, document verification, witness interviews, and cross-referencing records." },
  { icon: FileText, num: "05", title: "Confidential Investigation Report", desc: "A comprehensive, legally admissible report is prepared with evidence documentation, analysis, findings, and actionable recommendations. The report is delivered through secure channels." },
];

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Process</span>
            <h1 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">How Investigations Work</h1>
            <p className="mt-4 text-muted-foreground">Our structured investigation methodology ensures thorough, legally compliant results.</p>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-card">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  {i < steps.length - 1 && <div className="flex-1 w-px bg-border/50 mt-2" />}
                </div>
                <div className="pb-8">
                  <p className="text-xs text-primary font-mono mb-1">Step {step.num}</p>
                  <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/inquiry" className="group inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">
              Start Your Investigation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
