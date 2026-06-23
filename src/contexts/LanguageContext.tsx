import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "EN" | "HI" | "TA";

interface Translations {
  // Navbar
  home: string;
  services: string;
  industries: string;
  caseStudies: string;
  howItWorks: string;
  knowledgeCenter: string;
  gallery: string;
  about: string;
  confidentialInquiry: string;
  emergency247: string;

  // Hero
  heroTag: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroDesc: string;
  heroCTA1: string;
  heroCTA2: string;
  badge1: string;
  badge2: string;
  badge3: string;
  stat1Label: string;
  stat1Value: string;
  stat2Label: string;
  stat2Value: string;
  trustPanIndia: string;
  trust24hr: string;
  trustEvidence: string;
  trustLegal: string;

  // Services Section
  servicesTag: string;
  servicesTitle: string;
  servicesDesc: string;
  servicesList: { title: string; desc: string; items: string[]; path: string }[];

  // Emergency Hotline
  hotlineTag: string;
  hotlineTitle: string;
  hotlineDesc: string;
  hotlineBtnCall: string;
  hotlineBtnInquiry: string;
  hotlineTypes: { title: string; detail: string }[];

  // Why Choose Us
  whyTag: string;
  whyTitle: string;
  whyReasons: { title: string; desc: string }[];

  // Corporate Client
  clientTag: string;
  clientTitle: string;
  clientDesc: string;

  // How It Works
  howTag: string;
  howTitle: string;
  howSteps: { title: string; desc: string }[];

  // Industries Served
  industriesTag: string;
  industriesTitle: string;
  industriesList: { name: string }[];

  // AI Technology
  aiTag: string;
  aiTitle: string;
  aiDesc: string;
  aiFeatures: { title: string; desc: string }[];

  // Sample Reports
  reportsTag: string;
  reportsTitle: string;
  reportsDesc: string;
  reportsList: { title: string; desc: string; file: string; btn: string }[];

  // Testimonials
  testimonialsTag: string;
  testimonialsTitle: string;
  testimonialsList: { quote: string; author: string; role: string }[];

  // Case Studies
  casesTag: string;
  casesTitle: string;
  casesList: { title: string; desc: string; challenge: string; resolution: string }[];

  // Contact / CTA
  ctaTitle: string;
  ctaDesc: string;
  ctaBtn: string;

  // Footer
  quickLinks: string;
  contactUs: string;
  trustCompliance: string;
  downloadProfile: string;
  experience: string;
  yearsExp: string;

  // Knowledge Center
  kcTag: string;
  kcTitle: string;
  kcDesc: string;

  // Common
  readMore: string;
  learnMore: string;
  getStarted: string;
}

const translations: Record<Language, Translations> = {
  EN: {
    home: "Home",
    services: "Services",
    industries: "Industries",
    caseStudies: "Case Studies",
    howItWorks: "How It Works",
    knowledgeCenter: "Knowledge Center",
    gallery: "Gallery",
    about: "About",
    confidentialInquiry: "Confidential Inquiry",
    emergency247: "24/7 Emergency",
    heroTag: "Corporate Security & Intelligence",
    heroTitle: "Confidential Investigation &",
    heroTitleHighlight: "Verification Services",
    heroDesc: "Professional investigations backed by over 30 years of experience. Protecting organizations and individuals with discreet, evidence-based intelligence operations across India.",
    heroCTA1: "Request Discreet Verification",
    heroCTA2: "Speak Confidentially With an Investigator",
    badge1: "Corporate NDA Supported",
    badge2: "GST Registered",
    badge3: "MSME Certified",
    stat1Value: "10,000+",
    stat1Label: "Verifications Completed",
    stat2Value: "30+ Years",
    stat2Label: "Industry Experience",
    trustPanIndia: "PAN India Operations",
    trust24hr: "24-Hour Response",
    trustEvidence: "Evidence-Based",
    trustLegal: "Legally Compliant",
    
    servicesTag: "Our Services",
    servicesTitle: "Comprehensive Investigation Services",
    servicesDesc: "From corporate background verification to matrimonial investigations, we provide discreet, professional intelligence services.",
    servicesList: [
      {
        title: "Corporate Investigations",
        desc: "Uncover internal fraud, employee misconduct, and vendor irregularities with discreet, legally compliant corporate investigations.",
        items: ["Employee misconduct check", "Internal fraud trace", "Brand abuse check", "Vendor verification"],
        path: "/services/corporate-bgv"
      },
      {
        title: "Insurance Fraud",
        desc: "Death claim investigation, medical claim verification, accident verification, and field investigation.",
        items: ["Death claims", "Medical claims", "Accident checks", "Hospital records"],
        path: "/services/insurance-fraud"
      },
      {
        title: "Due Diligence",
        desc: "Comprehensive financial, legal, and operational background checks for mergers, acquisitions, and partnerships.",
        items: ["Company checks", "Director checks", "Site verification", "Adverse media"],
        path: "/services/due-diligence"
      },
      {
        title: "Matrimonial Verification",
        desc: "Discreet pre-matrimonial and post-matrimonial investigations. 100% confidentiality guaranteed.",
        items: ["Character verification", "Employment checks", "Family background", "Lifestyle checks"],
        path: "/services/matrimonial"
      },
      {
        title: "NRI Verification",
        desc: "Family verification, marriage verification, property verification, and tenant screening for NRIs.",
        items: ["Family verification", "Property verification", "Marriage alliance checks", "Tenant verification"],
        path: "/services/nri-verification"
      }
    ],

    hotlineTag: "Emergency Hotline",
    hotlineTitle: "Rapid Case Response",
    hotlineDesc: "For time-sensitive fraud, missing person, and urgent claim matters, contact the hotline and submit a secure inquiry so the case can be triaged immediately.",
    hotlineBtnCall: "Call +91 99999 99999",
    hotlineBtnInquiry: "Submit Secure Details",
    hotlineTypes: [
      { title: "Fraud Cases", detail: "Internal fraud, vendor deception, forged documents, or suspicious financial claims.", },
      { title: "Missing Persons", detail: "Urgent tracing requests requiring fast field coordination and discreet local enquiries." },
      { title: "Urgent Claims", detail: "Death, accident, hospitalization, or high-value claim verification requiring quick action." }
    ],

    whyTag: "Trust & Authority",
    whyTitle: "Why Top Enterprises Choose GDSS",
    whyReasons: [
      { title: "100% Confidential Handling", desc: "Absolute secrecy maintained in every intelligence operation and verification process." },
      { title: "Legally Compliant", desc: "All evidence gathered is legally admissible and acquired within statutory bounds." },
      { title: "PAN India Network", desc: "Vast network of intelligence operatives covering all major cities and remote locations." },
      { title: "Evidence-Based Reports", desc: "Comprehensive, fact-checked dossiers backed by irrefutable photo and video evidence." },
      { title: "Experienced Team", desc: "Ex-servicemen and senior corporate intelligence analysts leading field operations." },
      { title: "NDA Support", desc: "Enterprise-grade Non-Disclosure Agreements signed prior to any consultation." },
      { title: "Secure Portal", desc: "End-to-end encrypted delivery of final investigation reports and multimedia evidence." },
      { title: "Fast Turnaround", desc: "Rapid deployment of field teams for emergency cases and time-sensitive intelligence." }
    ],

    clientTag: "Corporate Trust",
    clientTitle: "Trusted by Leading Enterprises & Legal Advisors",
    clientDesc: "We partner with corporate compliance officers, HR heads, insurance underwriters, and legal counsel to mitigate risk and enforce compliance.",

    howTag: "Methodology",
    howTitle: "Our Operational Lifecycle",
    howSteps: [
      { title: "Intake & Consent", desc: "Scope alignment, lawful purpose definition, and strict consent acquisition from all parties." },
      { title: "Field Operation", desc: "Discreet deployment of local operatives to verify documents, addresses, and backgrounds." },
      { title: "Analysis & Verification", desc: "Secondary corroboration, database matching, and validation by senior investigators." },
      { title: "Secure Delivery", desc: "Compilation of admissible evidence and report delivery via encrypted channels." }
    ],

    industriesTag: "Sector Expertise",
    industriesTitle: "INDUSTRIES WE SERVE",
    industriesList: [
      { name: "IT & Tech" }, { name: "Manufacturing" }, { name: "BFSI" }, { name: "Insurance" }, { name: "Logistics" },
      { name: "Healthcare" }, { name: "Education" }, { name: "Startups" }, { name: "Legal Firms" }, { name: "Matrimonial" }
    ],

    aiTag: "Advanced Intelligence",
    aiTitle: "AI-Assisted Operations with Human Validation",
    aiDesc: "We combine machine learning document analysis with experienced field detectives to deliver verified evidence fast.",
    aiFeatures: [
      { title: "Automated Document Audits", desc: "AI models cross-examine academic degrees and financial sheets for digital anomalies." },
      { title: "OSINT Scraping", desc: "Extracting open-source intelligence and public database indices dynamically." },
      { title: "Human Investigation", desc: "Field-level verification of anomalies by trained specialists for absolute reliability." }
    ],

    reportsTag: "Evidence Admissibility",
    reportsTitle: "Sample Investigation Reports",
    reportsDesc: "Review redacted sample dossiers illustrating our evidentiary standards, documentation detail, and reporting structure.",
    reportsList: [
      { title: "Redacted BGV Dossier", desc: "Sample report demonstrating address checks, academic registers, and previous HR calls.", file: "/sample-bgv.pdf", btn: "View Sample BGV" },
      { title: "Insurance Claim Inquiry", desc: "Investigative report outlining hospital log audits, local interviews, and scene reviews.", file: "/sample-insurance.pdf", btn: "View Sample Claim" },
      { title: "Matrimonial Summary", desc: "Discreet family validation outline illustrating marital status and financial checks.", file: "/sample-matrimonial.pdf", btn: "View Sample Profile" }
    ],

    testimonialsTag: "Client Feedback",
    testimonialsTitle: "What Our Clients Say",
    testimonialsList: [
      { quote: "GDSS provided crucial background verification for our senior management hires. Their discreet approach and thorough reporting saved us from potential governance issues.", author: "Rajesh Mehta", role: "HR Director, Tech Solutions" },
      { quote: "Their insurance fraud team is highly responsive. The field evidence collected at short notice was critical in resolving a complex claim conflict.", author: "Sunita Rao", role: "Claims Head, General Insurance Corp" },
      { quote: "Absolute professionalism. They handled a sensitive family verification with complete discretion, providing clear facts that helped us make the right decision.", author: "A. K. Sharma", role: "Private Client" }
    ],

    casesTag: "Proven Results",
    casesTitle: "Recent Case Studies",
    casesList: [
      { title: "Executive Resume Forgery Detection", desc: "A multinational technology client required verification for a VP nominee.", challenge: "Candidate presented certificates from a defunct university and a fake reference network.", resolution: "Direct registrar checks and corporate log reviews flagged the fraud, protecting the client from major leadership risk." },
      { title: "High-Value Accident Claim Triage", desc: "An insurer requested spot verification for a high-value health claim.", challenge: "Claimant declared severe injury in a remote location; hospital documents showed anomalies.", resolution: "Operatives visited the site, analyzed hospital log records, and found pre-existing treatment dates, resolving claims leakage." },
      { title: "NRI Property Encroachment Check", desc: "An overseas landlord suspected illegal subletting and construction on their plot.", challenge: "No local family members could verify the ground conditions safely.", resolution: "Discreet site checks, interviews, and land register audits confirmed subletting, assisting the client in legal recovery." }
    ],

    ctaTitle: "Ready to Start Your Investigation?",
    ctaDesc: "Contact us today for a confidential consultation with our senior investigators.",
    ctaBtn: "Begin Confidential Inquiry",
    quickLinks: "Quick Links",
    contactUs: "Contact",
    trustCompliance: "Trust & Compliance",
    downloadProfile: "Download Corporate Profile",
    experience: "Experience",
    yearsExp: "30+ Years",
    kcTag: "Knowledge Center",
    kcTitle: "Investigation & Verification Guides",
    kcDesc: "Practical guides for corporate risk teams, families, NRIs, insurers, and individuals planning confidential verification.",
    readMore: "Read more",
    learnMore: "Learn More",
    getStarted: "Get Started",
  },
  HI: {
    home: "होम",
    services: "सेवाएं",
    industries: "उद्योग",
    caseStudies: "केस स्टडी",
    howItWorks: "यह कैसे काम करता है",
    knowledgeCenter: "ज्ञान केंद्र",
    gallery: "गैलरी",
    about: "हमारे बारे में",
    confidentialInquiry: "गोपनीय जांच",
    emergency247: "24/7 आपातकाल",
    heroTag: "कॉर्पोरेट सुरक्षा और खुफिया",
    heroTitle: "गोपनीय जांच और",
    heroTitleHighlight: "सत्यापन सेवाएं",
    heroDesc: "30 वर्षों से अधिक के अनुभव द्वारा समर्थित पेशेवर जांच। पूरे भारत में विवेकपूर्ण, साक्ष्य-आधारित खुफिया संचालन के साथ संगठनों और व्यक्तियों की रक्षा।",
    heroCTA1: "गोपनीय सत्यापन अनुरोध करें",
    heroCTA2: "जासूस से गोपनीय बात करें",
    badge1: "कॉर्पोरेट NDA समर्थित",
    badge2: "GST पंजीकृत",
    badge3: "MSME प्रमाणित",
    stat1Value: "10,000+",
    stat1Label: "सत्यापन पूर्ण",
    stat2Value: "30+ वर्ष",
    stat2Label: "उद्योग अनुभव",
    trustPanIndia: "पैन इंडिया संचालन",
    trust24hr: "24-घंटे प्रतिक्रिया",
    trustEvidence: "साक्ष्य-आधारित",
    trustLegal: "कानूनी रूप से अनुपालन",
    
    servicesTag: "हमारी सेवाएं",
    servicesTitle: "व्यापक जांच सेवाएं",
    servicesDesc: "कॉर्पोरेट पृष्ठभूमि सत्यापन से लेकर वैवाहिक जांच तक, हम विवेकपूर्ण, पेशेवर खुफिया सेवाएं प्रदान करते हैं।",
    servicesList: [
      {
        title: "कॉर्पोरेट जांच",
        desc: "गोपनीय, कानूनी रूप से अनुपालन कॉर्पोरेट जांच के साथ आंतरिक धोखाधड़ी, कर्मचारी कदाचार और विक्रेता अनियमितताओं को उजागर करें।",
        items: ["कर्मचारी कदाचार जांच", "आंतरिक धोखाधड़ी ट्रैक", "ब्रांड दुरुपयोग जांच", "विक्रेता सत्यापन"],
        path: "/services/corporate-bgv"
      },
      {
        title: "बीमा धोखाधड़ी",
        desc: "मृत्यु दावा जांच, चिकित्सा दावा सत्यापन, दुर्घटना सत्यापन और क्षेत्र जांच।",
        items: ["मृत्यु के दावे", "चिकित्सा दावे", "दुर्घटना की जाँच", "अस्पताल के रिकॉर्ड"],
        path: "/services/insurance-fraud"
      },
      {
        title: "यथोचित परिश्रम",
        desc: "विलय, अधिग्रहण और भागीदारी के लिए व्यापक वित्तीय, कानूनी और परिचालन पृष्ठभूमि की जांच।",
        items: ["कंपनी की जाँच", "निदेशक की जाँच", "साइट सत्यापन", "प्रतिकूल मीडिया"],
        path: "/services/due-diligence"
      },
      {
        title: "वैवाहिक सत्यापन",
        desc: "विवेकपूर्ण विवाह पूर्व और विवाह पश्चात जांच। 100% गोपनीयता की गारंटी।",
        items: ["चरित्र सत्यापन", "रोजगार की जाँच", "पारिवारिक पृष्ठभूमि", "जीवनशैली की जाँच"],
        path: "/services/matrimonial"
      },
      {
        title: "एनआरआई सत्यापन",
        desc: "एनआरआई के लिए पारिवारिक सत्यापन, विवाह सत्यापन, संपत्ति सत्यापन और किरायेदार स्क्रीनिंग।",
        items: ["पारिवारिक सत्यापन", "संपत्ति सत्यापन", "विवाह गठबंधन की जाँच", "किरायेदार सत्यापन"],
        path: "/services/nri-verification"
      }
    ],

    hotlineTag: "आपातकालीन हॉटलाइन",
    hotlineTitle: "त्वरित मामला प्रतिक्रिया",
    hotlineDesc: "समय-संवेदनशील धोखाधड़ी, लापता व्यक्ति और तत्काल दावा मामलों के लिए, हॉटलाइन से संपर्क करें और एक सुरक्षित पूछताछ सबमिट करें ताकि मामले का तुरंत समाधान किया जा सके।",
    hotlineBtnCall: "कॉल करें +91 99999 99999",
    hotlineBtnInquiry: "सुरक्षित विवरण सबमिट करें",
    hotlineTypes: [
      { title: "धोखाधड़ी के मामले", detail: "आंतरिक धोखाधड़ी, विक्रेता धोखाधड़ी, जाली दस्तावेज, या संदिग्ध वित्तीय दावे।" },
      { title: "लापता व्यक्ति", detail: "तेजी से क्षेत्र समन्वय और विवेकपूर्ण स्थानीय पूछताछ की आवश्यकता वाले लापता व्यक्तियों की खोज।" },
      { title: "तत्काल बीमा दावे", detail: "त्वरित कार्रवाई की आवश्यकता वाले मृत्यु, दुर्घटना, अस्पताल में भर्ती, या उच्च मूल्य के दावों का सत्यापन।" }
    ],

    whyTag: "विश्वास और अधिकार",
    whyTitle: "शीर्ष उद्यम GDSS को क्यों चुनते हैं",
    whyReasons: [
      { title: "100% गोपनीय संचालन", desc: "हर खुफिया ऑपरेशन और सत्यापन प्रक्रिया में पूर्ण गोपनीयता बनाए रखी जाती है।" },
      { title: "कानूनी रूप से अनुपालन", desc: "एकत्र किए गए सभी साक्ष्य कानूनी रूप से स्वीकार्य हैं और कानूनी सीमाओं के भीतर हासिल किए गए हैं।" },
      { title: "पैन इंडिया नेटवर्क", desc: "सभी प्रमुख शहरों और दूरदराज के स्थानों को कवर करने वाले खुफिया एजेंटों का विशाल नेटवर्क।" },
      { title: "साक्ष्य-आधारित रिपोर्ट", desc: "अकाट्य फोटो और वीडियो साक्ष्यों द्वारा समर्थित व्यापक, तथ्य-जांचे गए दस्तावेज।" },
      { title: "अनुभवी टीम", desc: "क्षेत्रीय संचालन का नेतृत्व करने वाले पूर्व सैनिक और वरिष्ठ कॉर्पोरेट खुफिया विश्लेषक।" },
      { title: "NDA समर्थन", desc: "किसी भी परामर्श से पहले हस्ताक्षरित एंटरप्राइज-ग्रेड गैर-प्रकटीकरण समझौते।" },
      { title: "सुरक्षित पोर्टल", desc: "अंतिम जांच रिपोर्ट और मल्टीमीडिया साक्ष्य की एंड-तू-एंड एन्क्रिप्टेड डिलीवरी।" },
      { title: "तेजी से काम", desc: "आपातकालीन मामलों और समय-संवेदनशील खुफिया जानकारी के लिए फील्ड टीमों की त्वरित तैनाती।" }
    ],

    clientTag: "कॉर्पोरेट विश्वास",
    clientTitle: "अग्रणी उद्यमों और कानूनी सलाहकारों द्वारा विश्वसनीय",
    clientDesc: "हम जोखिम को कम करने और अनुपालन लागू करने के लिए कॉर्पोरेट अनुपालन अधिकारियों, मानव संसाधन प्रमुखों, बीमा अंडरराइटर्स और कानूनी सलाहकारों के साथ साझेदारी करते हैं।",

    howTag: "कार्यप्रणाली",
    howTitle: "हमारा परिचालन जीवनचक्र",
    howSteps: [
      { title: "परामर्श और सहमति", desc: "दायरा संरेखण, वैध उद्देश्य परिभाषा, और सभी पक्षों से सख्त सहमति प्राप्त करना।" },
      { title: "फील्ड ऑपरेशन", desc: "दस्तावेजों, पतों और पृष्ठभूमि को सत्यापित करने के लिए स्थानीय एजेंटों की विवेकपूर्ण तैनाती।" },
      { title: "विश्लेषण और सत्यापन", desc: "वरिष्ठ जांचकर्ताओं द्वारा माध्यमिक पुष्टि, डेटाबेस मिलान और सत्यापन।" },
      { title: "सुरक्षित वितरण", desc: "स्वीकार्य साक्ष्यों का संकलन और एन्क्रिप्टेड चैनलों के माध्यम से रिपोर्ट का वितरण।" }
    ],

    industriesTag: "क्षेत्र विशेषज्ञता",
    industriesTitle: "सेवाएं जो हम प्रदान करते हैं",
    industriesList: [
      { name: "आईटी और टेक" }, { name: "विनिर्माण" }, { name: "बीएफएसआई" }, { name: "बीमा" }, { name: "रसद" },
      { name: "स्वास्थ्य सेवा" }, { name: "शिक्षा" }, { name: "स्टार्टअप" }, { name: "कानूनी फर्म" }, { name: "वैवाहिक" }
    ],

    aiTag: "उन्नत खुफिया",
    aiTitle: "मानव सत्यापन के साथ एआई-सहायता प्राप्त संचालन",
    aiDesc: "हम सत्यापित साक्ष्य तेजी से वितरित करने के लिए अनुभवी फील्ड जासूसों के साथ मशीन लर्निंग दस्तावेज़ विश्लेषण को जोड़ते हैं।",
    aiFeatures: [
      { title: "स्वचालित दस्तावेज़ ऑडिट", desc: "एआई मॉडल डिजिटल विसंगतियों के लिए शैक्षणिक डिग्रियों और वित्तीय पत्रों की जांच करते हैं।" },
      { title: "OSINT स्क्रैपिंग", desc: "ओपन-सोर्स इंटेलिजेंस और सार्वजनिक डेटाबेस इंडेक्स को गतिशील रूप से निकालना।" },
      { title: "मानवीय जांच", desc: "पूर्ण विश्वसनीयता के लिए प्रशिक्षित विशेषज्ञों द्वारा विसंगतियों का फील्ड-स्तरीय सत्यापन।" }
    ],

    reportsTag: "साक्ष्य स्वीकार्यता",
    reportsTitle: "नमूना जांच रिपोर्ट",
    reportsDesc: "हमारी साक्ष्य संबंधी मानकों, दस्तावेज़ीकरण विवरण और रिपोर्टिंग संरचना को दर्शाने वाले नमूना दस्तावेजों की समीक्षा करें।",
    reportsList: [
      { title: "BGV डॉसियर नमूना", desc: "पता सत्यापन, शैक्षणिक रिकॉर्ड और पिछली मानव संसाधन कॉल्स को दर्शाने वाली रिपोर्ट।", file: "/sample-bgv.pdf", btn: "नमूना BGV देखें" },
      { title: "बीमा दावा जांच", desc: "अस्पताल लॉग ऑडिट, स्थानीय साक्षात्कार और दृश्य समीक्षाओं को रेखांकित करने वाली रिपोर्ट।", file: "/sample-insurance.pdf", btn: "नमूना दावा देखें" },
      { title: "वैवाहिक सारांश", desc: "वैवाहिक स्थिति और वित्तीय जांच को दर्शाने वाली गोपनीय पारिवारिक सत्यापन रूपरेखा।", file: "/sample-matrimonial.pdf", btn: "नमूना प्रोफाइल देखें" }
    ],

    testimonialsTag: "ग्राहक प्रतिक्रिया",
    testimonialsTitle: "हमारे ग्राहक क्या कहते हैं",
    testimonialsList: [
      { quote: "GDSS ने हमारे वरिष्ठ प्रबंधन पदों के लिए महत्वपूर्ण पृष्ठभूमि सत्यापन प्रदान किया। उनके विवेकपूर्ण दृष्टिकोण और विस्तृत रिपोर्टिंग ने हमें संभावित मुद्दों से बचाया।", author: "राजेश मेहता", role: "एचआर निदेशक, टेक सॉल्यूशंस" },
      { quote: "उनकी बीमा धोखाधड़ी टीम अत्यधिक संवेदनशील है। कम समय में एकत्र किए गए फील्ड साक्ष्य एक जटिल दावे के समाधान में महत्वपूर्ण थे।", author: "सुनीता राव", role: "दावा प्रमुख, जनरल इंश्योरेंस कॉर्प" },
      { quote: "पूर्ण व्यावसायिकता। उन्होंने पूर्ण गोपनीयता के साथ एक संवेदनशील पारिवारिक सत्यापन को संभाला, स्पष्ट तथ्य प्रदान किए जिसने हमें सही निर्णय लेने में मदद की।", author: "ए. के. शर्मा", role: "निजी ग्राहक" }
    ],

    casesTag: "सिद्ध परिणाम",
    casesTitle: "हालिया केस स्टडीज",
    casesList: [
      { title: "कार्यकारी बायोडाटा जालसाजी का पता लगाना", desc: "एक बहुराष्ट्रीय प्रौद्योगिकी ग्राहक को उपाध्यक्ष पद के उम्मीदवार के सत्यापन की आवश्यकता थी।", challenge: "उम्मीदवार ने एक निष्क्रिय विश्वविद्यालय के प्रमाण पत्र और एक फर्जी संदर्भ नेटवर्क प्रस्तुत किया था।", resolution: "प्रत्यक्ष रजिस्ट्रार जांच और कॉर्पोरेट लॉग समीक्षाओं ने धोखाधड़ी को चिह्नित किया, जिससे ग्राहक बड़े जोखिम से बच गया।" },
      { title: "उच्च मूल्य दुर्घटना दावा सत्यापन", desc: "एक बीमाकर्ता ने एक उच्च मूल्य वाले स्वास्थ्य दावे के लिए मौके पर सत्यापन का अनुरोध किया।", challenge: "दावेदार ने दूरस्थ स्थान पर गंभीर चोट की घोषणा की; अस्पताल के दस्तावेजों में विसंगतियां थीं।", resolution: "एजेंटों ने अस्पताल के लॉग रिकॉर्ड का विश्लेषण किया और पुरानी उपचार तिथियां पाईं, जिससे धोखाधड़ी का दावा खारिज हो गया।" },
      { title: "एनआरआई संपत्ति अतिक्रमण जांच", desc: "एक विदेशी मकान मालिक को अपने भूखंड पर अवैध रूप से किराए पर देने और निर्माण का संदेह था।", challenge: "कोई भी स्थानीय परिवार का सदस्य सुरक्षित रूप से जमीनी स्थिति का सत्यापन नहीं कर सकता था।", resolution: "विवेकपूर्ण साइट जांच और भूमि रजिस्टर ऑडिट ने अतिक्रमण की पुष्टि की, जिससे ग्राहक को कानूनी रिकवरी में मदद मिली।" }
    ],

    ctaTitle: "अपनी जांच शुरू करने के लिए तैयार हैं?",
    ctaDesc: "हमारे वरिष्ठ जासूसों के साथ गोपनीय परामर्श के लिए आज ही संपर्क करें।",
    ctaBtn: "गोपनीय जांच शुरू करें",
    quickLinks: "त्वरित लिंक",
    contactUs: "संपर्क करें",
    trustCompliance: "विश्वास और अनुपालन",
    downloadProfile: "कॉर्पोरेट प्रोफाइल डाउनलोड करें",
    experience: "अनुभव",
    yearsExp: "30+ वर्ष",
    kcTag: "ज्ञान केंद्र",
    kcTitle: "जांच और सत्यापन गाइड",
    kcDesc: "कॉर्पोरेट जोखिम टीमों, परिवारों, NRI, बीमाकर्ताओं और गोपनीय सत्यापन की योजना बना रहे व्यक्तियों के लिए व्यावहारिक मार्गदर्शिकाएं।",
    readMore: "और पढ़ें",
    learnMore: "अधिक जानें",
    getStarted: "शुरू करें",
  },
  TA: {
    home: "முகப்பு",
    services: "சேவைகள்",
    industries: "தொழில்துறைகள்",
    caseStudies: "வழக்கு ஆய்வுகள்",
    howItWorks: "இது எவ்வாறு செயல்படுகிறது",
    knowledgeCenter: "அறிவு மையம்",
    gallery: "கேலரி",
    about: "எங்களைப் பற்றி",
    confidentialInquiry: "இரகசிய விசாரணை",
    emergency247: "24/7 அவசரநிலை",
    heroTag: "கார்ப்பரேட் பாதுகாப்பு மற்றும் நுண்ணறிவு",
    heroTitle: "இரகசிய விசாரணை மற்றும்",
    heroTitleHighlight: "சரிபார்ப்பு சேவைகள்",
    heroDesc: "30 ஆண்டுகளுக்கும் மேலான அனுபவத்தால் ஆதரிக்கப்படும் தொழில்முறை விசாரணைகள். இந்தியா முழுவதும் விவேகமான, ஆதாரம் சார்ந்த நுண்ணறிவு நடவடிக்கைகளுடன் நிறுவனங்கள் மற்றும் தனிநபர்களை பாதுகாக்கிறோம்.",
    heroCTA1: "இரகசிய சரிபார்ப்பு கோரிக்கை",
    heroCTA2: "புலனாய்வாளரிடம் இரகசியமாக பேசுங்கள்",
    badge1: "கார்ப்பரேட் NDA ஆதரவு",
    badge2: "GST பதிவு செய்யப்பட்டது",
    badge3: "MSME சான்றிதழ்",
    stat1Value: "10,000+",
    stat1Label: "சரிபார்ப்புகள் முடிந்தன",
    stat2Value: "30+ ஆண்டுகள்",
    stat2Label: "தொழில் அனுபவம்",
    trustPanIndia: "பான் இந்தியா செயல்பாடுகள்",
    trust24hr: "24 மணிநேர பதில்",
    trustEvidence: "ஆதாரம் சார்ந்தது",
    trustLegal: "சட்டபூர்வமாக இணங்கியது",
    
    servicesTag: "எங்கள் சேவைகள்",
    servicesTitle: "விரிவான விசாரணை சேவைகள்",
    servicesDesc: "கார்ப்பரேட் பின்னணி சரிபார்ப்பிலிருந்து திருமண விசாரணைகள் வரை, விவேகமான, தொழில்முறை நுண்ணறிவு சேவைகளை வழங்குகிறோம்.",
    servicesList: [
      {
        title: "கார்ப்பரேட் விசாரணைகள்",
        desc: "விவேகமான, சட்டப்பூர்வமாக இணக்கமான கார்ப்பரேட் விசாரணைகள் மூலம் உள் மோசடி, ஊழியர்களின் தவறான நடத்தை மற்றும் விற்பனையாளர் முறைகேடுகளைக் கண்டறியவும்.",
        items: ["ஊழியர் தவறான நடத்தை சரிபார்ப்பு", "உள் மோசடி கண்டறிதல்", "பிராண்ட் துஷ்பிரயோக சரிபார்ப்பு", "விற்பனையாளர் சரிபார்ப்பு"],
        path: "/services/corporate-bgv"
      },
      {
        title: "காப்பீட்டு மோசடி",
        desc: "மரணம், விபத்து, மருத்துவமனையில் அனுமதி அல்லது அதிக மதிப்புள்ள உரிமைகோரல்களின் சரிபார்ப்பு.",
        items: ["மரணம் கோரல்", "மருத்துவ கோரல்", "விபத்து சரிபார்ப்பு", "மருத்துவமனை பதிவுகள்"],
        path: "/services/insurance-fraud"
      },
      {
        title: "உரிய விடாமுயற்சி",
        desc: "ஒன்றிணைப்பு, கையகப்படுத்தல் மற்றும் கூட்டாண்மைக்கான விரிவான நிதி, சட்ட மற்றும் செயல்பாட்டு பின்னணி சரிபார்ப்பு.",
        items: ["நிறுவன சரிபார்ப்பு", "இயக்குனர் சரிபார்ப்பு", "தள சரிபார்ப்பு", "ஊடக தணிக்கை"],
        path: "/services/due-diligence"
      },
      {
        title: "திருமண சரிபார்ப்பு",
        desc: "விவேகமான திருமணத்திற்கு முந்தைய மற்றும் பிந்தைய விசாரணை. 100% ரகசியம் உத்தரவாதம்.",
        items: ["நடத்தை சரிபார்ப்பு", "வேலை சரிபார்ப்பு", "குடும்ப பின்னணி", "வாழ்க்கை முறை சரிபார்ப்பு"],
        path: "/services/matrimonial"
      },
      {
        title: "என்ஆர்ஐ சரிபார்ப்பு",
        desc: "குடும்ப சரிபார்ப்பு, திருமண சரிபார்ப்பு, சொத்து சரிபார்ப்பு மற்றும் வாடகைதாரர் ஸ்கிரீனிங்.",
        items: ["குடும்ப சரிபார்ப்பு", "சொத்து சரிபார்ப்பு", "திருமண கூட்டணி சரிபார்ப்பு", "வாடகைதாரர் சரிபார்ப்பு"],
        path: "/services/nri-verification"
      }
    ],

    hotlineTag: "அவசர உதவி எண்",
    hotlineTitle: "விரைவான வழக்கு பதில்",
    hotlineDesc: "மோசடி, காணாமல் போனவர்கள் மற்றும் அவசர உரிமைகோரல் போன்ற அவசர விஷயங்களுக்கு, உதவி எண்ணைத் தொடர்புகொண்டு பாதுகாப்பான விசாரணையைச் சமர்ப்பிக்கவும், இதனால் வழக்கை உடனடியாக தீர்க்க முடியும்.",
    hotlineBtnCall: "அழைக்கவும் +91 99999 99999",
    hotlineBtnInquiry: "பாதுகாப்பான விவரங்களைச் சமர்ப்பிக்கவும்",
    hotlineTypes: [
      { title: "மோசடி வழக்குகள்", detail: "உள் மோசடி, விற்பனையாளர் ஏமாற்றுதல், போலியான ஆவணங்கள் அல்லது சந்தேகத்திற்குரிய நிதி உரிமைகோரல்கள்." },
      { title: "காணாமல் போனவர்கள்", detail: "விரைவான கள ஒருங்கிணைப்பு மற்றும் விவேகமான உள்ளூர் விசாரணைகள் தேவைப்படும் அவசர தேடல் கோரிக்கைகள்." },
      { title: "அவசர காப்பீட்டு உரிமைகோரல்கள்", detail: "விரைவான நடவடிக்கை தேவைப்படும் மரணம், விபத்து, மருத்துவமனையில் அனுமதி அல்லது அதிக மதிப்புள்ள உரிமைகோரல்களின் சரிபார்ப்பு." }
    ],

    whyTag: "நம்பிக்கை & அதிகாரம்",
    whyTitle: "முன்னணி நிறுவனங்கள் ஏன் GDSS ஐ தேர்வு செய்கின்றன",
    whyReasons: [
      { title: "100% இரகசிய கையாளுதல்", desc: "ஒவ்வொரு நுண்ணறிவு நடவடிக்கையிலும் சரிபார்ப்பு செயல்முறையிலும் முழுமையான ரகசியம் பராமரிக்கப்படுகிறது." },
      { title: "சட்டபூர்வமாக इணங்கியது", desc: "சேகரிக்கப்பட்ட அனைத்து ஆதாரங்களும் சட்டப்பூர்வமாக ஏற்றுக்கொள்ளக்கூடியவை மற்றும் சட்ட வரம்புகளுக்குள் பெறப்பட்டவை." },
      { title: "பான் இந்தியா நெட்வொர்க்", desc: "அனைத்து முக்கிய நகரங்களையும் தொலைதூர இடங்களையும் உள்ளடக்கிய புலனாய்வாளர்களின் பரந்த நெட்வொர்க்." },
      { title: "ஆதாரம் சார்ந்த அறிக்கைகள்", desc: "மறுக்க முடியாத புகைப்படம் மற்றும் வீடியோ ஆதாரங்களால் ஆதரிக்கப்படும் விரிவான, உண்மை சரிபார்க்கப்பட்ட ஆவணங்கள்." },
      { title: "அனுபவம் வாய்ந்த குழு", desc: "கள நடவடிக்கைகளை வழிநடத்தும் முன்னாள் ராணுவத்தினர் மற்றும் மூத்த கார்ப்பரேட் புலனாய்வு ஆய்வாளர்கள்." },
      { title: "NDA ஆதரவு", desc: "ஆலோசனைக்கு முன் கையெழுத்திடப்படும் நிறுவன அளவிலான ரகசிய காப்பு ஒப்பந்தங்கள்." },
      { title: "பாதுகாப்பான போர்ட்டல்", desc: "இறுதி விசாரணை அறிக்கைகள் மற்றும் மல்டிமீடியா ஆதாரங்களின் பாதுகாப்பான குறியாக்கப்பட்ட விநியோகம்." },
      { title: "விரைவான தீர்வு", desc: "அவசர வழக்குகள் மற்றும் நேர உணர்திறன் கொண்ட நுண்ணறிவுகளுக்கு களக் குழுக்களின் விரைவான வரிசைப்படுத்தல்." }
    ],

    clientTag: "கார்ப்பரேட் நம்பிக்கை",
    clientTitle: "முன்னணி நிறுவனங்கள் மற்றும் சட்ட ஆலோசகர்களால் நம்பப்படுகிறது",
    clientDesc: "ஆபத்தைக் குறைப்பதற்கும் இணக்கத்தை அமல்படுத்துவதற்கும் கார்ப்பரேட் இணக்க அதிகாரிகள், மனிதவளத் தலைவர்கள், காப்பீட்டு வழங்குநர்கள் மற்றும் சட்ட ஆலோசகர்களுடன் நாங்கள் பணியாற்றுகிறோம்.",

    howTag: "செயல்முறை",
    howTitle: "எங்கள் செயல்பாட்டு சுழற்சி",
    howSteps: [
      { title: "ஆலோசனையும் அனுமதியும்", desc: "நோக்கங்களை சீரமைத்தல், சட்டபூர்வமான காரணங்களை வரையறுத்தல் மற்றும் அனைத்து தரப்பினரிடமிருந்தும் தெளிவான ஒப்புதலைப் பெறுதல்." },
      { title: "கள நடவடிக்கை", desc: "ஆவணங்கள், முகவரிகள் மற்றும் பின்னணிகளை சரிபார்க்க உள்ளூர் முகவர்களின் விவேகமான வரிசைப்படுத்தல்." },
      { title: "பகுப்பாய்வு மற்றும் சரிபார்ப்பு", desc: "மூத்த புலனாய்வாளர்களால் கூடுதல் சரிபார்ப்பு, தரவுத்தள ஒப்பீடு மற்றும் மதிப்பீடு." },
      { title: "பாதுகாப்பான விநியோகம்", desc: "ஏற்றுக்கொள்ளக்கூடிய ஆதாரங்களைத் தொகுத்தல் மற்றும் பாதுகாப்பான குறியாக்கப்பட்ட சேனல்கள் மூலம் அறிக்கையை அனுப்புதல்." }
    ],

    industriesTag: "தொழில்நுட்ப நிபுணத்துவம்",
    industriesTitle: "நாங்கள் சேவை செய்யும் தொழில்கள்",
    industriesList: [
      { name: "ஐடி & டெக்" }, { name: "உற்பத்தி" }, { name: "பிஎஃப்எஸ்இ" }, { name: "காப்பீடு" }, { name: "தளவாடங்கள்" },
      { name: "சுகாதாரம்" }, { name: "கல்வி" }, { name: "ஸ்டார்ட்அப்கள்" }, { name: "சட்ட நிறுவனங்கள்" }, { name: "திருமணம்" }
    ],

    aiTag: "மேம்பட்ட நுண்ணறிவு",
    aiTitle: "மனித சரிபார்ப்புடன் எம்பட்ட எஐ-உதவி செயல்பாடுகள்",
    aiDesc: "நாங்கள் துல்லியமான ஆதாரங்களை விரைவாக வழங்க எஐ ஆவண பகுப்பாய்வை अनुभव வாய்ந்த கள புலனாய்வாளர்களுடன் இணைக்கிறோம்.",
    aiFeatures: [
      { title: "தானியங்கி ஆவண தணிக்கை", desc: "எஐ மாதிரிகள் சான்றிதழ்கள் மற்றும் நிதி ஆவணங்களில் உள்ள டிஜிட்டல் முரண்பாடுகளை சரிபார்க்கின்றன." },
      { title: "OSINT தரவு சேகரிப்பு", desc: "பொது தரவுத்தள குறியீடுகளிலிருந்து திறந்த மூல நுண்ணறிவை மாறும் வகையில் பிரித்தெடுத்தல்." },
      { title: "மனித புலனாய்வு", desc: "முழுமையான நம்பகத்தன்மைக்காக பயிற்சி பெற்ற நிபுணர்களால் முரண்பாடுகளை கள அளவில் சரிபார்த்தல்." }
    ],

    reportsTag: "ஆதாரங்களின் ஏற்புத்தன்மை",
    reportsTitle: "மாதிரி விசாரணை அறிக்கைகள்",
    reportsDesc: "எங்கள் ஆதார தரநிலைகள், ஆவண விவரங்கள் மற்றும் அறிக்கையிடல் கட்டமைப்பை விளக்கும் மாதிரி கோப்புகளை மதிப்பாய்வு செய்யவும்.",
    reportsList: [
      { title: "BGV அறிக்கை மாதிரி", desc: "முகவரி சரிபார்ப்பு, கல்வி பதிவுகள் மற்றும் முந்தைய மனிதவள அழைப்புகளைக் காட்டும் அறிக்கை.", file: "/sample-bgv.pdf", btn: "மாதிரி BGV காண்க" },
      { title: "காப்பீட்டு உரிமைகோரல்", desc: "மருத்துவமனை பதிவுகள் தணிக்கை, உள்ளூர் நேர்காணல்கள் மற்றும் காட்சி மதிப்பாய்வுகளை விளக்கும் அறிக்கை.", file: "/sample-insurance.pdf", btn: "மாதிரி உரிமைகோரல் காண்க" },
      { title: "திருமண சரிபார்ப்பு", desc: "திருமண நிலை மற்றும் நிதிச் சரிபார்ப்புகளை விளக்கும் இரகசிய குடும்ப சரிபார்ப்பு அறிக்கை.", file: "/sample-matrimonial.pdf", btn: "மாதிரி சுயவிவரம் காண்க" }
    ],

    testimonialsTag: "வாடிக்கையாளர் கருத்து",
    testimonialsTitle: "எங்கள் வாடிக்கையாளர்கள் கூறுவது",
    testimonialsList: [
      { quote: "GDSS எங்கள் மூத்த மேலாண்மை பதவிகளுக்கான முக்கியமான பின்னணி சரிபார்ப்பை வழங்கியது. அவர்களின் விவேகமான அணுகுமுறை எங்களை சாத்தியமான சிக்கல்களில் இருந்து காப்பாற்றியது.", author: "ராஜேஷ் மேத்தா", role: "மனிதவள இயக்குனர், டெக் சொல்யூஷன்ஸ்" },
      { quote: "அவர்களின் காப்பீட்டு மோசடி தடுப்புக் குழு மிகவும் சுறுசுறுப்பானது. குறுகிய காலத்தில் சேகரிக்கப்பட்ட கள ஆதாரங்கள் ஒரு சிக்கலான உரிமைகோரலை தீர்ப்பதில் முக்கியமானவை.", author: "சுனிதா ராவ்", role: "உரிமைகோரல் தலைவர், பொது காப்பீட்டு நிறுவனம்" },
      { quote: "முழுமையான தொழில்முறை. அவர்கள் ஒரு உணர்திறன் வாய்ந்த குடும்ப சரிபார்ப்பை முழு இரகசியத்துடன் கையாண்டனர், இது எங்களை சரியான முடிவு எடுக்க உதவியது.", author: "ஏ. கே. சர்மா", role: "தனிப்பட்ட வாடிக்கையாளர்" }
    ],

    casesTag: "நிரூபிக்கப்பட்ட முடிவுகள்",
    casesTitle: "சமீபத்திய வழக்கு ஆய்வுகள்",
    casesList: [
      { title: "மூத்த அதிகாரி பயோடேட்டா மோசடி கண்டறிதல்", desc: "ஒரு பன்னாட்டு தொழில்நுட்ப நிறுவனத்திற்கு துணைத் தலைவர் பதவிக்கான வேட்பாளரை சரிபார்க்க வேண்டியிருந்தது.", challenge: "வேட்பாளர் ஒரு செயல்படாத பல்கலைக்கழக சான்றிதழ்கள் மற்றும் போலி குறிப்புகளை சமர்ப்பித்தார்.", resolution: "நேரடி பதிவாளர் சரிபார்ப்புகள் மற்றும் கார்ப்பரேட் தணிக்கைகள் மூலம் மோசடி கண்டறியப்பட்டு, பெரிய ஆபத்து தடுக்கப்பட்டது." },
      { title: "அதிமதிப்பு விபத்து உரிமைகோரல் சரிபார்ப்பு", desc: "ஒரு காப்பீட்டு நிறுவனம் ஒரு அதிக மதிப்புள்ள சுகாதார உரிமைகோரலை சரிபார்க்க கோரியது.", challenge: "வாடிக்கையாளர் தொலைதூர பகுதியில் கடுமையான காயம் ஏற்பட்டதாக கூறினார்; மருத்துவமனை ஆவணங்களில் முரண்பாடுகள் இருந்தன.", resolution: "எங்கள் முகவர்கள் மருத்துவமனை ஆவணங்களை ஆய்வு செய்து, பழைய சிகிச்சை தேதிகளைக் கண்டறிந்தனர், இதனால் போலி உரிமைகோரல் நிராகரிக்கப்பட்டது." },
      { title: "என்ஆர்ஐ சொத்து ஆக்கிரமிப்பு விசாரணை", desc: "ஒரு வெளிநாட்டு வீட்டு உரிமையாளர் தனது நிலத்தில் சட்டவிரோத ஆக்கிரமிப்பு மற்றும் கட்டுமானம் நடப்பதாக சந்தேகப்பட்டார்.", challenge: "உள்ளூர் குடும்ப உறுப்பினர்களால் கள நிலவரத்தை பாதுகாப்பாக சரிபார்க்க முடியவில்லை.", resolution: "விவேகமான தள சரிபார்ப்பு மற்றும் நில பதிவேடு தணிக்கை மூலம் ஆக்கிரமிப்பு உறுதிசெய்யப்பட்டு, வாடிக்கையாளருக்கு சட்டபூர்வமாக நிலம் மீட்கப்பட்டது." }
    ],

    ctaTitle: "உங்கள் விசாரணையை தொடங்க தயாரா?",
    ctaDesc: "எங்கள் மூத்த புலனாய்வாளர்களுடன் இரகசிய ஆலோசனைக்கு இன்றே தொடர்பு கொள்ளுங்கள்.",
    ctaBtn: "இரகசிய விசாரணை தொடங்குங்கள்",
    quickLinks: "விரைவு இணைப்புகள்",
    contactUs: "தொடர்பு",
    trustCompliance: "நம்பகம் மற்றும் இணக்கம்",
    downloadProfile: "கார்ப்பரேட் சுயவிவரம் பதிவிறக்கம்",
    experience: "அனுபவம்",
    yearsExp: "30+ ஆண்டுகள்",
    kcTag: "அறிவு மையம்",
    kcTitle: "விசாரணை மற்றும் சரிபார்ப்பு வழிகாட்டிகள்",
    kcDesc: "கார்ப்பரேட் ஆபத்து குழுக்கள், குடும்பங்கள், NRI, காப்பீட்டாளர்கள் மற்றும் இரகசிய சரிபார்ப்புத் திட்டமிடும் தனிநபர்களுக்கான நடைமுறை வழிகாட்டிகள்.",
    readMore: "மேலும் படிக்கவும்",
    learnMore: "மேலும் அறிய",
    getStarted: "தொடங்குங்கள்",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("EN");

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    
    // Programmatically trigger Google Translate
    const googLang = lang === "EN" ? "en" : lang === "HI" ? "hi" : "ta";
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = googLang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        // Always pass English to the DOM so Google Translate can translate uniformly
        t: translations["EN"],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
