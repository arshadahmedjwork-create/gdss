import { Link } from "react-router-dom";
import { AlertTriangle, ArrowRight, PhoneCall, ShieldAlert, UserSearch } from "lucide-react";

const emergencyTypes = [
  { title: "Fraud Cases", detail: "Internal fraud, vendor deception, forged documents, or suspicious financial claims.", icon: ShieldAlert },
  { title: "Missing Persons", detail: "Urgent tracing requests requiring fast field coordination and discreet local enquiries.", icon: UserSearch },
  { title: "Urgent Insurance Claims", detail: "Death, accident, hospitalization, or high-value claim verification requiring quick action.", icon: AlertTriangle },
];

const EmergencyHotlineSection = () => {
  return (
    <section className="border-y border-border bg-foreground py-16 text-background">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Emergency Hotline</span>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">Rapid Case Response</h2>
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              For time-sensitive fraud, missing person, and urgent claim matters, contact the hotline and submit a secure inquiry so the case can be triaged immediately.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="tel:+919999999999" className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90">
                <PhoneCall className="h-4 w-4" /> Call +91 99999 99999
              </a>
              <Link to="/inquiry" className="inline-flex items-center justify-center gap-2 border border-background/20 px-5 py-3 text-sm font-bold text-background transition-colors hover:bg-background hover:text-foreground">
                Submit Secure Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {emergencyTypes.map((item) => (
              <div key={item.title} className="border border-background/10 bg-background/5 p-5">
                <item.icon className="h-6 w-6 text-white" />
                <h3 className="mt-4 font-heading text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-background/60">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyHotlineSection;
