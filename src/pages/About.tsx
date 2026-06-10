import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import gdssLogo from "@/assets/gdss-logo.png";

const CountUp = ({ target, showPlus = false }: { target: number; showPlus?: boolean }) => {
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
      {count}
      {showPlus && "+"}
    </motion.span>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">About GDSS</span>
            <h1 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">
              India's Trusted Investigation & Corporate Intelligence Firm
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded in 1993 by Dr. N. Madhu, a retired Indian Air Force Officer, GDSS Investigations
              is a division of Gautam Diligent Security Solutions & IFM Services Pvt Ltd. With over
              30 years of experience, we provide professional investigation and intelligence services
              to corporations, insurance companies, and individuals across India.
            </p>
          </motion.div>

          {/* Large credibility block */}
          <div className="mb-16 border-l-4 border-primary pl-8 py-4">
            <p className="font-heading text-6xl font-bold text-foreground leading-none">30+</p>
            <p className="font-heading text-xl font-semibold text-foreground mt-1">YEARS</p>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mt-1">of Investigation Experience</p>
          </div>

          <div className="bg-primary rounded-sm overflow-hidden mb-16">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 py-16 px-6">
              {[
                { countTo: 30, showPlus: true, desc: "Years of Experience" },
                { countTo: 1993, showPlus: false, desc: "Year Founded" },
                { countTo: 500, showPlus: true, desc: "Cases Annually" },
                { label: "Pan-India", desc: "Coverage", countTo: 0 },
              ].map((stat, i) => (
                <motion.div
                  key={stat.desc}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center relative group"
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.4, duration: 0.5, ease: "easeOut" }}
                    className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-black origin-left"
                  />
                  <div className="pb-4">
                    <p className="font-heading text-3xl lg:text-4xl font-bold text-white">
                      {stat.countTo > 0 ? (
                        <CountUp target={stat.countTo} showPlus={stat.showPlus} />
                      ) : (
                        stat.label
                      )}
                    </p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                      className="text-sm text-white mt-2"
                    >
                      {stat.desc}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Founder</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Dr. N. Madhu, a retired Indian Air Force Officer, brought military discipline, strategic thinking,
                and an unwavering commitment to integrity to the investigation industry.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Under his leadership, GDSS Investigations has grown from a small consultancy to one of India's
                most respected investigation and corporate intelligence firms, serving Fortune 500 companies,
                leading insurance providers, and discerning individual clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center border border-border p-12 bg-white/50 backdrop-blur-[2px] rounded-lg shadow-sm"
            >
              <motion.img 
                src={gdssLogo} 
                alt="GDSS Investigations" 
                className="max-h-24 drop-shadow-lg"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: 1.1,
                  filter: "brightness(1.1)",
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
