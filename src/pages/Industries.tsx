import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Factory, Briefcase, ShieldPlus, Truck, HeartPulse, GraduationCap, Rocket, Scale, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const industries = [
  {
    title: "IT & Tech",
    icon: Monitor,
    desc: "Employee fraud detection, background verification for IT professionals, vendor screening, and insider threat investigations for software companies and tech parks.",
  },
  {
    title: "Manufacturing",
    icon: Factory,
    desc: "Supply chain verification, employee misconduct checks, brand abuse investigation, and vendor due diligence for manufacturing and industrial firms.",
  },
  {
    title: "BFSI",
    icon: Briefcase,
    desc: "Due diligence, fraud investigation, KYC support, director background checks, and compliance verification for banks and financial institutions.",
  },
  {
    title: "Insurance",
    icon: ShieldPlus,
    desc: "Claims investigation, fraud detection, accident spot verification, hospital record checks, and field verification for life, health, and general insurance companies.",
  },
  {
    title: "Logistics",
    icon: Truck,
    desc: "Driver verification, warehouse employee screening, vendor due diligence, and cargo-related fraud investigation for logistics and supply chain companies.",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    desc: "Medical staff credential verification, hospital vendor checks, fraud investigation, and patient claim verification for healthcare providers and pharma companies.",
  },
  {
    title: "Education",
    icon: GraduationCap,
    desc: "Faculty credential checks, staff background verification, student screening for hostels, and institution vendor due diligence for schools and universities.",
  },
  {
    title: "Startups",
    icon: Rocket,
    desc: "Co-founder background checks, early employee screening, investor due diligence, and vendor verification for early-stage and growth-stage startups.",
  },
  {
    title: "Legal Firms",
    icon: Scale,
    desc: "Evidence gathering, witness verification, litigation intelligence, asset tracing, and opposition research support for law firms and compliance departments.",
  },
  {
    title: "Matrimonial",
    icon: Users,
    desc: "Pre-matrimonial investigation, character verification, lifestyle checks, social media review, and family background verification for matrimonial bureaus and families.",
  },
];

const Industries = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll(".service-card-trigger");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Industries</span>
            <h1 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">Industries We Serve</h1>
            <p className="mt-4 text-muted-foreground">
              Tailored investigation and verification solutions for diverse industry sectors across India and internationally.
            </p>
          </motion.div>

          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="service-card-trigger"
                  style={{ transitionDelay: `${i * 0.07}s` }}
                >
                  <div className="group flex h-full flex-col bg-background p-8 transition-all service-card">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-mono text-lg font-bold text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{ind.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 rounded-[6px]"
            >
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
