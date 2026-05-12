import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Corporate Investigations",
    desc: "Employee misconduct, internal fraud, brand abuse investigation, and vendor due diligence.",
    path: "/services/corporate",
  },
  {
    title: "Background Verification",
    desc: "Pre-employment verification, vendor due diligence, tenant verification, and discreet reference checks.",
    path: "/services/background-verification",
  },
  {
    title: "Insurance Investigation",
    desc: "Accident verification, health insurance claim verification, and life insurance claim investigation.",
    path: "/services/insurance",
  },
  {
    title: "Private Investigation",
    desc: "Prematrimonial & post matrimonial investigations, personal inquiries, and asset verification.",
    path: "/services/private",
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
    <section className="py-24" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Our Expertise</span>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">
            Investigation Services
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Comprehensive investigation solutions for corporate and individual clients across India.
          </p>
        </motion.div>

        <div className="grid gap-px bg-border md:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="service-card-trigger"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Link
                to={service.path}
                className="group flex h-full flex-col bg-background p-10 transition-all service-card"
              >
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
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
