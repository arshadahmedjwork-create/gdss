import { motion } from "framer-motion";
import { Lock, FileSignature, MapPin, Search, Award, ShieldAlert, FileText, Zap } from "lucide-react";

const reasons = [
  { icon: Lock, title: "100% Confidential Handling", desc: "Absolute secrecy maintained in every intelligence operation and verification process." },
  { icon: FileSignature, title: "Legally Compliant Investigations", desc: "All evidence gathered is legally admissible and acquired within statutory bounds." },
  { icon: MapPin, title: "PAN India Network", desc: "Vast network of intelligence operatives covering all major cities and remote locations." },
  { icon: Search, title: "Evidence-Based Reporting", desc: "Comprehensive, fact-checked dossiers backed by irrefutable photo and video evidence." },
  { icon: Award, title: "Experienced Investigators", desc: "Ex-servicemen and senior corporate intelligence analysts leading field operations." },
  { icon: ShieldAlert, title: "Corporate NDA Support", desc: "Enterprise-grade Non-Disclosure Agreements signed prior to any consultation." },
  { icon: FileText, title: "Secure Reporting Portal", desc: "End-to-end encrypted delivery of final investigation reports and multimedia evidence." },
  { icon: Zap, title: "Fast Turnaround Time", desc: "Rapid deployment of field teams for emergency cases and time-sensitive intelligence." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Trust & Authority</span>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">Why Top Enterprises Choose GDSS</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                <reason.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
