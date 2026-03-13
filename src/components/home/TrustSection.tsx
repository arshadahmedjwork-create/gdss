import { motion } from "framer-motion";

const stats = [
  { label: "30+ Years", desc: "of Investigation Experience" },
  { label: "Pan-India", desc: "Investigation Network" },
  { label: "Confidential", desc: "Case Handling" },
  { label: "Corporate", desc: "Intelligence Specialists" },
];

const TrustSection = () => {
  return (
    <section className="border-b border-border bg-subtle">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="font-heading text-xl font-bold text-foreground">{stat.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
