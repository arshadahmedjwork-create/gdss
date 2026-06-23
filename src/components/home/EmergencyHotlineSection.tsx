import { Link } from "react-router-dom";
import { AlertTriangle, ArrowRight, PhoneCall, ShieldAlert, UserSearch } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [ShieldAlert, UserSearch, AlertTriangle];

const EmergencyHotlineSection = () => {
  const { t } = useLanguage();

  return (
    <section className="border-y border-border bg-foreground py-16 text-background">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white">{t.hotlineTag}</span>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">{t.hotlineTitle}</h2>
            <p className="mt-4 text-sm leading-relaxed text-background/70">
              {t.hotlineDesc}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="tel:+919999999999" className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90">
                <PhoneCall className="h-4 w-4" /> {t.hotlineBtnCall}
              </a>
              <Link to="/inquiry" className="inline-flex items-center justify-center gap-2 border border-background/20 px-5 py-3 text-sm font-bold text-background transition-colors hover:bg-background hover:text-foreground">
                {t.hotlineBtnInquiry} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {t.hotlineTypes.map((item, index) => {
              const IconComponent = icons[index] || ShieldAlert;
              return (
                <div key={item.title} className="border border-background/10 bg-background/5 p-5">
                  <IconComponent className="h-6 w-6 text-white" />
                  <h3 className="mt-4 font-heading text-base font-bold">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-background/60">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyHotlineSection;
