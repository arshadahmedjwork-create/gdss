import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, FileWarning, ShieldCheck, Search, Database, Globe, Cpu, Users, Building2, Heart, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const articles = [
  {
    title: "How to Detect Fake Resumes Before Hiring",
    category: "Corporate BGV",
    icon: Briefcase,
    summary: "Practical warning signs across employment history, education claims, identity documents, reference patterns, and address verification.",
    points: [
      "Cross-check employment dates with documents and direct verification.",
      "Watch for repeated generic references or unverifiable company domains.",
      "Use address and identity verification before final offer release.",
      "AI-assisted document screening flags certificate anomalies and altered seals.",
    ],
    link: "/insights",
  },
  {
    title: "NRI Marriage Fraud Warning Signs",
    category: "Matrimonial Verification",
    icon: Heart,
    summary: "A family-focused guide to spotting inconsistent overseas claims, hidden relationships, employment misrepresentation, and property disputes.",
    points: [
      "Verify India-based family, property, and local reputation discreetly.",
      "Check claimed overseas employment and immigration narratives for gaps.",
      "Avoid sharing money or documents before independent verification.",
      "Social media intelligence reveals lifestyle inconsistencies with claimed status.",
    ],
    link: "/insights",
  },
  {
    title: "Corporate Fraud Prevention Checklist",
    category: "Risk Advisory",
    icon: Building2,
    summary: "Controls that reduce vendor fraud, employee misconduct, ghost employment, false invoices, and internal collusion.",
    points: [
      "Separate vendor onboarding, payment approval, and periodic audit roles.",
      "Run surprise field verification for high-risk vendors and locations.",
      "Document incident response before evidence disappears.",
      "Database-assisted verification catches blacklisted entities in real time.",
    ],
    link: "/insights",
  },
  {
    title: "AI-Assisted Document Screening",
    category: "Technology",
    icon: Cpu,
    summary: "How AI responsibly transforms document verification, fraud detection, and background screening in modern investigations.",
    points: [
      "ML models detect certificate forgeries — altered fonts, seals, and metadata.",
      "Payslip and bank statement analysis identifies fabricated income claims.",
      "AI flags anomalies for human investigator review — not for automated decisions.",
      "Social media intelligence complements document screening with behavioural context.",
    ],
    link: "/insights",
  },
  {
    title: "Insurance Fraud: Red Flags Every Claims Team Must Know",
    category: "Insurance",
    icon: ShieldCheck,
    summary: "Digital footprint analysis, geo-location verification, and field investigation techniques that expose staged claims and fraudulent submissions.",
    points: [
      "Social media intelligence catches claimants active while claiming disability.",
      "Geo-location verification exposes false accident location claims.",
      "Digital forensics of submitted photos reveals EXIF metadata inconsistencies.",
      "Database-assisted screening identifies repeat claimants across insurers.",
    ],
    link: "/insights",
  },
  {
    title: "Vendor Due Diligence: Protecting Your Supply Chain",
    category: "Due Diligence",
    icon: Globe,
    summary: "How thorough vendor verification prevents fraud and ensures compliance in procurement and supply chain operations.",
    points: [
      "Always verify vendor legal entity through ROC and GST records before onboarding.",
      "Field visits to vendor premises confirm operational reality vs. paper claims.",
      "Database-assisted verification catches blacklisted entities and related-party fraud.",
      "Separate vendor onboarding, payment approval, and audit responsibilities.",
    ],
    link: "/insights",
  },
];

const capabilities = [
  {
    icon: Search,
    title: "Digital Footprint Analysis",
    desc: "We analyse an individual's or entity's digital presence — including web mentions, forum activity, and public records — to identify inconsistencies, hidden relationships, and reputational risks.",
  },
  {
    icon: Users,
    title: "Social Media Intelligence (SOCMINT)",
    desc: "Our investigators gather and analyse open-source social media data to identify lifestyle inconsistencies, verify claims, and track relevant associations for corporate and personal investigations.",
  },
  {
    icon: Globe,
    title: "Geo-Location Verification",
    desc: "We verify claimed locations through field visits, digital evidence analysis (EXIF metadata, check-in records), and local enquiry — essential for insurance fraud and NRI verification cases.",
  },
  {
    icon: Database,
    title: "Database-Assisted Verification",
    desc: "Responsible use of proprietary and public databases enables rapid cross-referencing of individuals, entities, and records against adverse media, court records, and blacklists.",
  },
  {
    icon: Cpu,
    title: "AI-Assisted Document Screening",
    desc: "Machine learning tools assist our investigators in detecting document forgeries, certificate alterations, and metadata anomalies — all findings are validated by experienced human analysts.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-Based Reporting",
    desc: "All intelligence gathered is compiled into structured, legally responsible reports. We operate strictly within Indian law — our methods are ethical, admissible, and court-ready where applicable.",
  },
];

const KnowledgeCenter = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">

        {/* Header */}
        <section className="border-b border-border bg-card">
          <div className="container mx-auto px-6 py-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{t.kcTag}</span>
            <h1 className="mt-4 font-heading text-4xl font-bold text-foreground">{t.kcTitle}</h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {t.kcDesc}
            </p>
          </div>
        </section>

        {/* AI & Technology Capabilities Section */}
        <section className="border-b border-border bg-background">
          <div className="container mx-auto px-6 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Technology & Intelligence</span>
              <h2 className="mt-3 font-heading text-2xl font-bold text-foreground">Our Investigation Capabilities</h2>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                We use responsible, legally compliant technology to support our investigators. All technology-assisted findings are validated by experienced analysts before reporting.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="border border-border bg-card p-6 hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 border border-primary/20">
                      <cap.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-sm font-bold text-foreground">{cap.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 border border-primary/20 bg-primary/5 p-4">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-bold text-primary">Responsible Use Notice: </span>
                GDSS Investigations uses technology tools as investigative aids — not as replacement for human analysis. All findings are reviewed by licensed investigators before being included in any report. We do not make automated adverse decisions. Our methods comply fully with Indian privacy laws and ethical investigation standards.
              </p>
            </div>
          </div>
        </section>

        {/* Knowledge Articles */}
        <section className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Guides & Articles</span>
            <h2 className="mt-3 font-heading text-2xl font-bold text-foreground">Investigation & Verification Guides</h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {articles.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex h-full flex-col border border-border bg-card p-6 hover:border-primary transition-colors"
              >
                <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <article.icon className="h-4 w-4" /> {article.category}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground">{article.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">{article.summary}</p>
                <div className="mt-5 space-y-2.5">
                  {article.points.map((point) => (
                    <div key={point} className="flex gap-3 text-sm text-muted-foreground">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={article.link}
                  className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors"
                >
                  Read Full Article <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-10 border border-border bg-subtle p-6">
            <div className="flex gap-3">
              <FileWarning className="h-5 w-5 shrink-0 text-primary mt-0.5" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                These guides are educational. For active fraud, missing person, insurance, matrimonial, or legal-risk matters, use the secure inquiry form so the facts can be reviewed in context by our investigators.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="border border-border bg-card p-8">
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">Read All Insights</h3>
              <p className="text-sm text-muted-foreground mb-5">Full articles on investigation, fraud detection, and verification best practices.</p>
              <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                View All Articles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="border border-primary/30 bg-primary/5 p-8">
              <ShieldCheck className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">Discuss Your Case</h3>
              <p className="text-sm text-muted-foreground mb-5">Our investigators review your specific situation confidentially. No commitment required for the initial consultation.</p>
              <Link to="/inquiry" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors">
                Start Confidential Inquiry <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KnowledgeCenter;
