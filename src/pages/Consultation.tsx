import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock, ShieldCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const Consultation = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('consultation_requests')
        .insert([{
          full_name: form.name,
          email: form.email,
          phone: form.phone,
          service_type: form.service,
          preferred_date: form.date,
          message: form.message,
          status: 'pending'
        }]);

      if (error) throw error;
      setSubmitted(true);
      toast.success("Consultation request submitted");
    } catch (err) {
      toast.error("Submission failed. Please try again.");
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
                Expert Advice
              </span>
              <h1 className="font-heading text-3xl font-bold sm:text-4xl text-foreground">
                Book a Consultation
              </h1>
              <p className="mt-3 text-muted-foreground">
                Schedule a professional consultation with our lead investigators to discuss your case details.
              </p>
            </motion.div>

            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border border-primary/30 bg-primary/5 p-12 text-center">
                <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="font-heading text-2xl font-bold text-foreground">Request Received</h2>
                <p className="mt-3 text-muted-foreground">We will confirm your appointment via email or phone within 12 hours.</p>
              </motion.div>
            ) : (
              <motion.form 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                onSubmit={handleSubmit} 
                className="space-y-6 border border-border p-8 bg-subtle/30"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full Name *</label>
                    <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className={inputClass} placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email Address *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} className={inputClass} placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className={inputClass} placeholder="+91" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service Type *</label>
                    <select required value={form.service} onChange={e => setForm({...form, service: e.target.value})} className={inputClass}>
                      <option value="">Select a service</option>
                      <option>Corporate Investigation</option>
                      <option>Private Investigation</option>
                      <option>Background Check</option>
                      <option>Asset Tracing</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Preferred Date *</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <input type="date" required value={form.date} onChange={e => setForm({...form, date: e.target.value})} className={`${inputClass} pl-12`} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Additional Details</label>
                  <textarea rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className={inputClass} placeholder="Tell us briefly about your requirement..." />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 bg-primary py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-70"
                >
                  {isSubmitting ? "Processing..." : "Schedule Consultation"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest">
                  <Clock className="w-3 h-3 inline mr-1" /> Standard response time: 12 Hours
                </p>
              </motion.form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Consultation;
