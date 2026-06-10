import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type LegalPageProps = {
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
};

const LegalPage = ({ title, updated, intro, sections }: LegalPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="border-b border-border bg-card">
          <div className="container mx-auto px-6 py-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">GDSS Compliance</span>
            <h1 className="mt-4 font-heading text-4xl font-bold text-foreground">{title}</h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{intro}</p>
            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">Last updated: {updated}</p>
          </div>
        </section>

        <section className="container mx-auto max-w-4xl px-6 py-14">
          <div className="space-y-8">
            {sections.map((section) => (
              <article key={section.heading} className="border border-border bg-card p-6">
                <h2 className="font-heading text-xl font-bold text-foreground">{section.heading}</h2>
                <div className="mt-4 space-y-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
