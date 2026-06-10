import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Lock, Upload } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const investigationTypes = [
  "Corporate BGV",
  "Insurance Fraud",
  "Matrimonial Verification",
  "Due Diligence",
  "NRI Verification",
  "Other"
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
          <div className="mx-auto max-w-3xl">
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
                {form.type === "Matrimonial Verification" && (
                  <div className="bg-primary/10 border-l-4 border-primary p-4 mb-6">
                    <p className="text-sm text-foreground font-medium flex items-center gap-2">
                      <Lock className="h-4 w-4 text-primary" /> Matrimonial cases are handled with 100% absolute secrecy. The subject will never be alerted.
                    </p>
                  </div>
                )}
                {form.type === "Insurance Fraud" && (
                  <div className="bg-primary/10 border-l-4 border-primary p-4 mb-6">
                    <p className="text-sm text-foreground font-medium flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-primary" /> This case will be routed to our specialized Insurance Fraud field team for immediate action.
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
                      {investigationTypes.map((t) => <option key={t} value={t}>{t}</option>)}
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
