import { motion } from "framer-motion";
import { Shield, Globe, Lock, Brain } from "lucide-react";

const stats = [
  { icon: Shield, label: "30+ Years", desc: "of Experience" },
  { icon: Globe, label: "Pan-India", desc: "Investigation Network" },
  { icon: Lock, label: "Strict", desc: "Confidentiality" },
  { icon: Brain, label: "Corporate", desc: "Intelligence Expertise" },
];

const TrustSection = () => {
  return (
    <section className="relative border-y border-border/30 bg-card/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/5">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-foreground">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
