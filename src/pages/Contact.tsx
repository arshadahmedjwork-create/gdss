import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const inputClass = "w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="font-heading text-3xl font-bold sm:text-4xl text-foreground">Contact Us</h1>
            <p className="mt-3 text-muted-foreground max-w-lg">Reach out for a confidential consultation about your investigation needs.</p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              {[
                { icon: Phone, label: "Phone", value: "+91 99999 99999", href: "tel:+919999999999" },
                { icon: Mail, label: "Email", value: "info@gdssinvestigations.com", href: "mailto:info@gdssinvestigations.com" },
                { icon: MapPin, label: "Office", value: "New Delhi, India" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-foreground hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-sm text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="border border-border p-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">Corporate Consultation</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  For HR, procurement, and compliance teams seeking investigation partnerships, we offer dedicated corporate consultations.
                </p>
              </div>
            </div>

            {submitted ? (
              <div className="border border-primary/30 bg-primary/5 p-12 text-center flex flex-col items-center justify-center">
                <h2 className="font-heading text-2xl font-bold text-foreground">Message Sent</h2>
                <p className="mt-3 text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 border border-border p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input type="text" required placeholder="Full Name *" className={inputClass} />
                  <input type="email" required placeholder="Email *" className={inputClass} />
                </div>
                <input type="tel" placeholder="Phone" className={inputClass} />
                <select className={inputClass}>
                  <option value="">Inquiry Type</option>
                  <option>Corporate Investigation</option>
                  <option>Background Verification</option>
                  <option>Insurance Investigation</option>
                  <option>Private Investigation</option>
                  <option>Consultation Request</option>
                </select>
                <textarea rows={4} placeholder="Your message..." className={inputClass} />
                <button type="submit" className="group flex w-full items-center justify-center gap-2 bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">
                  Send Message <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
