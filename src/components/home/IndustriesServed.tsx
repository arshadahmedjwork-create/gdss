import { motion } from "framer-motion";
import { Monitor, Factory, Briefcase, ShieldPlus, Truck, HeartPulse, GraduationCap, Rocket, Scale, Users } from "lucide-react";

const industries = [
  { name: "IT & Tech", icon: Monitor },
  { name: "Manufacturing", icon: Factory },
  { name: "BFSI", icon: Briefcase },
  { name: "Insurance", icon: ShieldPlus },
  { name: "Logistics", icon: Truck },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Education", icon: GraduationCap },
  { name: "Startups", icon: Rocket },
  { name: "Legal Firms", icon: Scale },
  { name: "Matrimonial", icon: Users },
];

const IndustriesServed = () => {
  return (
    <section className="py-24 bg-subtle/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Sector Expertise</span>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground uppercase">INDUSTRIES WE SERVE</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center justify-center p-6 bg-background border border-border hover:border-primary/50 hover:shadow-md transition-all group"
            >
              <ind.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors mb-4" />
              <span className="text-sm font-bold text-foreground text-center">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
