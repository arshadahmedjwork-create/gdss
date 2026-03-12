import { motion } from "framer-motion";
import { Building, Landmark, HeartPulse, Factory, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const industries = [
  { icon: Building, title: "Corporate & MNCs", desc: "Employee fraud detection, vendor verification, and internal misconduct investigations for corporate enterprises." },
  { icon: Landmark, title: "Banking & Financial Services", desc: "Due diligence, fraud investigation, and compliance verification for banks and financial institutions." },
  { icon: HeartPulse, title: "Insurance", desc: "Claims investigation, fraud detection, and verification services for life, health, and general insurance companies." },
  { icon: Factory, title: "Manufacturing", desc: "Supply chain verification, employee misconduct, and brand abuse investigation for manufacturing firms." },
  { icon: ShieldCheck, title: "Legal & Compliance", desc: "Evidence gathering, witness verification, and litigation support for law firms and compliance departments." },
  { icon: Building, title: "Real Estate", desc: "Tenant verification, property due diligence, and background checks for real estate developers and landlords." },
];

const Industries = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Industries</span>
            <h1 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">Industries We Serve</h1>
            <p className="mt-4 text-muted-foreground">Tailored investigation solutions for diverse industry sectors across India.</p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-md border border-border/50 bg-card/40 p-7 transition-all hover:border-primary/20"
              >
                <ind.icon className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-heading text-lg font-semibold">{ind.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">
              Discuss Your Industry Needs <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
