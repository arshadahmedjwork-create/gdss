import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { label: "30+", suffix: "Years", desc: "of Investigation Experience", countTo: 30 },
  { label: "Pan-India", suffix: "", desc: "Investigation Network", countTo: 0 },
  { label: "100%", suffix: "", desc: "Confidential Case Handling", countTo: 100 },
  { label: "500+", suffix: "Cases", desc: "Handled Annually", countTo: 500 },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started || target === 0) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <motion.span
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
    >
      {target === 0 ? "" : count}
      {target > 0 && "+"}
      {suffix && ` ${suffix}`}
    </motion.span>
  );
};

const TrustSection = () => {
  return (
    <section className="border-b border-border bg-subtle overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.desc}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center relative group"
            >
              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.4, duration: 0.5, ease: "easeOut" }}
                className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-primary origin-left"
              />
              <div className="pb-4">
                <p className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                  {stat.countTo > 0 ? (
                    <CountUp target={stat.countTo} suffix={stat.suffix} />
                  ) : (
                    stat.label
                  )}
                </p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                  className="text-sm text-muted-foreground mt-2"
                >
                  {stat.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
