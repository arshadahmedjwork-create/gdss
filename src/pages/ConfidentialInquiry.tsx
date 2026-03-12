import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Shield, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const investigationTypes = [
  "Corporate Investigation",
  "Background Verification",
  "Insurance Investigation",
  "Private Investigation",
  "Prematrimonial Investigation",
  "Post Matrimonial Investigation",
  "Asset Verification",
  "Other",
];

const ConfidentialInquiry = () => {
  const [form, setForm] = useState({
    type: "",
    subjectName: "",
    location: "",
    description: "",
    contactMethod: "email",
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full rounded-sm border border-border/50 bg-secondary/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none";

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10"
            >
              <div className="mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Encrypted & Confidential
                </span>
              </div>
              <h1 className="font-heading text-3xl font-bold sm:text-4xl">
                Confidential Inquiry
              </h1>
              <p className="mt-3 text-muted-foreground">
                All inquiries are handled with strict confidentiality. Your information is secure.
              </p>
            </motion.div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-md border border-primary/20 bg-card/60 p-12 text-center"
              >
                <Shield className="mx-auto h-12 w-12 text-primary mb-4" />
                <h2 className="font-heading text-2xl font-bold">Inquiry Received</h2>
                <p className="mt-3 text-muted-foreground">
                  Our investigation team will review your inquiry and contact you within 24 hours through your preferred method.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                onSubmit={handleSubmit}
                className="space-y-6 rounded-md border border-border/50 bg-card/40 p-8"
              >
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
                  <div className="flex items-center gap-3 rounded-sm border border-dashed border-border/50 bg-secondary/20 p-4 cursor-pointer hover:border-primary/30 transition-colors">
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
                        <span className="text-sm capitalize text-foreground/80">{m}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-sm bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Submit Confidential Inquiry
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
