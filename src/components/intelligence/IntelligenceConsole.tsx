import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, User, Phone, Mail, MapPin, Linkedin, Instagram,
  Shield, Search, Globe, Database, AlertTriangle,
  CheckCircle2, Activity, Eye, FileText, Lock
} from "lucide-react";

interface SubjectData {
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  instagram: string;
  location: string;
}

interface Props {
  subject: SubjectData;
  onClose: () => void;
}

type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

const STEP_DURATIONS: Record<Step, number> = {
  0: 500,
  1: 2500,
  2: 3500,
  3: 3000,
  4: 3000,
  5: 4000,
  6: 2000,
  7: 0,
};

// Activity log entries per step
const STEP_LOGS: Record<number, string[]> = {
  1: [
    "Initializing GDSS Intelligence Console...",
    "Identifying subject...",
    "Building profile...",
    "Subject profile generated.",
  ],
  2: [
    "Connecting to LinkedIn...",
    "Profile located.",
    "Analyzing employment history...",
    "Cross-referencing company records...",
    "LinkedIn analysis complete.",
  ],
  3: [
    "Scanning Instagram profile...",
    "Detecting public posts...",
    "Analyzing engagement patterns...",
    "Instagram footprint captured.",
  ],
  4: [
    "Analyzing phone number metadata...",
    "Checking telecom public directories...",
    "Cross-referencing spam databases...",
    "Phone intelligence complete.",
  ],
  5: [
    "Scanning public court records...",
    "Checking fraud databases...",
    "Analyzing news mentions...",
    "Searching corporate registries...",
    "Public database scan complete.",
  ],
  6: [
    "Compiling investigation summary...",
    "Generating digital footprint report...",
    "Report ready.",
  ],
};

const TypewriterText = ({ text, onDone }: { text: string; onDone?: () => void }) => {
  const [displayed, setDisplayed] = useState("");
  const idx = useRef(0);

  useEffect(() => {
    idx.current = 0;
    setDisplayed("");
    const iv = setInterval(() => {
      idx.current++;
      setDisplayed(text.slice(0, idx.current));
      if (idx.current >= text.length) {
        clearInterval(iv);
        onDone?.();
      }
    }, 22);
    return () => clearInterval(iv);
  }, [text]);

  return <span>{displayed}<span className="animate-pulse">▌</span></span>;
};

const IntelligenceConsole = ({ subject, onClose }: Props) => {
  const [step, setStep] = useState<Step>(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [scanProgress, setScanProgress] = useState(0);
  const logEndRef = useRef<HTMLDivElement>(null);

  const addLogs = useCallback(async (entries: string[]) => {
    for (const entry of entries) {
      await new Promise((r) => setTimeout(r, 500 + Math.random() * 400));
      setLogs((prev) => [...prev, entry]);
    }
  }, []);

  // Auto-scroll logs
  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  // Step progression
  useEffect(() => {
    if (step === 0) {
      setTimeout(() => setStep(1), STEP_DURATIONS[0]);
      return;
    }
    if (step >= 7) return;

    const stepLogs = STEP_LOGS[step];
    if (!stepLogs) return;

    let cancelled = false;
    (async () => {
      for (const entry of stepLogs) {
        if (cancelled) return;
        await new Promise((r) => setTimeout(r, 450 + Math.random() * 350));
        if (cancelled) return;
        setLogs((prev) => [...prev, entry]);
      }
      // If step 5, run progress bar
      if (step === 5) {
        for (let i = 0; i <= 100; i += 2) {
          if (cancelled) return;
          await new Promise((r) => setTimeout(r, 40));
          setScanProgress(i);
        }
      }
      await new Promise((r) => setTimeout(r, 600));
      if (!cancelled) setStep((s) => (s + 1) as Step);
    })();

    return () => { cancelled = true; };
  }, [step]);

  const timestamp = () => {
    const d = new Date();
    return d.toLocaleTimeString("en-GB", { hour12: false });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col"
      style={{ background: "hsl(210 40% 6%)" }}
    >
      {/* Grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between border-b px-4 py-3 sm:px-6"
        style={{ borderColor: "hsl(var(--primary) / 0.15)", background: "hsl(210 40% 5% / 0.9)" }}
      >
        <div className="flex items-center gap-3">
          <Shield className="h-5 w-5 text-primary" />
          <span className="font-heading text-sm font-bold tracking-wider text-primary sm:text-base">
            GDSS INTELLIGENCE CONSOLE
          </span>
          <span className="hidden rounded-sm bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary sm:inline">
            SECURE SESSION
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden text-[10px] text-muted-foreground sm:inline">
            SESSION {Math.random().toString(36).slice(2, 8).toUpperCase()}
          </span>
          <button onClick={onClose} className="rounded-sm p-1 text-muted-foreground transition-colors hover:bg-muted/20 hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Main panels */}
      <div className="relative z-10 flex flex-1 flex-col overflow-hidden lg:flex-row">
        {/* LEFT – Subject Profile */}
        <aside className="w-full border-b lg:w-72 lg:border-b-0 lg:border-r overflow-y-auto"
          style={{ borderColor: "hsl(var(--primary) / 0.1)" }}
        >
          <div className="p-4 sm:p-5">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">Subject Profile</p>

            <AnimatePresence>
              {step >= 1 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                  {/* Avatar */}
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/5">
                    <User className="h-8 w-8 text-primary/60" />
                  </div>

                  <div className="space-y-2.5">
                    <ProfileRow icon={User} label="Name" value={subject.name} />
                    {subject.phone && <ProfileRow icon={Phone} label="Phone" value={subject.phone} />}
                    <ProfileRow icon={Mail} label="Email" value={subject.email} />
                    {subject.location && <ProfileRow icon={MapPin} label="Location" value={subject.location} />}
                    {subject.linkedin && <ProfileRow icon={Linkedin} label="LinkedIn" value="Connected" highlight />}
                    {subject.instagram && <ProfileRow icon={Instagram} label="Instagram" value={`@${subject.instagram.replace("@", "")}`} highlight />}
                  </div>

                  {/* Confidence meters */}
                  {step >= 6 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3 pt-3 border-t" style={{ borderColor: "hsl(var(--primary) / 0.1)" }}>
                      <Meter label="Identity Confidence" value={87} color="primary" />
                      <Meter label="Digital Footprint" value={62} color="accent" />
                      <Meter label="Risk Level" value={18} color="destructive" />
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </aside>

        {/* CENTER – Activity Feed */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 font-mono text-xs sm:text-sm">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary font-sans">
              Investigation Activity Feed
            </p>
            <div className="space-y-1.5">
              {logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-2"
                >
                  <span className="shrink-0 text-muted-foreground/50">[{timestamp()}]</span>
                  <span className={log.includes("complete") || log.includes("ready") || log.includes("generated") || log.includes("located") || log.includes("captured")
                    ? "text-primary" : "text-foreground/80"}>
                    {log}
                  </span>
                </motion.div>
              ))}
              {step >= 5 && step < 6 && (
                <div className="mt-3 space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                    <span>Database Scan Progress</span>
                    <span className="text-primary">{scanProgress}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${scanProgress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>
              )}
            </div>
            <div ref={logEndRef} />
          </div>

          {/* CTA at bottom of center */}
          <AnimatePresence>
            {step >= 7 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t p-4 sm:p-6 text-center"
                style={{ borderColor: "hsl(var(--primary) / 0.15)" }}
              >
                <p className="mb-1 font-heading text-lg font-bold text-foreground">Need a full professional investigation?</p>
                <p className="mb-4 text-sm text-muted-foreground">Our team of experts can conduct an in-depth authorized investigation.</p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <a href="/confidential-inquiry" className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">
                    Start Confidential Investigation
                  </a>
                  <a href="/contact" className="rounded-sm border border-primary/30 px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/5">
                    Book Private Consultation
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* RIGHT – Digital Footprint */}
        <aside className="hidden w-80 overflow-y-auto border-l xl:block"
          style={{ borderColor: "hsl(var(--primary) / 0.1)" }}
        >
          <div className="p-5 space-y-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">Digital Footprint</p>

            {/* LinkedIn Card */}
            <AnimatePresence>
              {step >= 2 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="rounded-sm border p-4 space-y-3"
                  style={{ borderColor: "hsl(var(--primary) / 0.15)", background: "hsl(210 40% 8%)" }}
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                    <span className="text-xs font-semibold text-foreground">LinkedIn Profile</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-5 w-5 text-primary/60" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{subject.name}</p>
                      <p className="text-[11px] text-muted-foreground">Corporate Professional</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <MiniStat label="Connections" value="500+" />
                    <MiniStat label="Posts" value="47" />
                    <MiniStat label="Endorsements" value="23" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Instagram Card */}
            <AnimatePresence>
              {step >= 3 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="rounded-sm border p-4 space-y-3"
                  style={{ borderColor: "hsl(var(--primary) / 0.15)", background: "hsl(210 40% 8%)" }}
                >
                  <div className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-[#E4405F]" />
                    <span className="text-xs font-semibold text-foreground">Instagram Activity</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="aspect-square rounded-sm bg-muted/20 flex items-center justify-center">
                        <Eye className="h-3 w-3 text-muted-foreground/20" />
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <MiniStat label="Posts" value="142" />
                    <MiniStat label="Followers" value="1.2K" />
                    <MiniStat label="Following" value="389" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Phone Intelligence */}
            <AnimatePresence>
              {step >= 4 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="rounded-sm border p-4 space-y-3"
                  style={{ borderColor: "hsl(var(--primary) / 0.15)", background: "hsl(210 40% 8%)" }}
                >
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold text-foreground">Phone Intelligence</span>
                  </div>
                  <div className="space-y-2">
                    <IntelRow label="Activity Score" value="Active" status="good" />
                    <IntelRow label="Directory Match" value="1 Found" status="neutral" />
                    <IntelRow label="Spam Reports" value="None" status="good" />
                    <IntelRow label="Linked Accounts" value="3 Detected" status="neutral" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Summary */}
            <AnimatePresence>
              {step >= 6 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="rounded-sm border border-primary/20 p-4 space-y-3"
                  style={{ background: "hsl(var(--primary) / 0.05)" }}
                >
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold text-primary">Investigation Summary</span>
                  </div>
                  <div className="space-y-2">
                    <IntelRow label="Identity Confidence" value="High" status="good" />
                    <IntelRow label="Digital Footprint" value="Moderate" status="neutral" />
                    <IntelRow label="Public Risk Signals" value="None Detected" status="good" />
                    <IntelRow label="Social Presence" value="Active" status="good" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </aside>
      </div>

      {/* Bottom – Progress Timeline */}
      <footer className="relative z-10 border-t px-4 py-3 sm:px-6"
        style={{ borderColor: "hsl(var(--primary) / 0.15)", background: "hsl(210 40% 5% / 0.9)" }}
      >
        <div className="flex items-center gap-1 overflow-x-auto sm:gap-2">
          {[
            "Initialization",
            "Profile Build",
            "LinkedIn Scan",
            "Instagram Scan",
            "Phone Intel",
            "Database Scan",
            "Report",
            "Complete",
          ].map((label, i) => {
            const done = step > i;
            const active = step === i;
            return (
              <div key={label} className="flex items-center gap-1 sm:gap-2 shrink-0">
                <div className={`flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full text-[9px] sm:text-[10px] font-bold transition-colors ${
                  done ? "bg-primary text-primary-foreground" : active ? "bg-primary/20 text-primary border border-primary/40" : "bg-secondary/30 text-muted-foreground/40"
                }`}>
                  {done ? "✓" : i + 1}
                </div>
                <span className={`hidden text-[10px] sm:inline ${done ? "text-primary" : active ? "text-foreground" : "text-muted-foreground/40"}`}>
                  {label}
                </span>
                {i < 7 && <div className={`hidden h-px w-4 sm:block ${done ? "bg-primary/40" : "bg-muted-foreground/10"}`} />}
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-muted-foreground/60">
          <Lock className="h-3 w-3 shrink-0" />
          <span>This demonstration simulates digital footprint analysis. Actual investigations are conducted only with proper legal authorization and client consent.</span>
        </div>
      </footer>
    </motion.div>
  );
};

// Sub-components
const ProfileRow = ({ icon: Icon, label, value, highlight }: { icon: any; label: string; value: string; highlight?: boolean }) => (
  <div className="flex items-center gap-2.5">
    <Icon className={`h-3.5 w-3.5 shrink-0 ${highlight ? "text-primary" : "text-muted-foreground/50"}`} />
    <div className="min-w-0">
      <p className="text-[10px] text-muted-foreground">{label}</p>
      <p className="truncate text-xs text-foreground">{value}</p>
    </div>
  </div>
);

const MiniStat = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-sm font-bold text-foreground">{value}</p>
    <p className="text-[9px] text-muted-foreground">{label}</p>
  </div>
);

const IntelRow = ({ label, value, status }: { label: string; value: string; status: "good" | "neutral" | "warn" }) => (
  <div className="flex items-center justify-between">
    <span className="text-[11px] text-muted-foreground">{label}</span>
    <span className={`text-[11px] font-medium ${
      status === "good" ? "text-green-400" : status === "warn" ? "text-accent" : "text-foreground"
    }`}>{value}</span>
  </div>
);

const Meter = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="space-y-1">
    <div className="flex items-center justify-between text-[10px]">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground font-medium">{value}%</span>
    </div>
    <div className="h-1 overflow-hidden rounded-full bg-secondary/50">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full rounded-full ${
          color === "primary" ? "bg-primary" : color === "accent" ? "bg-accent" : "bg-destructive"
        }`}
      />
    </div>
  </div>
);

export default IntelligenceConsole;
