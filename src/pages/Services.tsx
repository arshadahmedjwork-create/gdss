import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const servicePages = [
  {
    id: "corporate-bgv",
    path: "/services/corporate-bgv",
    title: "Corporate Investigations & BGV",
    desc: "Structured investigation support for employers, legal teams, insurers, and risk leaders who need discreet facts before making high-stakes decisions.",
    items: [
      "Employee BGV",
      "Vendor Verification",
      "Fraud Investigation",
      "Due Diligence",
      "Mystery Audit",
      "Asset Verification",
      "Workplace Misconduct",
      "Absconding Employee Trace",
      "Field Verification",
    ],
  },
  {
    id: "insurance",
    path: "/services/insurance",
    title: "Insurance Fraud Investigation",
    desc: "Rapid, discreet claim verification for insurers, TPAs, legal teams, and risk units handling death, medical, accident, and suspicious field claims.",
    items: [
      "Death Claim Investigation",
      "Medical Claim Verification",
      "Accident Spot Verification",
      "Hospital Record Checks",
      "Claimant Address Verification",
      "Witness Statements",
      "Policy Abuse Indicators",
      "Field Investigation",
    ],
  },
  {
    id: "due-diligence",
    path: "/services/due-diligence",
    title: "Corporate & Vendor Due Diligence",
    desc: "Fact-finding support for business relationships, partnerships, acquisitions, vendor onboarding, investments, and sensitive commercial decisions.",
    items: [
      "Company Background Checks",
      "Director Verification",
      "Vendor Reputation Checks",
      "Site Verification",
      "Litigation & Adverse Media Review",
      "Asset & Address Checks",
      "Operational Validation",
      "Partner Integrity Review",
    ],
  },
  {
    id: "matrimonial",
    path: "/services/matrimonial",
    title: "Matrimonial Verification",
    desc: "Confidential verification for families and individuals who need clarity about identity, employment, lifestyle, finances, relationships, and background before commitment.",
    items: [
      "Pre-matrimonial Investigation",
      "Character Verification",
      "Employment Verification",
      "Family Background",
      "Lifestyle Verification",
      "Social Media Investigation",
      "Financial Status Verification",
      "Hidden Marriage / Divorce Verification",
    ],
  },
  {
    id: "nri",
    path: "/services/nri",
    title: "NRI Verification Services",
    desc: "Local verification support for NRIs managing family, property, tenants, marriage alliances, inheritance concerns, missing persons, or field enquiries in India.",
    items: [
      "India-Based Family Verification",
      "Property Verification",
      "Marriage Alliance Investigation",
      "Missing Person Tracing",
      "Tenant Verification",
      "Inheritance Dispute Investigation",
      "Local Field Enquiries",
    ],
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
            <p className="mt-4 text-muted-foreground">Professional investigation solutions across corporate, insurance, matrimonial, NRI, and due diligence domains.</p>
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
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to={service.path}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      View Full Service Page <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link to="/inquiry" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary hover:underline">
                      Start Investigation <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 content-start">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 border-l-2 border-primary bg-subtle px-4 py-2.5">
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
