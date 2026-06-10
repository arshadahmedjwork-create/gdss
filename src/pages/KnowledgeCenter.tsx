import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, BookOpen, FileWarning, ShieldCheck } from "lucide-react";

const articles = [
  {
    title: "How to Detect Fake Resumes Before Hiring",
    category: "Corporate BGV",
    summary: "Practical warning signs across employment history, education claims, identity documents, reference patterns, and address verification.",
    points: ["Cross-check employment dates with documents and direct verification.", "Watch for repeated generic references or unverifiable company domains.", "Use address and identity verification before final offer release."],
  },
  {
    title: "NRI Marriage Fraud Warning Signs",
    category: "Matrimonial Verification",
    summary: "A family-focused guide to spotting inconsistent overseas claims, hidden relationships, employment misrepresentation, and property disputes.",
    points: ["Verify India-based family, property, and local reputation discreetly.", "Check claimed overseas employment and immigration narratives for gaps.", "Avoid sharing money or documents before independent verification."],
  },
  {
    title: "Corporate Fraud Prevention Checklist",
    category: "Risk Advisory",
    summary: "Controls that reduce vendor fraud, employee misconduct, ghost employment, false invoices, and internal collusion.",
    points: ["Separate vendor onboarding, payment approval, and periodic audit roles.", "Run surprise field verification for high-risk vendors and locations.", "Document incident response before evidence disappears."],
  },
];

const KnowledgeCenter = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="border-b border-border bg-card">
          <div className="container mx-auto px-6 py-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Knowledge Center</span>
            <h1 className="mt-4 font-heading text-4xl font-bold text-foreground">Investigation & Verification Guides</h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Practical guides for corporate risk teams, families, NRIs, insurers, and individuals planning confidential verification.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="flex h-full flex-col border border-border bg-card p-6">
                <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  <BookOpen className="h-4 w-4" /> {article.category}
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">{article.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{article.summary}</p>
                <div className="mt-6 space-y-3">
                  {article.points.map((point) => (
                    <div key={point} className="flex gap-3 text-sm text-muted-foreground">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <a href="/inquiry" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  Discuss a related case <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-10 border border-border bg-subtle p-6">
            <div className="flex gap-3">
              <FileWarning className="h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                These guides are educational. For active fraud, missing person, insurance, matrimonial, or legal-risk matters, use the secure inquiry form so the facts can be reviewed in context.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KnowledgeCenter;
