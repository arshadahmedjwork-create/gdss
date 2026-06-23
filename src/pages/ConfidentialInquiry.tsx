import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Lock, Upload, PhoneCall, AlertTriangle, UserSearch, ShieldAlert, Clock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const investigationTypes = [
  "Corporate BGV",
  "Vendor Verification",
  "Fraud Investigation",
  "Due Diligence",
  "Mystery Audit",
  "Asset Verification",
  "Workplace Misconduct",
  "Absconding Employee Trace",
  "Field Verification",
  "Pre-matrimonial Investigation",
  "Character Verification",
  "Employment Verification",
  "Family Background Verification",
  "Lifestyle Verification",
  "Social Media Investigation",
  "Financial Status Verification",
  "Hidden Marriage/Divorce Verification",
  "India-Based Family Verification",
  "Property Verification",
  "Marriage Alliance Investigation",
  "Missing Person Tracing",
  "Tenant Verification",
  "Inheritance Dispute Investigation",
  "Local Field Enquiries",
  "Insurance Fraud Investigation",
  "Other",
];

const emergencyCategories = [
  {
    icon: ShieldAlert,
    title: "Fraud Cases",
    subtitle: "Immediate Escalation",
    detail: "Active financial fraud, corporate embezzlement, or identity theft requiring urgent field response.",
    hotline: "+91 99999 99999",
    color: "border-red-500/40 bg-red-500/5",
    iconColor: "text-red-400",
  },
  {
    icon: UserSearch,
    title: "Missing Persons",
    subtitle: "Priority Response",
    detail: "Missing family member, absconding employee, or untraceable individual requiring immediate tracing.",
    hotline: "+91 99999 99999",
    color: "border-amber-500/40 bg-amber-500/5",
    iconColor: "text-amber-400",
  },
  {
    icon: AlertTriangle,
    title: "Urgent Insurance Claims",
    subtitle: "24-Hour Field Dispatch",
    detail: "High-value or time-sensitive insurance claim investigations requiring rapid field verification.",
    hotline: "+91 99999 99999",
    color: "border-orange-500/40 bg-orange-500/5",
    iconColor: "text-orange-400",
  },
];

const ConfidentialInquiry = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", whatsapp: "",
    country: "", city: "", type: "", preferredCallbackTime: "",
    callbackTimezone: "India Time (IST)", callbackChannel: "Phone",
    description: "",
  });

  // Dynamic Fields
  const [bulkCount, setBulkCount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const details = form.type === "Corporate BGV" && bulkCount
        ? `[Bulk Verification Required: ${bulkCount} employees]\n${form.description}`
        : form.description;

      const { error: dbError } = await supabase
        .from('confidential_inquiries')
        .insert([{
          full_name: form.name,
          email: form.email,
          phone: form.phone,
          whatsapp: form.whatsapp,
          country: form.country,
          city: form.city,
          service_required: form.type,
          preferred_callback_time: `${form.preferredCallbackTime || "No slot selected"} - ${form.callbackTimezone} via ${form.callbackChannel}`,
          inquiry_details: details,
          status: 'pending'
        }]);

      if (dbError) throw dbError;

      setSubmitted(true);
      toast.success("Secure transmission successful. An investigator will contact you.");
    } catch (error) {
      console.error("Failed to submit inquiry", error);
      toast.error("Transmission failed. Please try again or call the emergency line.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">
                <Lock className="h-4 w-4" /> End-to-End Encrypted Channel
              </span>
              <h1 className="font-heading text-3xl font-bold sm:text-4xl text-foreground">
                Initiate Investigation Protocol
              </h1>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                All communications are protected under strict enterprise NDA.
                Your identity and case details will remain completely confidential.
              </p>
            </motion.div>

            {/* ─────────────────────────────────────────────────────────── */}
            {/* EMERGENCY HOTLINE BLOCK */}
            {/* ─────────────────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mb-10 border border-destructive/30 bg-destructive/5 p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-destructive/10">
                    <PhoneCall className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-destructive">Emergency Hotline</span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-destructive/15 px-2 py-0.5 text-[10px] font-bold text-destructive">
                        <Clock className="h-2.5 w-2.5" /> 24 / 7
                      </span>
                    </div>
                    <h2 className="mt-0.5 font-heading text-lg font-bold text-foreground">
                      For Fraud, Missing Persons &amp; Urgent Insurance Cases
                    </h2>
                  </div>
                </div>
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center gap-2 bg-destructive px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-destructive/90 shrink-0"
                >
                  <PhoneCall className="h-4 w-4" />
                  Call Now: +91 99999 99999
                </a>
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                If your case involves active fraud, a missing person, or a time-critical insurance claim,
                call our dedicated emergency hotline immediately. Do not wait — every hour matters.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {emergencyCategories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <div
                      key={cat.title}
                      className={`border p-4 ${cat.color}`}
                    >
                      <Icon className={`h-5 w-5 mb-3 ${cat.iconColor}`} />
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-0.5">{cat.subtitle}</div>
                      <h3 className="font-heading text-sm font-bold text-foreground mb-2">{cat.title}</h3>
                      <p className="text-xs leading-relaxed text-muted-foreground mb-3">{cat.detail}</p>
                      <a
                        href={`tel:${cat.hotline.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                      >
                        <PhoneCall className="h-3 w-3" /> {cat.hotline}
                      </a>
                    </div>
                  );
                })}
              </div>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                For non-urgent cases, use the secure inquiry form below. An investigator will respond within 24 hours.
              </p>
            </motion.div>
            {/* ─────────────────────────────────────────────────────────── */}

            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border border-primary/20 bg-primary/5 p-12 text-center shadow-lg">
                <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="font-heading text-2xl font-bold text-foreground">Secure Transmission Confirmed</h2>
                <p className="mt-3 text-muted-foreground">
                  Your case details have been securely logged. A senior investigator specialized in {form.type || "your requirement"} will contact you at your preferred callback time.
                </p>
              </motion.div>
            ) : (
              <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} onSubmit={handleSubmit} className="space-y-6 bg-card border border-border p-8 shadow-2xl">

                {/* Dynamic Reassurance Banners */}
                {(form.type === "Pre-matrimonial Investigation" ||
                  form.type === "Character Verification" ||
                  form.type === "Hidden Marriage/Divorce Verification" ||
                  form.type === "Lifestyle Verification") && (
                  <div className="bg-primary/10 border-l-4 border-primary p-4 mb-6">
                    <p className="text-sm text-foreground font-medium flex items-center gap-2">
                      <Lock className="h-4 w-4 text-primary" /> Matrimonial cases are handled with 100% absolute secrecy. The subject will never be alerted.
                    </p>
                  </div>
                )}
                {form.type === "Insurance Fraud Investigation" && (
                  <div className="bg-primary/10 border-l-4 border-primary p-4 mb-6">
                    <p className="text-sm text-foreground font-medium flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-primary" /> This case will be routed to our specialized Insurance Fraud field team for immediate action.
                    </p>
                  </div>
                )}
                {(form.type === "Missing Person Tracing" || form.type === "Fraud Investigation") && (
                  <div className="bg-destructive/10 border-l-4 border-destructive p-4 mb-6">
                    <p className="text-sm text-foreground font-medium flex items-center gap-2">
                      <PhoneCall className="h-4 w-4 text-destructive" /> For urgent cases, call our emergency hotline directly: <a href="tel:+919999999999" className="font-bold text-destructive hover:underline">+91 99999 99999</a>
                    </p>
                  </div>
                )}

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="secure@email.com" />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number *</label>
                    <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="+91" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">WhatsApp Number</label>
                    <input type="tel" value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} className={inputClass} placeholder="Optional, for quick secure updates" />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Country</label>
                    <input type="text" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className={inputClass} placeholder="India" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">City/Location</label>
                    <input type="text" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputClass} placeholder="e.g. Mumbai, Dubai" />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Service Required *</label>
                    <select required value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className={inputClass}>
                      <option value="">Select Investigation Type</option>
                      <optgroup label="Corporate Services">
                        <option>Corporate BGV</option>
                        <option>Vendor Verification</option>
                        <option>Fraud Investigation</option>
                        <option>Due Diligence</option>
                        <option>Mystery Audit</option>
                        <option>Asset Verification</option>
                        <option>Workplace Misconduct</option>
                        <option>Absconding Employee Trace</option>
                        <option>Field Verification</option>
                      </optgroup>
                      <optgroup label="Matrimonial Services">
                        <option>Pre-matrimonial Investigation</option>
                        <option>Character Verification</option>
                        <option>Employment Verification</option>
                        <option>Family Background Verification</option>
                        <option>Lifestyle Verification</option>
                        <option>Social Media Investigation</option>
                        <option>Financial Status Verification</option>
                        <option>Hidden Marriage/Divorce Verification</option>
                      </optgroup>
                      <optgroup label="NRI Services">
                        <option>India-Based Family Verification</option>
                        <option>Property Verification</option>
                        <option>Marriage Alliance Investigation</option>
                        <option>Missing Person Tracing</option>
                        <option>Tenant Verification</option>
                        <option>Inheritance Dispute Investigation</option>
                        <option>Local Field Enquiries</option>
                      </optgroup>
                      <optgroup label="Insurance">
                        <option>Insurance Fraud Investigation</option>
                      </optgroup>
                      <optgroup label="Other">
                        <option>Other</option>
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Preferred Callback Slot</label>
                    <select value={form.preferredCallbackTime} onChange={(e) => setForm({ ...form, preferredCallbackTime: e.target.value })} className={inputClass}>
                      <option value="">Select time slot</option>
                      <option>09:00 - 11:00</option>
                      <option>11:00 - 13:00</option>
                      <option>14:00 - 16:00</option>
                      <option>16:00 - 18:00</option>
                      <option>18:00 - 20:00</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Callback Timezone</label>
                    <select value={form.callbackTimezone} onChange={(e) => setForm({ ...form, callbackTimezone: e.target.value })} className={inputClass}>
                      <option>India Time (IST)</option>
                      <option>Gulf Time (GST)</option>
                      <option>US/Canada Time</option>
                      <option>Europe Time</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Confirmation Channel</label>
                    <select value={form.callbackChannel} onChange={(e) => setForm({ ...form, callbackChannel: e.target.value })} className={inputClass}>
                      <option>Phone</option>
                      <option>WhatsApp</option>
                      <option>Email</option>
                    </select>
                  </div>
                </div>

                {/* Corporate Dynamic Field */}
                {form.type === "Corporate BGV" && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="bg-subtle p-4 border border-border">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Estimated Number of Verifications</label>
                    <select value={bulkCount} onChange={(e) => setBulkCount(e.target.value)} className={inputClass}>
                      <option value="">Single Verification</option>
                      <option value="1-10">1-10 Employees/Mo</option>
                      <option value="10-50">10-50 Employees/Mo</option>
                      <option value="50+">50+ Employees/Mo</option>
                    </select>
                  </motion.div>
                )}

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Case Overview / Requirements *</label>
                  <textarea required rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className={inputClass} placeholder="Provide necessary details. Do not include sensitive financial data." />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Secure Upload (Optional)</label>
                  <div className="flex items-center gap-3 border border-dashed border-border bg-subtle p-6 cursor-pointer hover:border-primary transition-colors text-center justify-center">
                    <Upload className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">Click to upload encrypted documents (PDF, JPG, PNG)</span>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="group flex w-full items-center justify-center gap-2 bg-primary py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed mt-4">
                  {isSubmitting ? "Encrypting & Transmitting..." : "Transmit Secure Request"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConfidentialInquiry;
