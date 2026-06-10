import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const servicePages = [
  {
    id: "corporate",
    title: "Corporate Investigations",
    desc: "Uncover internal fraud, employee misconduct, and vendor irregularities with discreet, legally compliant corporate investigations.",
    items: ["Employee misconduct investigation", "Internal fraud investigation", "Brand abuse investigation", "Vendor due diligence"],
  },
  {
    id: "background-verification",
    title: "Background Verification",
    desc: "Comprehensive verification services to help organizations make informed decisions about employees, vendors, and tenants.",
    items: ["Pre-employment verification", "Vendor due diligence", "Tenant verification", "Discreet reference checks"],
  },
  {
    id: "insurance",
    title: "Insurance Investigation",
    desc: "Protect against fraudulent claims with thorough investigation and verification of insurance claims.",
    items: ["Accident verification", "Health insurance claim verification", "Life insurance claim investigation"],
  },
  {
    id: "private",
    title: "Private Investigation",
    desc: "Discreet personal investigation services conducted with utmost confidentiality and legal compliance.",
    items: ["Prematrimonial investigation", "Post matrimonial investigation", "Personal investigations", "Asset verification"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Services</span>
            <h1 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">Investigation Services</h1>
            <p className="mt-4 text-muted-foreground">Professional investigation solutions across corporate, insurance, and personal domains.</p>
          </motion.div>

          <div className="space-y-8">
            {servicePages.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                id={service.id}
                className="grid gap-8 border border-border p-8 lg:grid-cols-2"
              >
                <div>
                  <span className="text-xs font-mono text-primary mb-2 block">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="font-heading text-2xl font-bold text-foreground">{service.title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{service.desc}</p>
                  <Link to="/inquiry" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                    Start Investigation <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="space-y-3">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 border-l-2 border-primary bg-subtle px-4 py-3">
                      <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
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

export default Services;
