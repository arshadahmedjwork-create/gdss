import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, UserCheck, FileWarning, Eye, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Corporate Investigations",
    desc: "Employee misconduct, internal fraud, brand abuse investigation, and vendor due diligence.",
    path: "/services/corporate",
  },
  {
    icon: UserCheck,
    title: "Background Verification",
    desc: "Pre-employment verification, vendor due diligence, tenant verification, and discreet reference checks.",
    path: "/services/background-verification",
  },
  {
    icon: FileWarning,
    title: "Insurance Investigation",
    desc: "Accident verification, health insurance claim verification, and life insurance claim investigation.",
    path: "/services/insurance",
  },
  {
    icon: Eye,
    title: "Private Investigation",
    desc: "Prematrimonial & post matrimonial investigations, personal inquiries, and asset verification.",
    path: "/services/private",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Our Expertise</span>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
            Investigation Services
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Comprehensive investigation solutions for corporate and individual clients across India.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to={service.path}
                className="group flex h-full flex-col rounded-md border border-border/50 bg-card/40 p-8 transition-all hover:border-primary/30 hover:bg-card/70"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm border border-primary/20 bg-primary/5">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
