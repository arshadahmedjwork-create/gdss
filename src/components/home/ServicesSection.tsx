import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, ShieldAlert, FileSearch, UserCheck, Globe, Check } from "lucide-react";

const services = [
  {
    title: "Corporate Investigations",
    desc: "Employee misconduct, internal fraud, brand abuse investigation, and vendor due diligence.",
    path: "/services/corporate-bgv",
    icon: Building2,
    cta: "Explore Corporate Services",
    items: ["Employee BGV", "Vendor verification", "Mystery audit", "Asset verification", "Workplace misconduct", "Absconding employee trace"]
  },
  {
    title: "Insurance Fraud",
    desc: "Death claim investigation, medical claim verification, accident verification, and field investigation.",
    path: "/services/insurance-fraud",
    icon: ShieldAlert,
    cta: "Verify Insurance Claims",
    items: ["Death claims", "Medical claims", "Accident checks", "Hospital records"]
  },
  {
    title: "Due Diligence",
    desc: "Comprehensive financial, legal, and operational background checks for mergers and acquisitions.",
    path: "/services/due-diligence",
    icon: FileSearch,
    cta: "Start Due Diligence",
    items: ["Company checks", "Director checks", "Site verification", "Adverse media"]
  },
  {
    title: "Matrimonial Verification",
    desc: "Discreet pre-matrimonial and post-matrimonial investigations. 100% confidentiality guaranteed.",
    path: "/services/matrimonial",
    icon: UserCheck,
    cta: "Request Discreet Verification",
    items: ["Character verification", "Employment checks", "Family background", "Lifestyle checks", "Social media review", "Hidden marriage/divorce"]
  },
  {
    title: "NRI Verification",
    desc: "Family verification, marriage verification, property verification, and tenant screening for NRIs.",
    path: "/services/nri-verification",
    icon: Globe,
    cta: "Get NRI Support",
    items: ["Family verification", "Property verification", "Marriage alliance checks", "Missing person tracing", "Tenant verification", "Inheritance enquiries"]
  },
];

const ServicesSection = () => {
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
    <section className="py-24 bg-card" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Core Competencies</span>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">
              Intelligence & Verification Services
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We provide enterprise-grade intelligence gathering and verification workflows for high-stakes corporate, legal, and personal matters.
            </p>
          </div>
          <Link to="/inquiry" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors">
            View All Capabilities <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="service-card-trigger"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Link
                to={service.path}
                className="group flex h-full flex-col bg-background border border-border p-8 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center bg-subtle text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground mb-6">{service.desc}</p>
                <div className="mb-8 grid gap-2">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                      <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mt-auto">
                  {service.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
