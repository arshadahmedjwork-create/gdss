import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const serviceDetails: Record<string, { title: string; desc: string }> = {
  "corporate-bgv": { title: "Corporate Background Verification", desc: "Comprehensive employee background checks, vendor due diligence, and risk mitigation for enterprises." },
  "insurance-fraud": { title: "Insurance Fraud Investigation", desc: "Specialized field verification for health, life, and accident claims to prevent fraudulent payouts." },
  "matrimonial": { title: "Matrimonial Verification", desc: "Discreet and confidential pre-matrimonial and post-matrimonial intelligence gathering." },
};

const LocalServiceTemplate = () => {
  const { city, service } = useParams<{ city: string; service: string }>();

  const cityFormatted = city ? city.charAt(0).toUpperCase() + city.slice(1) : "India";
  const serviceData = service && serviceDetails[service] ? serviceDetails[service] : { title: "Investigation Services", desc: "Professional intelligence and verification operations." };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceData.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "GDSS Intelligence & Verification",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": cityFormatted,
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": cityFormatted
    },
    "description": serviceData.desc
  };

  useEffect(() => {
    document.title = `${serviceData.title} in ${cityFormatted} | GDSS Intelligence`;
    
    // Manage Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', `${serviceData.desc} Providing professional ${serviceData.title.toLowerCase()} services in ${cityFormatted}.`);

    // Manage JSON-LD Schema
    let script = document.querySelector('#seo-schema');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('id', 'seo-schema');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaMarkup);

    return () => {
      if (script) script.remove();
    };
  }, [cityFormatted, serviceData, schemaMarkup]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4">
              <MapPin className="h-4 w-4" /> Localized Intelligence Operations
            </span>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl text-foreground mb-6">
              {serviceData.title} in {cityFormatted}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {serviceData.desc} Our highly trained operatives provide unmatched local intelligence and irrefutable evidence specifically tailored for clients operating in {cityFormatted}.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-card border border-border p-8 shadow-sm">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="h-6 w-6 text-primary" /> Why Choose Us in {cityFormatted}?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground"><strong>Local Expertise:</strong> Operatives natively familiar with {cityFormatted}'s geography and linguistic nuances.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground"><strong>Rapid Deployment:</strong> We can initiate field investigations in {cityFormatted} within 24 hours of NDA execution.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground"><strong>Legal Compliance:</strong> All evidence gathered complies with the statutory regulations applicable in {cityFormatted}.</p>
                </li>
              </ul>
            </div>
            <div className="bg-subtle p-8 border border-border text-center">
              <h3 className="text-xl font-bold mb-4">Require Immediate Assistance?</h3>
              <p className="text-sm text-muted-foreground mb-6">Connect with our senior case manager in {cityFormatted} for a confidential assessment.</p>
              <a href="/inquiry" className="inline-block bg-primary text-primary-foreground px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors">
                Start Secure Investigation
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LocalServiceTemplate;
