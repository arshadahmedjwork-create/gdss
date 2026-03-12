import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock } from "lucide-react";
import IntelligenceConsole from "@/components/intelligence/IntelligenceConsole";

const BackgroundCheckDemo = () => {
  const [showConsole, setShowConsole] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    linkedin: "",
    instagram: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setShowConsole(true);
  };

  const inputClass =
    "rounded-sm border border-border/50 bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none w-full";

  return (
    <>
      <section className="py-24 bg-card/20 border-y border-border/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Interactive Demo
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              GDSS Intelligence Console
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Experience a simulated version of our professional investigation workflow.
            </p>
          </motion.div>

          <div className="mx-auto max-w-2xl">
            <div className="rounded-md border border-border/50 bg-card/60 backdrop-blur-md overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-border/30 px-5 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-primary/40" />
                <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">
                  gdss://intelligence-console
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-2 text-muted-foreground">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-xs">Enter subject details to begin simulation</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      required
                    />
                    <input
                      type="text"
                      placeholder="LinkedIn Profile URL"
                      value={form.linkedin}
                      onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                      className={inputClass}
                    />
                    <input
                      type="text"
                      placeholder="Instagram Handle"
                      value={form.instagram}
                      onChange={(e) => setForm({ ...form, instagram: e.target.value })}
                      className={inputClass}
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-sm bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 flex items-center justify-center gap-2"
                  >
                    <Lock className="h-4 w-4" />
                    Start Investigation
                  </button>

                  <p className="text-center text-[10px] text-muted-foreground/60">
                    This is a demonstration simulation. No real data is collected or processed.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Console Overlay */}
      <AnimatePresence>
        {showConsole && (
          <IntelligenceConsole
            subject={form}
            onClose={() => setShowConsole(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default BackgroundCheckDemo;
