import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock } from "lucide-react";
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
    "border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none w-full";

  return (
    <>
      <section className="py-24 bg-subtle border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Interactive Demo
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">
              GDSS Intelligence Console
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Experience a simulated version of our professional investigation workflow.
            </p>
          </motion.div>

          <div className="mx-auto max-w-2xl">
            <div className="border border-border bg-background overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center gap-2 border-b border-border px-5 py-3 bg-subtle">
                <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">
                  gdss://intelligence-console
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <p className="mb-6 text-xs text-muted-foreground uppercase tracking-wider">
                  Enter subject details to begin simulation
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input type="text" placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} required />
                    <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
                    <input type="email" placeholder="Email Address *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} required />
                    <input type="text" placeholder="LinkedIn Profile URL" value={form.linkedin} onChange={(e) => setForm({ ...form, linkedin: e.target.value })} className={inputClass} />
                    <input type="text" placeholder="Instagram Handle" value={form.instagram} onChange={(e) => setForm({ ...form, instagram: e.target.value })} className={inputClass} />
                    <input type="text" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className={inputClass} />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 flex items-center justify-center gap-2"
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

      <AnimatePresence>
        {showConsole && (
          <IntelligenceConsole subject={form} onClose={() => setShowConsole(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default BackgroundCheckDemo;
