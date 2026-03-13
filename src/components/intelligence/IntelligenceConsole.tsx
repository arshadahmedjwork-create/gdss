import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, User, Phone, Mail, MapPin, Linkedin, Instagram,
  Search, Database, CheckCircle2, Eye, FileText, Lock
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

const STEP_LOGS: Record<number, string[]> = {
  1: ["Initializing GDSS Intelligence Console...", "Identifying subject...", "Building profile...", "Subject profile generated."],
  2: ["Connecting to LinkedIn...", "Profile located.", "Analyzing employment history...", "Cross-referencing company records...", "LinkedIn analysis complete."],
  3: ["Scanning Instagram profile...", "Detecting public posts...", "Analyzing engagement patterns...", "Instagram footprint captured."],
  4: ["Analyzing phone number metadata...", "Checking telecom public directories...", "Cross-referencing spam databases...", "Phone intelligence complete."],
  5: ["Scanning public court records...", "Checking fraud databases...", "Analyzing news mentions...", "Searching corporate registries...", "Public database scan complete."],
  6: ["Compiling investigation summary...", "Generating digital footprint report...", "Report ready."],
};

import emailjs from "@emailjs/browser";

const IntelligenceConsole = ({ subject, onClose }: Props) => {
  const [step, setStep] = useState<Step>(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [scanProgress, setScanProgress] = useState(0);
  const [emailSent, setEmailSent] = useState(false);
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  useEffect(() => {
    if (step === 0) {
      setTimeout(() => setStep(1), 500);
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
      if (step === 5) {
        for (let i = 0; i <= 100; i += 2) {
          if (cancelled) return;
          await new Promise((r) => setTimeout(r, 40));
          setScanProgress(i);
        }
      }
      await new Promise((r) => setTimeout(r, 600));
      if (!cancelled) {
        setStep((s) => (s + 1) as Step);
      }
    })();

    return () => { cancelled = true; };
  }, [step, subject, emailSent]);

  const timestamp = () => new Date().toLocaleTimeString("en-GB", { hour12: false });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col bg-background"
    >
      {/* Header */}
      <header className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6 bg-subtle">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <span className="font-heading text-sm font-bold tracking-wider text-foreground sm:text-base">
            GDSS INTELLIGENCE CONSOLE
          </span>
          <span className="hidden border border-primary/30 px-2 py-0.5 text-[10px] font-medium text-primary sm:inline">
            SECURE SESSION
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden text-[10px] text-muted-foreground sm:inline">
            SESSION {Math.random().toString(36).slice(2, 8).toUpperCase()}
          </span>
          <button onClick={onClose} className="p-1 text-muted-foreground transition-colors hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Main panels */}
      <div className="flex flex-1 flex-col overflow-y-auto lg:overflow-hidden lg:flex-row">
        {/* LEFT – Subject Profile */}
        <aside className="w-full shrink-0 border-b border-border lg:w-72 lg:border-b-0 lg:border-r lg:overflow-y-auto">
          <div className="p-4 sm:p-5">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary font-body">Subject Profile</p>

            <AnimatePresence>
              {step >= 1 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center border-2 border-border bg-subtle">
                    <User className="h-8 w-8 text-muted-foreground/40" />
                  </div>

                  <div className="space-y-2.5">
                    <ProfileRow icon={User} label="Name" value={subject.name} />
                    {subject.phone && <ProfileRow icon={Phone} label="Phone" value={subject.phone} />}
                    <ProfileRow icon={Mail} label="Email" value={subject.email} />
                    {subject.location && <ProfileRow icon={MapPin} label="Location" value={subject.location} />}
                    {subject.linkedin && <ProfileRow icon={Linkedin} label="LinkedIn" value="Connected" highlight />}
                    {subject.instagram && <ProfileRow icon={Instagram} label="Instagram" value={`@${subject.instagram.replace("@", "")}`} highlight />}
                  </div>

                  {step >= 6 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3 pt-3 border-t border-border">
                      <Meter label="Identity Confidence" value={87} color="primary" />
                      <Meter label="Digital Footprint" value={62} color="muted-foreground" />
                      <Meter label="Risk Level" value={98} color="destructive" />
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </aside>

        {/* CENTER – Activity Feed */}
        <main className="flex flex-col min-w-0 flex-1 lg:overflow-hidden border-b border-border lg:border-b-0">
          <div className="flex-1 p-4 sm:p-5 font-mono text-xs sm:text-sm lg:overflow-y-auto min-h-[300px] lg:min-h-0">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary font-body">
              Investigation Activity Feed
            </p>
            <div className="space-y-1.5">
              {logs.map((log, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="flex gap-2">
                  <span className="shrink-0 text-muted-foreground/50">[{timestamp()}]</span>
                  <span className={log.includes("complete") || log.includes("ready") || log.includes("generated") || log.includes("located") || log.includes("captured")
                    ? "text-primary font-medium" : "text-foreground/80"}>
                    {log}
                  </span>
                </motion.div>
              ))}
              {step >= 5 && step < 6 && (
                <div className="mt-3 space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                    <span>Database Scan Progress</span>
                    <span className="text-primary font-medium">{scanProgress}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden bg-border">
                    <motion.div className="h-full bg-primary" style={{ width: `${scanProgress}%` }} transition={{ duration: 0.1 }} />
                  </div>
                </div>
              )}
            </div>
            <div ref={logEndRef} />
          </div>

          {/* CTA / Report Delivery */}
          {/* CTA / Report Delivery */}
          <AnimatePresence>
            {step >= 7 && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="border-t-4 border-destructive p-4 sm:p-6 md:p-8 bg-destructive/10 text-center shadow-[inset_0_0_20px_rgba(255,0,0,0.15)] backdrop-blur-sm">
                <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-destructive/20 text-destructive">
                   <Lock className="h-5 w-5 sm:h-7 sm:w-7" />
                </div>
                <h3 className="mb-2 font-heading text-lg sm:text-xl font-extrabold text-destructive md:text-2xl">
                   CRITICAL ALERTS DETECTED
                </h3>
                <p className="mx-auto mb-4 sm:mb-6 max-w-lg text-xs sm:text-sm text-foreground/80 leading-relaxed font-semibold px-2">
                   Our preliminary scan revealed hidden digital footprints, potential compliance risks, and unverified data points linked to this subject. To protect the integrity of your organization, you must uncover these hidden vectors immediately.
                </p>
                
                {!emailSent ? (
                  <form 
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const userEmail = formData.get("userEmail") as string;
                      if (!userEmail) return;

                      try {
                        const templateParams = {
                          to_email: userEmail,
                          subject_name: subject.name,
                          subject_email: subject.email,
                          subject_phone: subject.phone || "N/A",
                          subject_location: subject.location || "N/A",
                        };
                        
                        await emailjs.send(
                          import.meta.env.VITE_EMAILJS_SERVICE_ID,
                          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                          templateParams,
                          { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
                        );
                        setEmailSent(true);
                      } catch (error) {
                        console.error("Failed to send report via EmailJS", error);
                      }
                    }}
                    className="mx-auto flex max-w-md w-full flex-col gap-2 sm:gap-3 sm:flex-row sm:items-center px-2"
                  >
                    <input 
                      type="email" 
                      name="userEmail"
                      required 
                      placeholder="Enter email to receive report" 
                      className="w-full flex-1 rounded-none border border-destructive/50 bg-background/50 px-3 py-3 sm:px-4 sm:py-3.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-destructive focus:ring-1 focus:ring-destructive"
                    />
                    <button type="submit" className="w-full sm:w-auto bg-destructive px-4 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold tracking-wide text-destructive-foreground transition-all hover:bg-destructive/90 shadow-lg shadow-destructive/30 uppercase whitespace-nowrap">
                      Send Report
                    </button>
                  </form>
                ) : (
                  <div className="mx-auto max-w-md w-full bg-green-500/10 border border-green-500/20 p-3 sm:p-4 text-green-500 font-bold text-xs sm:text-sm mx-2">
                    Report Sent Successfully. Check your inbox.
                    <div className="mt-3 sm:mt-4 flex justify-center">
                       <a href="/contact" className="w-full sm:w-auto bg-destructive/90 px-4 py-2 sm:px-6 sm:py-2 text-xs font-bold tracking-wide text-destructive-foreground transition-all hover:bg-destructive uppercase text-center block">
                         Contact Firm Now
                       </a>
                    </div>
                  </div>
                )}
                
                <p className="mt-4 text-[9px] sm:text-[11px] text-muted-foreground uppercase tracking-widest font-mono px-2">
                   * Detailed dossier requires manual Analyst verification *
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* RIGHT – Digital Footprint */}
        <aside className="hidden w-80 overflow-y-auto border-l border-border xl:block">
          <div className="p-5 space-y-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary font-body">Digital Footprint</p>

            <AnimatePresence>
              {step >= 2 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border border-border p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                    <span className="text-xs font-semibold text-foreground">LinkedIn Profile</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-subtle">
                      <User className="h-5 w-5 text-muted-foreground/40" />
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

            <AnimatePresence>
              {step >= 3 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border border-border p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-[#E4405F]" />
                    <span className="text-xs font-semibold text-foreground">Instagram Activity</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="aspect-square bg-subtle flex items-center justify-center">
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

            <AnimatePresence>
              {step >= 4 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border border-border p-4 space-y-3">
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

            <AnimatePresence>
              {step >= 6 && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border border-primary/30 bg-primary/5 p-4 space-y-3">
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
      <footer className="border-t border-border px-4 py-3 sm:px-6 bg-subtle">
        <div className="flex items-center gap-1 overflow-x-auto sm:gap-2">
          {["Initialization", "Profile Build", "LinkedIn Scan", "Instagram Scan", "Phone Intel", "Database Scan", "Report", "Complete"].map((label, i) => {
            const done = step > i;
            const active = step === i;
            return (
              <div key={label} className="flex items-center gap-1 sm:gap-2 shrink-0">
                <div className={`flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center text-[9px] sm:text-[10px] font-bold transition-colors ${
                  done ? "bg-primary text-primary-foreground" : active ? "border border-primary text-primary" : "bg-border text-muted-foreground/40"
                }`}>
                  {done ? "✓" : i + 1}
                </div>
                <span className={`hidden text-[10px] sm:inline ${done ? "text-primary" : active ? "text-foreground" : "text-muted-foreground/40"}`}>
                  {label}
                </span>
                {i < 7 && <div className={`hidden h-px w-4 sm:block ${done ? "bg-primary/40" : "bg-border"}`} />}
              </div>
            );
          })}
        </div>

        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-muted-foreground/60">
          <Lock className="h-3 w-3 shrink-0" />
          <span>This demonstration simulates digital footprint analysis. Actual investigations are conducted only with proper legal authorization and client consent.</span>
        </div>
      </footer>
    </motion.div>
  );
};

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
      status === "good" ? "text-green-600" : status === "warn" ? "text-primary" : "text-foreground"
    }`}>{value}</span>
  </div>
);

const Meter = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="space-y-1">
    <div className="flex items-center justify-between text-[10px]">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground font-medium">{value}%</span>
    </div>
    <div className="h-1 overflow-hidden bg-border">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full ${
          color === "primary" ? "bg-primary" : color === "destructive" ? "bg-destructive" : "bg-muted-foreground"
        }`}
      />
    </div>
  </div>
);

export default IntelligenceConsole;
