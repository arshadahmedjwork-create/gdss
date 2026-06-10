import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = [
  { name: "Delhi", x: 45, y: 22 },
  { name: "Mumbai", x: 31, y: 57 },
  { name: "Pune", x: 37, y: 61 },
  { name: "Hyderabad", x: 50, y: 65 },
  { name: "Bangalore", x: 45, y: 78 },
  { name: "Chennai", x: 58, y: 79 },
  { name: "Coimbatore", x: 42, y: 86 },
  { name: "Kochi", x: 36, y: 89 },
  { name: "Dubai Liaison", x: 16, y: 38 },
];

const PanIndiaMap = () => {
  return (
    <section className="py-24 bg-card border-y border-border relative overflow-hidden">
      <div className="container relative mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Extensive Coverage</span>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">PAN India Operations</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our intelligence network spans across the entire country, enabling rapid deployment and localized evidence gathering in all major metropolitan and tier-2 cities.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative min-h-[420px] border border-border bg-background p-6 shadow-sm">
            <svg viewBox="0 0 100 110" className="h-full min-h-[360px] w-full" role="img" aria-label="India coverage map with city pins">
              <path
                d="M45 8 L55 15 L59 25 L67 31 L62 42 L67 52 L63 65 L70 78 L61 92 L54 104 L44 99 L36 88 L31 75 L25 66 L28 54 L22 42 L31 31 L34 19 Z"
                className="fill-primary/10 stroke-primary"
                strokeWidth="0.8"
              />
              <path d="M18 35 C21 31 25 30 30 33" className="fill-none stroke-primary/40" strokeWidth="0.6" strokeDasharray="2 2" />
              {cities.map((city, i) => (
                <motion.g key={city.name} initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                  <circle cx={city.x} cy={city.y} r="2.2" className="fill-primary" />
                  <circle cx={city.x} cy={city.y} r="5" className="fill-primary/10" />
                </motion.g>
              ))}
            </svg>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {cities.map((city, i) => (
              <motion.a
                key={city.name}
                href={`/services/${city.name.toLowerCase().replace(/\s+/g, "-")}/verification`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 bg-background border border-border px-5 py-3 shadow-sm hover:border-primary transition-colors"
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-bold text-foreground text-sm tracking-wide">{city.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanIndiaMap;
