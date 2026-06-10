import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, HelpCircle, ShieldCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export type ServicePageData = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  services: string[];
  benefits: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
};

const ServicePage = ({ data }: { data: ServicePageData }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <section className="border-b border-border bg-foreground text-background">
          <div className="container mx-auto px-6 py-20">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">{data.eyebrow}</span>
            <div className="mt-5 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">{data.title}</h1>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-background/70">{data.description}</p>
              </div>
              <div className="border border-background/15 bg-background/5 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">Case Assurance</p>
                <div className="mt-4 space-y-3">
                  {data.highlights.map((item) => (
                    <div key={item} className="flex gap-3 text-sm text-white">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Scope</span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">What We Verify</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Each assignment is scoped with documented objectives, lawful collection methods, and reporting standards before field work begins.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {data.services.map((item) => (
                <div key={item} className="flex gap-3 border border-border bg-card p-4 text-sm font-medium text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card py-20">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Benefits</span>
                <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">Why Clients Use This Service</h2>
                <div className="mt-8 space-y-4">
                  {data.benefits.map((benefit) => (
                    <div key={benefit} className="border-l-4 border-primary bg-background p-5 text-sm leading-relaxed text-muted-foreground">
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Process</span>
                <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">Investigation Workflow</h2>
                <div className="mt-8 space-y-4">
                  {data.process.map((step, index) => (
                    <div key={step} className="flex gap-4 border border-border bg-background p-5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">FAQ</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground">Common Questions</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {data.faqs.map((faq) => (
                <div key={faq.question} className="border border-border bg-card p-6">
                  <div className="mb-3 flex items-center gap-2 font-heading text-base font-bold text-foreground">
                    <HelpCircle className="h-4 w-4 text-primary" />
                    {faq.question}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto flex flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-heading text-2xl font-bold">Need a discreet verification plan?</h2>
              <p className="mt-2 max-w-2xl text-sm text-primary-foreground/80">
                Share the objective, location, urgency, and evidence requirements. A senior investigator will respond with a lawful next-step plan.
              </p>
            </div>
            <Link to="/inquiry" className="inline-flex items-center justify-center gap-2 bg-primary-foreground px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary-foreground/90">
              Start Secure Inquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
