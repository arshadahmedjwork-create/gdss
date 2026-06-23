import { motion } from "framer-motion";
import { Lock, FileSignature, MapPin, Search, Award, ShieldAlert, FileText, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Lock, FileSignature, MapPin, Search, Award, ShieldAlert, FileText, Zap];

const WhyChooseUs = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{t.whyTag}</span>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">{t.whyTitle}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {t.whyReasons.map((reason, i) => {
            const IconComponent = icons[i] || Lock;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-start"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                  <IconComponent className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
