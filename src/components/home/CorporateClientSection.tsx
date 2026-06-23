import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  EN: {
    tag: "For HR Teams & Enterprises",
    title: "Enterprise-Grade Background Verification Funnel",
    desc: "Safeguard your organization with our bulk verification and corporate intelligence workflows. We partner with HR departments, procurement teams, and compliance officers to deliver fast, secure, and legally compliant reports.",
    cta: "Access Corporate Funnel",
    features: [
      "Bulk Employee Background Verification Workflows",
      "Dedicated Enterprise Onboarding & Account Manager",
      "Strict TAT Timelines with SLA Support",
      "Secure API Integration Capabilities",
      "Flexible Monthly Verification Contracts",
      "Compliance & Ethics Auditing"
    ]
  },
  HI: {
    tag: "मानव संसाधन टीमों और उद्यमों के लिए",
    title: "उद्यम-ग्रेड पृष्ठभूमि सत्यापन फ़नल",
    desc: "थोक सत्यापन और कॉर्पोरेट खुफिया कार्यप्रवाह के साथ अपने संगठन को सुरक्षित रखें। हम तेजी से, सुरक्षित और कानूनी रूप से अनुपालन रिपोर्ट देने के लिए मानव संसाधन विभागों, खरीद टीमों और अनुपालन अधिकारियों के साथ साझेदारी करते हैं।",
    cta: "कॉर्पोरेट फ़नल एक्सेस करें",
    features: [
      "थोक कर्मचारी पृष्ठभूमि सत्यापन कार्यप्रवाह",
      "समर्पित कॉर्पोरेट ऑनबोर्डिंग और खाता प्रबंधक",
      "SLA समर्थन के साथ सख्त TAT समय सीमा",
      "सुरक्षित API एकीकरण क्षमताएं",
      "लचीले मासिक सत्यापन अनुबंध",
      "अनुपालन और नैतिकता लेखा परीक्षा"
    ]
  },
  TA: {
    tag: "மனிதவள குழுக்கள் மற்றும் நிறுவனங்களுக்கு",
    title: "நிறுவன அளவிலான பின்னணி சரிபார்ப்பு செயல்முறை",
    desc: "எங்கள் மொத்த சரிபார்ப்பு மற்றும் கார்ப்பரேட் நுண்ணறிவு பணிப்பாய்வுகளுடன் உங்கள் அமைப்பைப் பாதுகாக்கவும். வேகமான, பாதுகாப்பான மற்றும் சட்டப்பூர்வமாக இணக்கமான அறிக்கைகளை வழங்க மனிதவள துறைகள், கொள்முதல் குழுக்கள் மற்றும் இணக்க அதிகாரிகளுடன் நாங்கள் பணியாற்றுகிறோம்.",
    cta: "கார்ப்பரேட் செயல்முறையை அணுகவும்",
    features: [
      "மொத்த பணியாளர் பின்னணி சரிபார்ப்பு செயல்முறைகள்",
      "அர்ப்பணிக்கப்பட்ட நிறுவன உள்வாங்குதல் & கணக்கு மேலாளர்",
      "SLA ஆதரவுடன் கூடிய கடுமையான TAT காலக்கெடு",
      "பாதுகாப்பான API ஒருங்கிணைப்பு திறன்கள்",
      "நெகிழ்வான மாதாந்திர சரிபார்ப்பு ஒப்பந்தங்கள்",
      "இணக்கம் மற்றும் நெறிமுறைகள் தணிக்கை"
    ]
  }
};

const CorporateClientSection = () => {
  const { language } = useLanguage();
  const t = content[language] || content.EN;

  return (
    <section className="py-24 bg-subtle/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
              <ShieldAlert className="h-4 w-4" />
              {t.tag}
            </div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl text-foreground">
              {t.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t.desc}
            </p>
            <div className="mt-8">
              <Link
                to="/services/corporate-bgv"
                className="inline-flex items-center gap-2 bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                {t.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {t.features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-background border border-border p-5 shadow-sm hover:border-primary/50 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-bold text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateClientSection;
