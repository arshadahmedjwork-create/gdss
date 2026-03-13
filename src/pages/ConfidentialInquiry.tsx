import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const investigationTypes = [
  "Corporate Investigation", "Background Verification", "Insurance Investigation",
  "Private Investigation", "Prematrimonial Investigation", "Post Matrimonial Investigation",
  "Asset Verification", "Other",
];

const ConfidentialInquiry = () => {
  const [form, setForm] = useState({
    type: "", subjectName: "", location: "", description: "",
    contactMethod: "email", name: "", email: "", phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        "template_87z7zhf",
        {
          to_name: form.name,
          to_email: form.email,
          from_name: "GDSS Investigations",
          name: form.name,
          email: form.email,
          phone: form.phone,
          type: form.type,
          subjectName: form.subjectName,
          location: form.location,
          description: form.description,
          contactMethod: form.contactMethod,
          reply_to: form.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      toast.success("Inquiry submitted successfully");
    } catch (error) {
      console.error("Failed to send template email", error);
      toast.error("Failed to submit inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const inputClass = "w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-3 block">
                Encrypted & Confidential
              </span>
              <h1 className="font-heading text-3xl font-bold sm:text-4xl text-foreground">
                Confidential Inquiry
              </h1>
              <p className="mt-3 text-muted-foreground">
                All inquiries are handled with strict confidentiality. Your information is secure.
              </p>
            </motion.div>

            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border border-primary/30 bg-primary/5 p-12 text-center">
                <h2 className="font-heading text-2xl font-bold text-foreground">Inquiry Received</h2>
                <p className="mt-3 text-muted-foreground">Our investigation team will review your inquiry and contact you within 24 hours.</p>
              </motion.div>
            ) : (
              <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} onSubmit={handleSubmit} className="space-y-6 border border-border p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Your Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Full name" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Email *</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="+91" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Investigation Type *</label>
                    <select required value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className={inputClass}>
                      <option value="">Select type</option>
                      {investigationTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Subject Name</label>
                    <input type="text" value={form.subjectName} onChange={(e) => setForm({ ...form, subjectName: e.target.value })} className={inputClass} placeholder="Person or entity name" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Location</label>
                    <input type="text" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className={inputClass} placeholder="City, State" />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Case Description *</label>
                  <textarea required rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className={inputClass} placeholder="Describe your investigation requirement..." />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Upload Evidence (optional)</label>
                  <div className="flex items-center gap-3 border border-dashed border-border bg-subtle p-4 cursor-pointer hover:border-primary transition-colors">
                    <Upload className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Click to upload documents or images</span>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Preferred Contact Method</label>
                  <div className="flex gap-4">
                    {["email", "phone", "whatsapp"].map((m) => (
                      <label key={m} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="contact" value={m} checked={form.contactMethod === m} onChange={(e) => setForm({ ...form, contactMethod: e.target.value })} className="accent-primary" />
                        <span className="text-sm capitalize text-foreground">{m}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="group flex w-full items-center justify-center gap-2 bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? "Submitting..." : "Submit Confidential Inquiry"}
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
