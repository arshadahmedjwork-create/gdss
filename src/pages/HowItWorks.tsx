import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const steps = [
  { num: "01", title: "Confidential Consultation", desc: "We begin with a secure, confidential discussion to understand your investigation needs, objectives, and constraints." },
  { num: "02", title: "Requirement Analysis", desc: "Our senior investigators evaluate the subject matter, legal boundaries, objectives, geography, urgency, and evidence requirements." },
  { num: "03", title: "Confidential Agreement", desc: "A confidentiality agreement or NDA is confirmed so case details, identities, and supporting documents remain protected." },
  { num: "04", title: "Investigation Planning", desc: "A tailored intelligence-gathering plan is prepared with timelines, methodology, field resources, and risk controls." },
  { num: "05", title: "Field Investigation", desc: "Specialized field investigators conduct discreet on-ground verification, local enquiries, document checks, and source validation." },
  { num: "06", title: "Evidence Collection", desc: "Relevant observations, records, photographs, statements, and verification notes are collected and organized for review." },
  { num: "07", title: "Report Preparation", desc: "A confidential report is prepared with verified findings, evidence references, risk flags, limitations, and recommended next steps." },
  { num: "08", title: "Client Consultation", desc: "The final secure debrief explains the findings, answers questions, and supports the client's next decision." },
];

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Process</span>
            <h1 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">How Investigations Work</h1>
            <p className="mt-4 text-muted-foreground">Our structured 8-step investigation methodology ensures thorough, legally compliant results.</p>
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
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-primary text-primary-foreground font-heading font-bold">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && <div className="flex-1 w-px bg-border" />}
                </div>
                <div className="pb-10 pt-2">
                  <h3 className="font-heading text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/inquiry" className="group inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">
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
