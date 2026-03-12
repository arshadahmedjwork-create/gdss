import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe, Fingerprint, BarChart3, AlertTriangle } from "lucide-react";

type Phase = "idle" | "scanning" | "result";

const scanSteps = [
  { icon: Search, label: "Scanning public databases...", duration: 1200 },
  { icon: Globe, label: "Checking social media presence...", duration: 1000 },
  { icon: Fingerprint, label: "Analyzing digital footprint...", duration: 1200 },
  { icon: BarChart3, label: "Cross-referencing public records...", duration: 1000 },
];

const BackgroundCheckDemo = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", email: "", linkedin: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setPhase("scanning");
    setCurrentStep(0);

    for (let i = 0; i < scanSteps.length; i++) {
      await new Promise((r) => setTimeout(r, scanSteps[i].duration));
      setCurrentStep(i + 1);
    }

    await new Promise((r) => setTimeout(r, 600));
    setPhase("result");
  };

  const reset = () => {
    setPhase("idle");
    setCurrentStep(0);
    setForm({ name: "", phone: "", email: "", linkedin: "" });
  };

  return (
    <section className="py-24 bg-card/20 border-y border-border/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Interactive Demo</span>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">Background Check Demo</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Experience a simulated version of our verification process.
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <div className="rounded-md border border-border/50 bg-card/60 backdrop-blur-md overflow-hidden">
            {/* Terminal-style header */}
            <div className="flex items-center gap-2 border-b border-border/30 px-5 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-accent/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-primary/40" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">gdss://background-check-demo</span>
            </div>

            <div className="p-8">
              <AnimatePresence mode="wait">
                {phase === "idle" && (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        type="text"
                        placeholder="Full Name *"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="rounded-sm border border-border/50 bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                        required
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="rounded-sm border border-border/50 bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                      />
                      <input
                        type="email"
                        placeholder="Email Address *"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="rounded-sm border border-border/50 bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                        required
                      />
                      <input
                        type="text"
                        placeholder="LinkedIn Profile URL"
                        value={form.linkedin}
                        onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                        className="rounded-sm border border-border/50 bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-sm bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                    >
                      Run Background Check Demo
                    </button>
                  </motion.form>
                )}

                {phase === "scanning" && (
                  <motion.div
                    key="scanning"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <p className="text-center text-sm text-muted-foreground">
                      Scanning: <span className="text-primary">{form.name}</span>
                    </p>
                    <div className="space-y-3">
                      {scanSteps.map((step, i) => {
                        const done = currentStep > i;
                        const active = currentStep === i;
                        return (
                          <div key={step.label} className="flex items-center gap-3">
                            <div className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                              done ? "border-primary/50 bg-primary/10" : active ? "border-primary/30 bg-primary/5 animate-pulse" : "border-border/30 bg-secondary/30"
                            }`}>
                              <step.icon className={`h-4 w-4 ${done ? "text-primary" : active ? "text-primary/60" : "text-muted-foreground/30"}`} />
                            </div>
                            <span className={`text-sm ${done ? "text-foreground" : active ? "text-muted-foreground" : "text-muted-foreground/30"}`}>
                              {step.label}
                              {done && <span className="ml-2 text-primary">✓</span>}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    {/* Progress bar */}
                    <div className="h-1 overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(currentStep / scanSteps.length) * 100}%` }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </motion.div>
                )}

                {phase === "result" && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Demo results for</p>
                      <p className="font-heading text-lg font-semibold text-primary">{form.name}</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-sm border border-border/50 bg-secondary/30 p-4 text-center">
                        <p className="text-2xl font-heading font-bold text-primary">72</p>
                        <p className="text-xs text-muted-foreground mt-1">Risk Score</p>
                      </div>
                      <div className="rounded-sm border border-border/50 bg-secondary/30 p-4 text-center">
                        <p className="text-2xl font-heading font-bold text-foreground">Active</p>
                        <p className="text-xs text-muted-foreground mt-1">Public Presence</p>
                      </div>
                      <div className="rounded-sm border border-border/50 bg-secondary/30 p-4 text-center">
                        <p className="text-2xl font-heading font-bold text-foreground">Moderate</p>
                        <p className="text-xs text-muted-foreground mt-1">Digital Activity</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 rounded-sm border border-accent/20 bg-accent/5 p-4">
                      <AlertTriangle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <p className="text-xs text-muted-foreground">
                        This is a demo simulation. Real investigations require legal authorization and are conducted by our professional investigation team.
                      </p>
                    </div>

                    <button
                      onClick={reset}
                      className="w-full rounded-sm border border-primary/30 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/5"
                    >
                      Try Again
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundCheckDemo;
