import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const industries = [
  { title: "Corporate & MNCs", desc: "Employee fraud detection, vendor verification, and internal misconduct investigations for corporate enterprises." },
  { title: "Banking & Financial Services", desc: "Due diligence, fraud investigation, and compliance verification for banks and financial institutions." },
  { title: "Insurance", desc: "Claims investigation, fraud detection, and verification services for life, health, and general insurance companies." },
  { title: "Manufacturing", desc: "Supply chain verification, employee misconduct, and brand abuse investigation for manufacturing firms." },
  { title: "Legal & Compliance", desc: "Evidence gathering, witness verification, and litigation support for law firms and compliance departments." },
  { title: "Real Estate", desc: "Tenant verification, property due diligence, and background checks for real estate developers and landlords." },
];

const Industries = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
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
            <p className="mt-4 text-muted-foreground">Tailored investigation solutions for diverse industry sectors across India.</p>
          </motion.div>

          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <div
                key={ind.title}
                className="service-card-trigger"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="group flex h-full flex-col bg-background p-10 transition-all service-card">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-4 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-foreground">{ind.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="group inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 rounded-[6px]">
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
